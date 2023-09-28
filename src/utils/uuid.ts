/**
 * Retorna uma string com caracteres aleatórios
 * Fonte: https://medium.com/nerd-for-tech/write-simple-function-for-uuid-instead-of-install-package-in-reactjs-29619e46d99c
 */
export function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
        .replace(
            /[xy]/g, 
            c => {
                const r = (Math.random() * 16) | 0,
                    v = c == "x" ? r : (r & 0x3) | 0x8;
                    return v.toString(16);
            }
    );
}