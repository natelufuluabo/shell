import readline from 'readline';
import dotenv from 'dotenv';
import fs from 'fs';
import figlet from 'figlet';
import gradient from 'gradient-string';
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
    fs.appendFile(process.env.HISTORY_FILE_PATH, `${command[0]}\n`, (err) => {
        if (err) console.log('Error writing file');
    })
}

function welcomeMsg() {
    console.clear();
    const msg = `
    Welcome to ShellX!
    `
    figlet(msg, (err, data) => {
        console.log(gradient.pastel.multiline(data));
        getUserInput();
    })
}

export function startShell() {
    welcomeMsg();
}
