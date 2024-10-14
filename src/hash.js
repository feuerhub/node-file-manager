import { createHash } from 'node:crypto';
import { createReadStream, promises as fs } from 'node:fs';

export const calculateHash = async (filePath) => {
    try {
        await fs.access(filePath);
        const hash = createHash('sha256');
        const stream = createReadStream(filePath);
        stream.on('data', (chunk) => {
            hash.update(chunk);
        });
        stream.on('end', () => {
            console.log(hash.digest('hex'));
        });
        stream.on('error', () => {
            console.log('Operation failed');
        });
    } catch {
        console.log('Operation failed');
    }
};
