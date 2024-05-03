// Metodo para ler os arquivos dos Comandos

const fs = require("node:fs");
const path = require("node:path");

const CmdArray = [];
const source = path.join(__dirname, "./source");
const dirs = fs.readdirSync(source);
let countItens = {"files": 0, "dirs": 0};

dirs.forEach(item => {
    const allDirs = path.join(source, item);
    countItens.dirs++;

    if (fs.statSync(allDirs).isDirectory()) {
        
        itens = fs.readdirSync(allDirs);
        itens.forEach(file => {
            const pathForFiles = path.join(allDirs, file);
            countItens.files++;

            if (path.extname(file) === ".js") {
                const content = fs.readFileSync(pathForFiles, "utf-8");
                CmdArray.push(content);
            }
        });
    }
});

const Eris = require("eris");
const bot = new Eris.Client("");

bot.on("ready", () => {
    console.log(`${bot.user.username} está Pronto!`);
});

bot.connect();

bot.slashCommands = new Eris.Collection();

/*bot.application.slashCommands.set(CmdArray);*/
console.log(`aaaaaa ${}`)

/*${countItens.dirs} Diretório(s) encontrado(s).\n${countItens.files} Arquivo(s) encontrado(s).*/