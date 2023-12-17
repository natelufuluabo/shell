export function countBytes(file) {
    return Buffer.from(file, 'utf8').length;
}