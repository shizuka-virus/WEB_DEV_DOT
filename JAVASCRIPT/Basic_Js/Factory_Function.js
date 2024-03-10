function Rectangle(h,b){
    return rect={
         hei:h,
         br:b,
         add:function(){
            let ha=2;
            let ba=7;
            console.log(ha*ba);
         }
    }
}
let result=Rectangle(4,7);
result.add();