const username = process.argv[2].split('=')[1];
console.log(`Welcome to the File Manager, ${username}!`);

const logCurrentDirectory = async () => {
    console.log(`You are currently in path_to_working_directory`);
}

const exitMessage = `Thank you for using File Manager, ${username}, goodbye!`;
process.on('SIGINT', () => {
    console.log(exitMessage);
    process.exit();
});