const fs = require('fs');

const words = ['javascript', 'bot', 'hangman', 'whatsapp', 'nodejs'];
let hangmanGames = {};

function startHangman(dave, chatId) {
    const word = words[Math.floor(Math.random() * words.length)];
    const maskedWord = '_ '.repeat(word.length).trim();

    hangmanGames[chatId] = {
        word,
        maskedWord: maskedWord.split(' '),
        guessedLetters: [],
        wrongGuesses: 0,
        maxWrongGuesses: 6,
    };

    dave.sendMessage(chatId, { text: `Game started! The word is: ${maskedWord}` });
}

function guessLetter(dave, chatId, letter) {
    if (!hangmanGames[chatId]) {
        dave.sendMessage(chatId, { text: 'No game in progress. Start a new game with .hangman' });
        return;
    }

    const game = hangmanGames[chatId];
    const { word, guessedLetters, maskedWord, maxWrongGuesses } = game;

    if (guessedLetters.includes(letter)) {
        dave.sendMessage(chatId, { text: `You already guessed "${letter}". Try another letter.` });
        return;
    }

    guessedLetters.push(letter);

    if (word.includes(letter)) {
        for (let i = 0; i < word.length; i++) {
            if (word[i] === letter) {
                maskedWord[i] = letter;
            }
        }
        dave.sendMessage(chatId, { text: `Good guess! ${maskedWord.join(' ')}` });

        if (!maskedWord.includes('_')) {
            dave.sendMessage(chatId, { text: `Congratulations! You guessed the word: ${word}` });
            delete hangmanGames[chatId];
        }
    } else {
        game.wrongGuesses += 1;
        dave.sendMessage(chatId, { text: `Wrong guess! You have ${maxWrongGuesses - game.wrongGuesses} tries left.` });

        if (game.wrongGuesses >= maxWrongGuesses) {
            dave.sendMessage(chatId, { text: `Game over! The word was: ${word}` });
            delete hangmanGames[chatId];
        }
    }
}

module.exports = { startHangman, guessLetter };
