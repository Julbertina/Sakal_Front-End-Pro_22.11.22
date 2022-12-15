const array = [];
const size = prompt("Number of elemets in arrey will be:",0);
 
for(i=0; i < size; i++) 
{
    array[i] = prompt('Enter array element №' + (i+1));
}
const arraySorted = array.sort((a,b) => a-b)
console.log(array);
console.log(arraySorted.splice(1,3));
console.log(arraySorted);