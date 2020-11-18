//  Array

// let nilai1=90;
// let nilai2=80;
// let nilai3=75;
// let niali4=100;
// let nilai5=85;

let nilai = [30, 90, 75, 85,  100];

for(let i=0; i< nilai.length;  i++)
{
    console.log("Nilai =", nilai[i] +5);
}
console.log(nilai)
// nilai[2] = 90;
// console.log(nilai.length-1);

let john = ["John", "Doe", 33, true];
console.log(john.length-1);
console.log(john.length);

//toString() ==merubah tipe data menjadi string
console.log(john.toString());

//Join()
console.log(john.join("-")) 


//pop() === mengeluarkan nilai paling terakhir pada array

john.pop();

console.log(john.join("-"))

//push === menambah nilai pada urutan yang paling terakhir
john.push(true);
john.push("Hallo john")
console.log(john.join("-"))

//shift () ===nilai elemen paling pertama pada array

john.shift();
console.log(john.join("-"))

//unshift   
john.unshift("John")
console.log(john.join("-"))

//splice
john.splice(2,0, "He", "is");
console.log(john.join("-"))

//concat===menggabungkan lebih dari satu array

let johnnangka= john.concat (nilai)
console.log ( johnnangka)

let ganjil = nilai.slice(2, 4)
 console.log(ganjil)

 //short

 let fruits =["Banana", "orange", "Apple", "Mango"];

 console.log(fruits.sort());




//reverse()

john.reverse();

console.log(john);


