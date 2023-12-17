import fs from 'fs/promises';
import path from 'path';

export async function getFileContent(input) {
  try {
    // Check if the input is a file path
    const isFilePath = typeof input === 'string' && !input.includes('\n');

    if (isFilePath) {
      // If it's a file path, read the file and return its content
      const fileContent = await fs.readFile(path.resolve(input), 'utf8');
      return fileContent;
    } else {
      // If it's not a file path, assume it's content and return it
      return input;
    }
  } catch (error) {
    // Handle errors, e.g., file not found
    console.error('Error:', error.message);
    throw error;
  }
}