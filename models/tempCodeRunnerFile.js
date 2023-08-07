const arr = [1,1,2,3,4, 4,5,6,6,7,7,8,9]
function withoutRepeat (array) {
  let sum = []
for(let i = 0; i < array.length; i++) {
 const index = array[i];
 let count = 0;
 for(let j = 0; j < array.length; i++) {
  if(index === array[j]) {
    count+=1
  }
 }
 if(count > 1) return false
 sum.push(array[i])
}
return sum
}
console.log(withoutRepeat(arr));