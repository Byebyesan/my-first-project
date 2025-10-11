alert('Hello, can you guess what number I’m thinking of?')

let numberSecret = Math.round(Math.random() * 30);

for(let i = 1; i <= 5; i++){
    let kick = prompt('Enter the number [0, 30] ')
    if(kick == numberSecret){
        alert('Nice job!');
        break;
    }else if(kick < numberSecret){
        alert('The secret number is greater than' + kick);
        alert((5-i) + 'attempts remaining');
    }else{
        alert('The secret number is less than' + kick);
        alert((5-i) + 'attempts remaining');
    }
    if(i == 5){
        alert('Try again! The secret number is ' + numberSecret);
    }
}