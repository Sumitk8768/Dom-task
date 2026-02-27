// function abc(fn){
//   setTimeout(fn,3000)
// }

// abc(function(){
//     console.log("we are working")
// })

// function abc(fn,time){
//   setInterval(fn,time)
// }

// abc(function(){
//   console.log("bar bar dil ye gaye")
// },5000)

// function counter(){
//     let count = 0
//     return function(){
//       count++;
//       console.log(count);
//     }
// }

// let countter=counter()
// countter()
// countter()
// countter()
// countter()

// -----------------------------
let arr = [1,2,3,4,5]

function maut(fn,arr){
    let newArr = []
    for(let i = 0; i<arr.length; i++){
        newArr.push(fn(arr[i]))
    }
    return newArr
}

maut(function(val){
    return val + 2;
},arr)

console.log(maut());
