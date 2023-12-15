#!/usr/bin/env node

import readline from 'readline';
import fs from 'fs';
import { exec } from 'child_process';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    rl.question('ccsh> ', (command) => {
      if (command === 'exit') {
        rl.close();
      } else if (command === 'history') {
        executeCommand('cat history.txt', getUserInput);
      } else {
        executeCommand(command, getUserInput);
      }
    });
}

function saveHistory(content) {
    const command = content.split(' ')
    fs.appendFile('./history.txt', `${command[0]}\n`, (err) => {
        if (err) console.log('Error writing file');
    })
}
  
function executeCommand(command, callback) {
    saveHistory(command);
    exec(command, (error, stdout, stderr) => {
        if (error || stderr) {
            console.log(`No such file or directory`);
        }
        console.log(`${stdout}`);
        callback(); 
    });
}
  
getUserInput();