let arr=[1,2,4,5,6];
arr.push(7);
arr.unshift(0);
arr.splice(3,0,3);
for(i in arr){
    console.log(arr[i]);
}