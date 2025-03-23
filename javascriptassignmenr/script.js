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


//task
let arr12 = [1, 2, 3, 4, 5, 6];
console.log(arr12.map((x) => x * 3));

let arr13 = [1, 2, 2, 3, 3, 4, 5]; //[1,2,3,4,5] x,y,z => value ,index , array
let res3 = arr13.filter((x, y, z) => z.indexOf(x) === y);
console.log(res3);

let arr0 = [
  { name: "hussam", age: 30 },
  { name: "ali", age: 40 },
  { name: "ahmad", age: 22 },
];
arr0.sort((a, b) => a.age - b.age); // ترتب الارري من الاقل للاكبر
console.log(arr0);


let arr6= [1,5,9,6,3,87,72,23]

function largeNum(arr6){
    return Math.max(...arr6)
}

console.log(largeNum(arr6))



function reverseArray(arr) {
    const reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArray.push(arr[i]); 
    }
    return reversedArray;
}

const myArray = [1, 2, 3, 4, 5];
const reversed = reverseArray(myArray);

console.log(reversed);



let array= [1,5,9,6,3,87,72,23]

function sumNum(array,target){
array.sort((a,b => a-b));

let left =0;
let right = array.length-1;

while(left< right){
    let sum =array[left] + array[right];
    if (sum === target){
        return [array[left], array[right]];
    } else if (sum< target){
        left ++;
    } else{
        right --;
    }
}
return null;
}
