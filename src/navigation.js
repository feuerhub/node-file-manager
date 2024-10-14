import path from 'path';
import { readdir } from 'node:fs';

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

export const ls = async () => {
    readdir(currentDirectory, { withFileTypes: true }, (err, files) => {
        if (err) {
            throw new Error('Operation failed');
        }
        const result = files.map(file => {
            return {Name: file.name, Type: file.isDirectory() ? 'directory' : 'file'}
        });
        console.table(result);
    })
}