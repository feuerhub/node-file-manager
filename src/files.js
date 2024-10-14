import fs from 'fs';

export const cat = async (filePath) => {
  const readableStream = fs.createReadStream(filePath, { encoding: 'utf-8' });
  readableStream.on('error', () => {
    console.log('Operation failed');
  });
  readableStream.pipe(process.stdout);
}

export const add = async (filePath) => {
  try {
    await fs.promises.writeFile(filePath, '');
  } catch {
    console.log('Operation failed');
  }
}

