import path from 'path';
import {
    getHomedir,
    getUsername,
    getArchitecture,
    getEOL,
    getCpus
} from './os.js';
import { getResolvedPath, ls, up } from './navigation.js';
import { calculateHash } from './hash.js';

export const execute = async (command) => {
    if (command.split(' ')[0] == 'os') {
        //OS operations
        switch (command.split(' ')[1]) {
            case '--EOL':
                console.log(getEOL());
                break;
            case '--cpus':
                console.log(getCpus());
                break;
            case '--homedir':
                console.log(getHomedir());
                break;
            case '--username':
                console.log(getUsername());
                break;
            case '--architecture':
                console.log(getArchitecture());
                break;
            default:
                console.log('Invalid input');
                break;
        }
    } else {
        switch (command.split(' ')[0]) {
            //Navigation operations
            case 'ls':
                await ls();
                break;
            case 'up':
                up();
                break;
            //Hash operations
            case 'hash':
                const filePath = command.split(' ')[1];
                if (!filePath) {
                    console.log('Invalid input');
                    break;
                }
                await calculateHash(getResolvedPath(filePath));
                break;
            default:
                console.log('Invalid input');
                break;
        }
    }
}