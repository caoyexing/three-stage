export const  cityInfo=(city)=>{
  // console.log(city)
  let letterArr =[]
  let newCity = []
  let list =[]
  for(let code = 65;code<91;code ++){
    
    letterArr.push(String.fromCharCode(code))
  }
  // console.log(letterArr)
  letterArr.forEach((letter)=>{
     list = city.filter((item)=>{
      return item.pinyin.substring(0,1).toUpperCase() === letter
    })
    if(list.length > 0){
      newCity.push({
        type:letter,
        list:list
      })
    }
  })
  // console.log(newCity)
return newCity
}