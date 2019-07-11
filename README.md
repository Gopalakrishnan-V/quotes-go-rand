# Quotes Go 

Random Quotes generator with author names and images.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install quotes-go

```bash
npm install quotes-go
```

## Usage

```
import quotesGo from "quotes-go";

//Returns a random Quote every time
const randomQuote = quotesGo.getRandomQuote();

//Complete Authors List
const authorsList = quotesGo.getAuthorsList();

//Quotes from specified author
const authorQuotes = quotesGo.getAuthorQuotes("steve_jobs");
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
