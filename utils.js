import readline from 'readline';
import dotenv from 'dotenv';
import fs from 'fs';
import { executeCommand } from './builtin_functions/execute.js';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    rl.question('ccsh> ', (command) => {
        if (command === 'exit') return rl.close();
        return executeCommand(command, getUserInput);
    });
}

export function saveHistory(content) {
    dotenv.config();
    const command = content.split(' ')
    fs.appendFile('/Users/nathankalalalufuluabo/Desktop/mycliapps/history.txt', `${command[0]}\n`, (err) => {
        if (err) console.log('Error writing file');
    })
}

export function startShell() {
    getUserInput();
}
