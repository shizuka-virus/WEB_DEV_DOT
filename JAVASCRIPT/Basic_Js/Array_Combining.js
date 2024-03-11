let arr=[1,2,3,4];
let brr=['a','b','c','d'];
let crr=arr.concat(brr);
for(i in crr){
    console.log(crr[i]);
}
console.log();
crr=brr.concat(arr);
for(i in crr){
    console.log(crr[i]);
}
