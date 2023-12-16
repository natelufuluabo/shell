import readline from 'readline';
import fs from 'fs';
import { executeCommand } from './functions/execute.js';

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
    const command = content.split(' ')
    fs.appendFile('./history.txt', `${command[0]}\n`, (err) => {
        if (err) console.log('Error writing file');
    })
}

export function startShell() {
    getUserInput();
}
