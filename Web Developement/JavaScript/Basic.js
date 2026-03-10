// x=prompt("Enter X: ");
// y=prompt("Enter Y: ");
// z=prompt("Enter Z: ");

// if(x>y && x>z){
//     console.log("X is Greatest");
// }
// else if(y>z){
//     console.log("Y is Greatest");
// }
// else if(z>x && z>y){
//     console.log("Z is Greatest");
// }
// else{
//     console.log("All are Equal");
// }

// for(let i=1;i<=15;i=i+2){
//     console.log(i);
// }


// let todo = [];



// while(true){
//     let req=prompt("Enter Your Request: ");
//     if(req=="quit"){
//         console.log("Quitting app");
//         break;
//     }

//     if(req=="list"){
//         console.log("-----------------------");
//         for(l of todo){
//             console.log(l);
//         }
//     }
//     else if(req=="add"){
//         let task=prompt("Enter Your Task: ");
//         todo.push(task);
        
//     }
//     else if(req=="delete"){
//         console.log(todo);
//         let del=prompt("Enter task index to remove: ");
//         todo.splice(del,1);
//     }

//     else{
//         console.log("Please Enter valid Request!!!");
//     }
// }
// const maxnum=prompt("Enter a max Number: ");
// const random=Math.floor(Math.random() * maxnum)+1;
// // console.log("Guessing No: ",guess);
// let guess=prompt("Enter your num: ");

// while(true){
//     if(maxnum=="quit"){
//         console.log("You are Quit");
//         break;
//     }

//     if(random==guess){
//         console.log("Your guessing number is Correct random number was ",random);
//         break;
//     }

//     else if(guess<random){
//         console.log("Your guessing number is too small")
//         guess=prompt("You're guessing Wrong Number.Please Guess Again... ");
//     }

//     else if(guess>random){
//         console.log("Your guessing number is too big")
//         guess=prompt("You're guessing Wrong Number.Please Guess Again... ");
//     }

// }
// const sq=(n)=>{
//     return n*n;
// }

// let printHello=setInterval(()=>{
//     console.log("Hello World!!")
// },2000);

// setTimeout(()=>{
//     clearInterval(printHello);
//     console.log("CLear Interval Ran...")
// },10000);

let nums=[4,2,8,4,8,10];

// let final=nums.reduce((res,el)=>(res+el));
// console.log(final)
// let max=nums.reduce((res,el)=>{
//     if (el>res){
//         return el;
//     }
//     else{
//         return res;
//     }
// })

// let check=nums.every((el)=>(el%2==0));
let min=nums.reduce((min,el)=>{
    if (min>=el){
        return el;
    }
    else{
        return min;
    }
})