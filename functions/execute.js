import { saveHistory } from "../utils.js";
import { exec } from 'child_process';

export function executeCommand(command, callback) {
    saveHistory(command);
    exec(command, (error, stdout, stderr) => {
        if (error || stderr) {
            console.log(`No such file or directory`);
        }
        console.log(`${stdout}`);
        callback(); 
    });
}