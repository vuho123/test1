//Bai 2
function myFunction(string1, string2) {
    let res1 = string1.split("");
    let res2 = string2.split("");
  
    let newString = "";
    let max=Math.max(res1.length,res2.length)
    for (let i = 0; i < max ; i++) {
      if ((res1[i] == undefined)) {
        res1[i] = "";
      }
      else if ((res2[i] == undefined)) {
        res2[i] = "";
      }
      
      newString += res1[i] + res2[i];
      
    }
    console.log(newString);
    return newString;
  }
  myFunction("abcd", "123");
  myFunction("abc","123")
  myFunction("abc","0123")
  