import { executeCommand } from "./utils_functions/main.js";

export async function ccwc(command) {
    if (command.split(' ').length === 1 || command.split(' ')[1] === '') {
        console.log('No such file or directory');
        return
    }
    // Check if the stdin is coming from a pipe
    if (!process.stdin.isTTY) {
        let data = '';
        process.stdin.on('data', async (chunk) => {
            const buffer = buffer.from(chunk);
            const text = buffer.toString('utf8');
            data += text;
        });
    
        process.stdin.on('end', async () => {
            await executeApp(data);
        });
    } else {
        if (command.split(' ').length === 3) {
            const option = command.split(' ')[1];
            const file = command.split(' ')[2];
            await executeCommand(option, file);
        }
        if (process.argv.length === 2) {
            const option = ''
            const file = command.split(' ')[1];
            await executeCommand(option, file);
        }
    }
}
