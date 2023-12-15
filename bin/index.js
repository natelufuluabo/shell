#!/usr/bin/env node

import readline from 'readline';
import { exec } from 'child_process';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('ccsh> ', (command) => {
    exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Error executing command: ${error.message}`);
          return;
        }
      
        if (stderr) {
          console.error(`Command stderr: ${stderr}`);
          return;
        }
      
        console.log(`${stdout}`);
    });
    rl.close();
});