//Arrays 
let marks = [10,20,30,40,50];
console.log(typeof marks);
console.log(marks);
console.log(marks.length);


console.log(marks[1]);


//Methods
/* 

pop()
push()
toString() 
concat()
ushift()
shift()
slice(st idx , ending idx );
splice(st idx , delete element number , replace elements);

*/

marks.push(60);
marks.push(70);

let str = marks.toString();

console.log(marks.slice(1,4))
marks.splice(2,2,15,25);



