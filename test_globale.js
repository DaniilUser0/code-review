const phoneBook = {
    list: { // контактам дали свойство лист
    "Daniil Brat": 23, // ключ всегда цифры
    "Artem brat": 22, // ключ - возраст
    "Shuklin Daniil": 24 //
  },


  log() { 
    console.log(this.list)
    
  }
}
  
  phoneBook.log();