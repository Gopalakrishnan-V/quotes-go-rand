const _ = require("lodash");
const { authors, quotes } = require("./data/data");

module.exports.getRandomQuote = () => {
  const quotesShuffled = _.shuffle(quotes);
  const randomNum = _.random(quotesShuffled.length - 1);
  const { id, text, authorID } = quotesShuffled[randomNum];
  const randomQuote = { text, id };
  if (authors[authorID]) {
    randomQuote.author = authors[authorID];
    randomQuote.author.id = authorID;
  }
  return randomQuote;
};

module.exports.getAuthorsList = () => {
  return Object.keys(authors).map(id => {
    return {
      id,
      ...authors[id]
    };
  });
};

module.exports.getAuthorQuotes = authorID => {
  if (!authors[authorID]) {
    return null;
  }

  const { name, shortDesc, avatar } = authors[authorID];
  const authorQuotes = quotes.filter(quote => quote.authorID === authorID);
  return {
    id: authorID,
    name,
    shortDesc,
    avatar,
    quotes: authorQuotes
  };
};