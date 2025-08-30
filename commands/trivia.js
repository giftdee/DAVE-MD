const axios = require('axios');

let triviaGames = {};

async function startTrivia(dave, chatId) {
    if (triviaGames[chatId]) {
        dave.sendMessage(chatId, { text: 'A trivia game is already in progress!' });
        return;
    }

    try {
        const response = await axios.get('https://opentdb.com/api.php?amount=1&type=multiple');
        const questionData = response.data.results[0];

        triviaGames[chatId] = {
            question: questionData.question,
            correctAnswer: questionData.correct_answer,
            options: [...questionData.incorrect_answers, questionData.correct_answer].sort(),
        };

        dave.sendMessage(chatId, {
            text: `Trivia Time!\n\nQuestion: ${triviaGames[chatId].question}\nOptions:\n${triviaGames[chatId].options.join('\n')}`
        });
    } catch (error) {
        dave.sendMessage(chatId, { text: 'Error fetching trivia question. Try again later.' });
    }
}

function answerTrivia(dave, chatId, answer) {
    if (!triviaGames[chatId]) {
        dave.sendMessage(chatId, { text: 'No trivia game is in progress.' });
        return;
    }

    const game = triviaGames[chatId];

    if (answer.toLowerCase() === game.correctAnswer.toLowerCase()) {
        dave.sendMessage(chatId, { text: `Correct! The answer is ${game.correctAnswer}` });
    } else {
        dave.sendMessage(chatId, { text: `Wrong! The correct answer was ${game.correctAnswer}` });
    }

    delete triviaGames[chatId];
}

module.exports = { startTrivia, answerTrivia };
