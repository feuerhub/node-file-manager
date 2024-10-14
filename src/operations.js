import { getHomedir, getUsername, getArchitecture, getEOL, getCpus } from './os.js';
import { getResolvedPath, ls, up, cd } from './navigation.js';
import { calculateHash } from './hash.js';
import { compress, decompress } from './zip.js';
import { cat, add, rn, cp, mv, rm } from './files.js';

export const execute = async (command) => {
    const commandParameters = command.split(' ');
    if (commandParameters[0] === 'os') {
        //OS operations
        switch (commandParameters[1]) {
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
        switch (commandParameters[0]) {
            //Navigation operations
            case 'ls':
                await ls();
                break;
            case 'up':
                up();
                break;
            case 'cd':
                if (!commandParameters[1]) {
                    console.log('Invalid input');
                    break;
                }
                cd(getResolvedPath(commandParameters[1]));
                break;
            //FS operations
            case 'mv':
                if (!commandParameters[1] || !commandParameters[2]) {
                    console.log('Invalid input');
                    break;
                }
                mv(getResolvedPath(commandParameters[1]), getResolvedPath(commandParameters[2]));
                break;
            case 'cp':
                if (!commandParameters[1] || !commandParameters[2]) {
                    console.log('Invalid input');
                    break;
                }
                cp(getResolvedPath(commandParameters[1]), getResolvedPath(commandParameters[2]));
                break;
            case 'rn':
                if (!commandParameters[1] || !commandParameters[2]) {
                    console.log('Invalid input');
                    break;
                }
                rn(getResolvedPath(commandParameters[1]), commandParameters[2]);
                break;
            case 'add':
                if (!commandParameters[1]) {
                    console.log('Invalid input');
                    break;
                }
                add(getResolvedPath(commandParameters[1]));
                break;
            case 'cat':
                if (!commandParameters[1]) {
                    console.log('Invalid input');
                    break;
                }
                cat(getResolvedPath(commandParameters[1]));
                break;
            case 'rm':
                if (!commandParameters[1]) {
                    console.log('Invalid input');
                    break;
                }
                rm(getResolvedPath(commandParameters[1]));
                break;
            //Hash operations
            case 'hash':
                if (!commandParameters[1]) {
                    console.log('Invalid input');
                    break;
                }
                await calculateHash(getResolvedPath(commandParameters[1]));
                break;
            //Compress & Decompress operations
            case 'compress':
                if (!commandParameters[1] || !commandParameters[2]) {
                    console.log('Invalid input');
                    break;
                }
                await compress(getResolvedPath(commandParameters[1]), getResolvedPath(commandParameters[2]));
                break;
            case 'decompress':
                if (!commandParameters[1] || !commandParameters[2]) {
                    console.log('Invalid input');
                    break;
                }
                await decompress(getResolvedPath(commandParameters[1]), getResolvedPath(commandParameters[2]));
                break;
            default:
                console.log('Invalid input');
                break;
        }
    }
}