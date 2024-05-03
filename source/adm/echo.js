const Eris = require("eris");
const Constants = Eris.Constants;

module.exports = {
    name: "teste",
    description: "Apenas um comando de teste",
    type: Constants.ApplicationCommandTypes.CHAT_INPUT,

    run: async (bot, inter) => {
        bot.createMessage("Um teste bem bolado")
    }
}