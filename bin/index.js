#!/usr/bin/env node

import readline from 'readline';
import { exec } from 'child_process';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getUserInput() {
    rl.question('ccsh> ', (command) => {
      if (command.toLowerCase() === 'exit') {
        rl.close();
      } else {
        executeCommand(command, getUserInput);
      }
    });
  }
  
function executeCommand(command, callback) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`${error.message}`);
        } 
        if (stderr) {
            console.error(`${stderr}`);
        }
        console.log(`${stdout}`);
        callback(); 
    });
}
  
getUserInput();