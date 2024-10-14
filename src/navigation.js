import path from 'path';
import { promises as fs, readdir } from 'fs';

let currentDirectory = process.env.HOME || process.env.USERPROFILE;

export const getCurrentDirectory = () => {
    return currentDirectory;
}

export const getResolvedPath = (filePath) => {
    return path.resolve(getCurrentDirectory(), ...filePath.split(path.sep))
}

export const up = async () => {
    const parentDirectory = path.dirname(currentDirectory);
    const root = path.parse(currentDirectory).root;
    if (currentDirectory === root) return;
    currentDirectory = parentDirectory;
}

export const cd = async (newPath) => {
    try {
        await fs.access(newPath);
        const stats = await fs.stat(newPath);
        if (!stats.isDirectory()) {
            console.error('Operation failed');
        }
        currentDirectory = newPath;
    } catch (error) {
        console.error('Operation failed');
    }
};

export const ls = async () => {
    try {
        const files = await fs.readdir(currentDirectory, { withFileTypes: true });
        const result = files.map(file => {
            return { Name: file.name, Type: file.isDirectory() ? 'directory' : 'file' };
        });
        console.table(result);
    } catch (err) {
        console.error('Operation failed');
    }
}