// console.log("Hallo");


//conditional JavaScript

let firstName ="John";
let isMarried = false;

// if(isMarried === true)
if(isMarried)
{
    console.log(firstName + " is Married");
}else
{
    console.log(firstName + " is not Married");
}
/*
    jika umur < 13 tahun maka tampilkan kategori anak-anak.
    Jika umur > 13 sampai 16 tahun. Tampilkan kategori remaja
    Jika umur > 16 sampai 25 tahun. Tampilkan kategori anak muda
    Jika umur > 25 sampai 50 tahun. Tampilkan kategori orang dewasa
    
*/


// if (umur < 13){
//     console.log(" Kategori anak-anak");
// }
// else if(umur >= 13 && umur < 17){
//     console.log("kategori remaja");
// } 
// else if(umur >=17 && umur < 26){
//     console.log("kategori anak muda");
// }
// else if(umur >=26 && umur < 50){
//     console.log("kategori orang dewasa");
// }


// let job ="teacher";

// switch(job){
//     case "teacher": console.log(firstName + " is a teacher");
//     break;

//     case "driver" : console.log(firstName + " is a driver");
//     break;

//     case "instructor": console.log(firstName + " is a instructor ");
//     break;

//     default :
//     console.log(firstName + " does something else");
//     break;
// }

//  let umur =35;

// switch(true)

// {
// case umur < 13 :
//     console.log("kategori anak-anak");
//     break;
// case umur >=13 && umur <17:
//     console.log("kategori remaja");
//     break;
// case umur >=17 && umur < 26:
//     console.log ("kategori anak muda")
//     break;
// case umur >=26 && umur <50:
//     console.log("kategori dewasa");
//     break;

// default:
//     console.log("tidak ada dalam range");
//     break;


// }

    //JavaScript function


    //cara pertama deklarasi function


    
// function halloWorld(){
//     console.log("Hallo World");
// }

// halloWorld();
 

    //cara kedua
let age =33;

let helloWorld= function(nama){
    
    console.log("Hello nama saya adalah " + nama + ". Umur saya adalah " + age + " tahun.");
};


helloWorld("christo");

