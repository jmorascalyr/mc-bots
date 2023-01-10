const mineflayer = require('mineflayer')

if (process.argv.length < 4 || process.argv.length > 6) {
  console.log('Usage : node attack.js <host> <port> [<name>] [<password>]')
  process.exit(1)
}

hateSpeech=[
  "THIS SERVER HAS BEEN COMPROMISED AND I AM AN EVIL CHEAT BOT",
]

const quotes = require('success-motivational-quotes');
const { uniqueNamesGenerator, adjectives, colors, animals } = require('unique-names-generator');
const name = uniqueNamesGenerator({
  dictionaries: [adjectives, animals],
  length: 2
});

const { pathfinder, Movements, goals } = require('mineflayer-pathfinder')
const {parse, transform, stringify} = require('csv/sync');
const rawRecords = parse(hateSpeech);

const pvp = require('mineflayer-pvp').plugin
var entity = null;

function createBot () {
  const bot = mineflayer.createBot({
    host: process.argv[2],
    port: parseInt(process.argv[3]),
    username: process.argv[4] ? process.argv[4] : name,
    password: process.argv[5]
  })
  bot.loadPlugin(pathfinder)
  bot.loadPlugin(pvp)

  bot.on('error', (err) => console.log(err))
  bot.on('end', function() {setTimeout(function() { createBot() }, 5000);});

  bot.on('physicsTick', () => {
    if (Math.floor(Math.random() * 1000) == 0) {
      try {
  	randomOne=Math.floor(Math.random() * hateSpeech.length)
        bot.chat(hateSpeech[randomOne]);
      } catch(e) {console.log(e) }
    }
  });
}
createBot()
