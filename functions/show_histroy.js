import fs from 'fs/promises';
import dotenv from 'dotenv';

export async function show_history() {
    dotenv.config();
    const content = await fs.readFile(process.env.HISTORY_FILE_PATH, 'utf8');
    return content;
}