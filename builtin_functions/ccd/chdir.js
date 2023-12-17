import path from 'path';

export function chdir(command) {
    if (command.split(' ').length === 1 || command.split(' ')[1] === '') {
        console.log(`No such file or directory`);
        return
    }
    const targetDirectory = path.resolve(command.split(' ')[1]);
    process.chdir(targetDirectory);
}