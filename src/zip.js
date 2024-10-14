import fs from 'fs';
import { pipeline } from 'stream/promises';
import zlib from 'zlib';

export const compress = async (source, destination) => {
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(`${destination}.br`);
  const brotli = zlib.createBrotliCompress();
  await pipeline(readStream, brotli, writeStream);
}

export const decompress = async (source, destination) => {
  const readStream = fs.createReadStream(source);
  const writeStream = fs.createWriteStream(destination);
  const brotli = zlib.createBrotliDecompress();
  await pipeline(readStream, brotli, writeStream);
}
