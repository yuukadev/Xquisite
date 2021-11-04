/*
const Discord = require("discord.js");
const fetch = require("node-fetch");

module.exports = {
  name: "joke",
  description: "This command sends random joke",
  category: "fun",
  example: ["!joke"],
  calback({ message }) {
    const getJokes = async () => {
      let member = message.author;
      let res = await fetch("https://api.jokes.one/joke/random");
      let random = await res.json();

      
    };

    getJokes();
  },
};
*/