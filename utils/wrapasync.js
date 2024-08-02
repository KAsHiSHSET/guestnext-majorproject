// function wrapAsync(fn){
//    return function(req,res,next){
//     //for any error , next will be called.
//     fn(req,res,next).catch(next);
//    }
// }
module.exports = (fn)=>{
    return (req,res,next)=>{
     //for any error , next will be called.
     fn(req,res,next).catch(next);
    }
 }