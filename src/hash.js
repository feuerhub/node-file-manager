import { createHash } from 'node:crypto';
import { createReadStream } from 'node:fs';

export const calculateHash = async (filePath) => {
    const hash = createHash('sha256');
    const stream = createReadStream(filePath, (err) => {
        console.log('Operation failed');
        return;
    });
    stream.on('data', (chunk) => {
        hash.update(chunk);
    })
    stream.on('end', () => {
        console.log(hash.digest('hex'));
    })
 };
