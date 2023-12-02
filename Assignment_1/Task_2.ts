//? Add Two number: 
function add(x:number,y:number):number
{
    return x+y;
}
let x:number = 5;
let y:number = 6;
console.log(`The 5 + 6 is:${add(x,y)}`);
//? Check If the number is even or odd: 
function even_or_odd(a:number): string{
    return a%2==0 ? 'Even':'Odd';
}
    console.log(even_or_odd(3));
    
//? Calculate the area: 
function calculate_area(width:number,height:number){
    return width*height;
}
let width:number=2.5;
let height:number=4.73;
console.log(`The width is ${width} and the height is ${height} and the value of are is ${width*height}`);
//? Reverse the string: 
function reverse_string(str:string): string{
    return str.split(' ').reverse().join(' ');
}
let str:string="Hello World";
console.log(`Before reverse: ${str}\n After reverse: ${reverse_string(str)}`);

//? Convert the celsius into the Fahrenheit: 
function convert_Celsius_To_Fahrenheit(temp:number):number{
    return (temp * (9/5)) + 32;
}
let cel:number=35;
console.log(`The value in Celsius is: ${cel} and in Fahrenheit is: ${convert_Celsius_To_Fahrenheit(cel)}`)
