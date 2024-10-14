import readline from 'readline';
import { execute } from './operations.js';
import { getCurrentDirectory } from './navigation.js';

export const startCLISession = async (username) => {
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout, });
    console.log(`Welcome to the File Manager, ${username}!`);
    showWorkingDirectoryPath();
    rl.prompt();
    rl.on('line', async (line) => {
        if (line == '.exit') {
            stopCLISession(rl, username);
        }
        try {
            await execute(line);
        } finally {
            showWorkingDirectoryPath();
        }
    }).on('SIGINT', () => {
        stopCLISession(rl, username);
    });
}
const stopCLISession = (rl, username) => {
    console.log(`Thank you for using File Manager, ${username}, goodbye!`);
    rl.close();
    process.exit(0);
}

const showWorkingDirectoryPath = () => {
    const path = getCurrentDirectory();
    console.log(`You are currently in ${path}`);
}