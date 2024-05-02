// Metodo para ler os arquivos dos Comandos

const fs = require("node:fs");
const path = require("node:path");

const CmdArray = [];
const source = path.join(__dirname, "./source");
const dirs = fs.readdirSync(source);

dirs.forEach(item => {
    const allDirs = path.join(source, item);
    
    if (fs.statSync(allDirs).isDirectory()) {
        
        const itens = fs.readdirSync(allDirs);
        itens.forEach(file => {
            const pathForFiles = path.join(allDirs, file);

            if (path.extname(file) === ".js") {
                const content = fs.readFileSync(pathForFiles, "utf-8");
                CmdArray.push(content);
            }
        });
    }
});