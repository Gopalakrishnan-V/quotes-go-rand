# Quotes Go 

Random Quotes generator with author names and images.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install quotes-go

```bash
npm install quotes-go
```

## Demo
https://quotes-go-demo.herokuapp.com/


## Usage

##### Import:
```
import quotesGo from "quotes-go";
```
<br />

##### Get Random Quote:
```
const randomQuote = quotesGo.getRandomQuote();
// Returns The following Object
```

> {
  text: "Never give up. Today is hard, tomorrow will be worse, but the day after tomorrow will be sunshine.",
  id: "379",
  author: {
    name: "Jack Ma",
    shortDesc: "Chinese business magnate",
    avatar: "https://etimg.etb2bimg.com/photo/68888260.cms"
  }
}

<br />

##### Complete Authors List:
```
const authorsList = quotesGo.getAuthorsList();
```
<br />

##### Quotes from specified author:
```
const authorQuotes = quotesGo.getAuthorQuotes("steve_jobs");
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)
