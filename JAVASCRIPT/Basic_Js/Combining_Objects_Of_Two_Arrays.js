let arr=[
    { no:1 , na:'Ali'},
    { no:2 , na:'Aslam'}
]
let brr=[
    { no:3 , na:'Akbar'},
    { no:4 , na:'Atif'}
]
Array.prototype.push.apply(arr,brr);
for(i in arr){
    console.log(arr[i]);
}
console.log();
Array.prototype.push.apply(brr,arr);
for(i in brr){
    console.log(brr[i]);
}