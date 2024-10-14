import { startCLISession } from "./cli.js";

const username = process.argv[2].split('=')[1];
startCLISession(username);