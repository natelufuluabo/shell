import fs from 'fs/promises';

export async function show_history() {
    const content = await fs.readFile('./history.txt', 'utf8');
    return content;
}