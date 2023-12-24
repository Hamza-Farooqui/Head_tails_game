let player1 = prompt('Enter Heads Name')
let player2 = prompt('Enter Tails Name')

let toss = Math.random(  ) * 2
let Change = Math.floor( toss ) 

if(Change == 0){
    document.write( player1 + ' heads win ')
}
else{
    document.write( player2 + ' tails win ')
}