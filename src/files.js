import fs from 'fs';
import path from 'path';
import { pipeline } from 'stream/promises';

export const cat = async (filePath) => {
  const readableStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
  readableStream.on('error', () => {
    console.log('Operation failed');
  });
  readableStream.pipe(process.stdout);
}

export const add = async (filePath) => {
    try {
        await fs.promises.access(filePath);
        console.log('Operation failed');
    } catch {
        try {
            await fs.promises.writeFile(filePath, '');
        } catch {
            console.log('Operation failed');
        }
    }
};

export const rn = async (oldPath, newName) => {
  const newAbsolutePath = path.join(path.dirname(oldPath), newName);
  try {
    await fs.promises.rename(oldPath, newAbsolutePath);
  } catch {
    console.log('Operation failed');
  }
}

export const cp = async(source, destination) => {
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destination);
  try {
    await pipeline(readStream, writeStream);
  } catch {
    console.log('Operation failed');
  }
}

export const mv = async (source, destination) => {
  try {
    await cp(source, destination);
    await fs.promises.unlink(source);
  } catch {
    console.log('Operation failed');
  }
}

export const rm = async (filePath) => {
  try {
    await fs.promises.unlink(filePath);
  } catch {
    console.log('Operation failed');
  }
}
