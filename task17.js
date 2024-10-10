const telephoneBook = {
    list: {
      "Misha": 89756417834,
      "Dima": 89678752463,
      "Vlad": 89576531245
    },
    addHuman(name, number)
    {
        this.list[name] = number;
    },
    deleteHuman(name)
    {
        delete this.list[name];
    }
 };
console.log(telephoneBook);

telephoneBook.addHuman('Alex', '89856752485');
  
telephoneBook.deleteHuman('Misha');

 for(const name in telephoneBook.list)
 {
    console.log("(" + name , "-", telephoneBook.list[name] + ")");
 }