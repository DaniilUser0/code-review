const phoneBook = {
    "Alex": 89708506725,
    "Anton": 89779678198,
    "Gleb": 89879674362,
    "Lev": 89677658142,
    "Maksim": 89779674513,
    "Yaroslav": 89767645413
};
console.log(phoneBook.Anton);

phoneBook[phoneBook["Lev"]];
phoneBook["Alex"] = 89198190861;
delete phoneBook["Maksim"];

console.log(phoneBook);

const telephoneBook = {
    list: {
      "Misha": 89756417834,
      "Dima": 89678752463,
      "Vlad": 89576531245
    },
    log() 
    {
          console.log(this.list) 
    }
  };
  
  telephoneBook.log();