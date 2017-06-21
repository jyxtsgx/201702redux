let double = n => n*2;
let triple = n => n*3;

//组合
let compose = (...fns)=>{
   return function(n){
       return fns.reduceRight((val,fn)=>{
           return fn(val)
       },n);
   }
}
let r = compose(triple,double)(3);
console.log(r);