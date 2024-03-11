let arr=[
    {no:1,namef:'farooq'},
    {no:2,namef:'virus'}
]
let as=arr.find(function(bs){
    return bs.namef==='virus';
});
console.log(as);