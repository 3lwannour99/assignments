let para = "Technology has significantly transformed the way we live, work, and communicate. The rapid advancement of artificial intelligence, the internet, and mobile devices has made information more accessible than ever before. Businesses rely on technology to streamline operations, improve efficiency, and enhance customer experiences. Additionally, social media platforms have changed the way people interact, allowing for instant communication across the globe. However, while technology brings many benefits, it also presents challenges such as privacy concerns, cybersecurity threats, and the potential for social isolation. Balancing innovation with ethical considerations is essential for a sustainable future."
console.log(para.length);

let fname= 'nour';
console.log(fname.slice(1));

let title = "develOPment"
console.log(title.charAt(0).toUpperCase()+ title.toLocaleLowerCase().slice(1));

let email0 ="         emial@example.com        "
console.log(email0.trim());

let readmore = "Technology has significantly transformed the way we live, work, and communicate. The rapid advancement of artificial intelligence, the internet, and mobile devices has made information more accessible than ever before. Businesses rely on technology to streamline operations, improve efficiency, and enhance customer experiences. Additionally, social media platforms have changed the way people interact, allowing for instant communication across the globe. However, while technology brings many benefits, it also presents challenges such as privacy concerns, cybersecurity threats, and the potential for social isolation. Balancing innovation with ethical considerations is essential for a sustainable future."
  console.log(readmore.slice(0,50) + "...Read more");

 let Phone = '0772839753';
 console.log("*".repeat(Phone.length -3) + Phone.substring(Phone.length -3))



 function checkBadWords(str11){
    if(str11.includes("badWords")){
        return str11.replaceAll("badWords" ,"*********")
    }
    return "approved word";
}

console.log(checkBadWords("bdbgdb badWords blvbl badWords "));


let strin ="javascript world , world";
console.log(strin.split(" "));


let str15 ="javascript world , world";
console.log(str15.includes("script"));

let fileName = "test.jpg";
if(fileName.endsWith('.jpg') || fileName.endsWith('.png')){} 

let myname ='nour';
let lname= 'alwan';

console.log(myname.concat(lname));

let st13= " javascript world world";
console.log(st13.indexOf("pt"));
console.log(st13.lastIndexOf("ld"));