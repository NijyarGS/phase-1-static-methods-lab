class Formatter {
  //add static methods here

  static capitalize(word) {
    return word.charAt(0).toUpperCase()+word.slice(1)
  }
  
  static sanitize(word) {
    const reg = /[a-z]|[A-Z]|[ ]|[\']|[-]|[1-9]/g;
    let sansWord = word.match(reg)
    let ful = sansWord ? sansWord.join('') : ""
    return ful
  }
  
  static titleize(word) {
    let arrayOfWords =  word.split(" ")
    let condtionsArray = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']

    let newSent = arrayOfWords.map((indWord,index)=>{
      
      if (index==0)
      {return this.capitalize(indWord)}

      if(condtionsArray.find(cod => cod.toLowerCase()==indWord.toLowerCase()))
      {
        return indWord
      }
      
      else{
        return this.capitalize(indWord)
      }
    })

    return newSent.join(" ")
  }

}


// let capi = Formatter.capitalize("thing")

// console.log(capi)

// let mrSans = Formatter.sanitize("\"Nijar\"@gmail.com - 2022 \'haha ?\' ")
// console.log(Formatter.sanitize("Entert*ain(i{ng-Elephan^ts"))
// console.log(mrSans)

// let mySentence = 'oh my God ,a white rabbit and an elephent at my door, but what for and where are they from'

// let mrTitle = Formatter.titleize(mySentence)

// console.log(mrTitle)
// 1- that takes in a string and capitalizes all words in a sentence 
// 2- except the, a, an, but, of, and, for, at, by, and from;
// 3- and always capitalizes the first word.