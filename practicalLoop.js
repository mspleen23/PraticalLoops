// //  Part 1: Fizz Bizz
// for (let i =1; i <=100; i++){
//         if (i %3 == 0){
//           console.log("Fizz");
//         } else if (i %5 ==0) {
//             console.log ("Buzz");
//         } else if (i% 3==0 && i%5==0){
//             console.log ("Fizz Buzz");
//         }else {
//             console.log (i);
//         }
//         }

 // Part 2: Prime Time
//  I really really tried to figure this part out and I honestly had so much trouble.  
 
//  Part 3: Feeling Loopy 

const csvData ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"


let cell= "";
let row;

{
    for (const c of csvData) {
        if (c == ",") {
    
            cell +=",";
            row=cell;
            continue;
        }
            cell +=c;
        }
            console.log(row)
            
}

//Nel and I worked together to figure this part out, but im not sure if its correct or if there is a shorter way to do this part. 


