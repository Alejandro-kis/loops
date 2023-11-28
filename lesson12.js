
//
//for (var v = 0; v < 5; v++) {
    //console.log('v is,', v)
  //  console.log("I love coding")
//}

// const Enemies = [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",

// ]

// for(var i = 0 ; i < 5; i++) {
//     console.log(Enemies[i - 0])
// }

// for (var v = 15; v < 30; v++) {
//     if (v % 3 ==0) {
//         console.log(v)
//     }

// }

// for (let i = 0; i < 4; i++) {
//     let row = "";
//     for (let j = 0; j < 4; j++) {
//         row += "📦";
//     }
//     console.log(row);
// }

// for (var v = 0; v < 4; v++) {
// document.querySelector(".loopFOUR").innerHTML += "📦"
// }

// for (let i = 1; i <= 7; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//         row += "🦴";
//     }
//     console.log(row);
// }

// for(let i = 0; i <=7; i++) {
//     let row = "";
//     for (let v = 1; i <=v; v++) {
//         row += "5"
//     }
//     console.log(row);
// }

for (var v = 7 ; v >=0; v--) {
  for(var i=v;i > 0; v--)
    document.querySelector(".loop5").innerHTML +='~'
  for (var e=v; e<8; e++) {
    docuemnt.querySelector(".loop5").innerHTML +='🦴'
  }
  docuemnt.querySelector(".loop5").innerHTML += '<br>'
  
}
