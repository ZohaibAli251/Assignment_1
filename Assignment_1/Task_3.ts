let arr:number[]=[1,5,2,7,8,10,11,12,13,14,15];
console.log(arr);
arr.push(10); //? Push element at last
console.log(`AFter Push: ${arr}`);
arr.pop();  //? Pop element from last
console.log(`After pop: ${arr}`);
arr.shift(); //? Remove element from front
console.log(`After shift: ${arr}`);
arr.unshift(2); //? Add element in the front
console.log(`After unshift: ${arr}`);
arr.splice(1,2); //? Start from 1 index of arr and remove the 2 element
console.log(`AFter splice: ${arr}`);
let sub_arr=arr.slice(2,5); //? Start from 2 index of arr and end at index 4 (not inclusive)
console.log(`Subarray Created : ${sub_arr}`);
console.log(`After slice: ${arr}`);
