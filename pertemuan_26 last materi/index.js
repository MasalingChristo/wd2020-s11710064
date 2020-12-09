
//const person =["john", 24, "programmer", true];

// const person ={
//     name: "john",
//     age:24,
//     job:"programmer",
//     isMarried:true,
    
//     sayHallo: function(){
//         console.log("Hallo world")
//     }
// };
// person.age = 25
// person.address = "Manado"

// delete person.address
// //cara meng'akses nilai pada object
// console.log(person.name)
// console.log(person["age"])
// //console.log(person.address) propertinya dihapus
// console.log(person)

// person.sayHallo();



//javaScript DOM

let title = document.getElementsByTagName('h1')[0].innerText
//console.log(title)


title = document.getElementById('header2').innerText
console.log(title)

let umur = document.getElementById('umur').value
console.log(umur)

function helloWorld()
{
    // alert("Hello World");
      let value = document.getElementById('umur').value
    //   console.log(value)
    // alert(value)

    document.getElementsByTagName('p')[1].innerText = value
    document.querySelector('.header').style.color ="red"
    document.querySelector('.header').style.fontSize = '3em'
    document.querySelector('.header').style.backgroundColor = "green"

    let span = document.getElementsByTagName('span')[0]
    span.style.color = 'yellow'
}
