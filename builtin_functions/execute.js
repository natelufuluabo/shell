import { exec } from 'child_process';
import { chdir } from './ccd/chdir.js';
import { saveHistory } from "../utils.js";
import { show_history } from './history/show_histroy.js';

export async function executeCommand(command, callback) {
    saveHistory(command);
    const firstSegment = command.split(' ')[0];
    switch (firstSegment) {
        case 'history':
            console.log(`${await show_history()}`);
            callback();
            break;
        case 'ccd':
            chdir(command);
            callback();
            break;
        default:
            exec(command, (error, stdout, stderr) => {
                if (error || stderr) console.log(`No such file or directory`);
                console.log(`${stdout}`);
                callback(); 
            }); 
            break;
    }
}