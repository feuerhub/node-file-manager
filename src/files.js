import { readdir } from 'node:fs';

export const list = async (filePath) => {
    readdir(filePath, (err, files) => {
        if (err) {
            throw new Error('FS operation failed');
        }
        console.log(files);
    })
};