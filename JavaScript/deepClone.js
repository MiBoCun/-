let obj1={
    age:17,
    sex:"woman",
    address:{
        city:'shenzhen'
    },
    arr:[1997,"百度",2000,"alibaba"]
}
let obj2=obj1;
console.log("obj2:",obj2)
obj2.age=34;
// console.log("改变obj2的age值之后","obj1:",obj1);
// console.log("改变obj2的age值之后","obj2:",obj2);

 /*function deepClone(cloneobj) {
     if(typeof cloneobj!=="object"||cloneobj==null){
         return cloneobj
     }
     //初始返回结果
     let  result
     if(cloneobj instanceof Array){
         result=[]
     }else{
         result={}
     }
     for(let key in cloneobj){
         //保证key不是原型的属性
        if(cloneobj.hasOwnProperty(key)){
            //递归调用
          result[key]=deepClone(cloneobj[key])
        }

     }
     return result

 }*/
/*
let obj2=deepClone(obj1);
console.log('obj1:',obj1)
console.log('obj2:',obj2)
obj2.address.province="陕西";
obj2.address.city="西安";
console.log('改变obj2的city之后','obj1:',obj1)
console.log('改变obj2的city之后','obj2:',obj2)*/

function deepClone (ary){
    if (typeof ary !== 'object'|| ary == null){
        return ary 
    }
    let res
    if (res instanceof Array){
        res = []
    }else{
        res = {}
    }
    for (let key in ary){
        if (ary.hasOwnProperty(key)) {
           res[key]=deepClone(ary[key])
        }
    }
    return res
}






