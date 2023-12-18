import { getFileContent } from './getFileContent.js';
import { countWords } from './wordCount.js';
import { countLine } from './lineCount.js';
import { countBytes } from './bytesCount.js';
import { countCharacters } from './charCount.js';

export async function executeCommand(options, fileName) {
    const text = await getFileContent(fileName);

    if (text === undefined) return console.log('No such file or directory')

    if (options === '-w') console.log(countWords(text));
    else if (options === '-c') console.log(countBytes(text));
    else if (options === '-l') console.log(countLine(text));
    else if (options === '-m') console.log(countCharacters(text));
    else console.log(
        countLine(text), 
        countWords(text),
        countBytes(text),
    );
}