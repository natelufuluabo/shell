import { getFileContent } from './getFileContent.js';
import { countWords } from './wordCount.js';
import { countLine } from './lineCount.js';
import { countBytes } from './bytesCount.js';
import { countCharacters } from './charCount.js';

export async function executeCommand(options, fileName) {
    const text = await getFileContent(fileName);

    switch(options) {
        case '-w':
            console.log(countWords(text));
            break;
        case '-c':
            console.log(countBytes(text));
            break;
        case '-l':
            console.log(countLine(text));
            break;
        case '-m':
            console.log(countCharacters(text));
            break;
        default:
            console.log(
                countLine(text), 
                countWords(text),
                countBytes(text),
            );
            break;

    }
}