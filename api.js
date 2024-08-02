// const express = require('express');
// const app = express();
// const ExpressError=require("./ExpressError");
// //middleware
// /*app.use("/api",(req,res,next)=>{
//   let {token}=req.query;
//   if(token==="giveaccess"){
//     next();//access givn
//   }
//   else{
//     res.status(401).send("unauthorized")
//   }
// })*/
// const checktoken = (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next(); // Access given
//     } else {
//         // res.status(401).send("Unauthorized");
//         //i want it to throw error , this will be handled by deaflut error handler.
//         // throw new Error("Unauthorized");
//         //this generates and calls the custom error (statuscode,messageoferror)
//         throw new ExpressError(401,"ACESS DENIED");
//     }
// };

//   //multiple moddlewares
//   app.get("/api",checktoken,(req,res)=>{
//     res.send("data");
//   });

// app.use("/",(req,res,next)=>{
//     console.log("this is for all");
//     next();
//  });
// app.get("/api",(req,res)=>{
//     res.send("data")
// })
// app.get("/err",(req,res)=>{
//    abcd=abcd;
// })
// //writing our own errors
// // and then calling the defalut error handler of express
// app.use((err,req,res,next)=>{
//  console.log("------ERROR1------")
// console.log(err);
//  next(err);
//  });
// //  app.use((err,req,res,next)=>{
// //     console.log("------ERROR2------")
// //     next(err);
// //     });
// app.get("/random",(req,res)=>{
//     res.send("this is random page");
// });
// app.listen(8080,(req,res)=>{
//   console.log("server started");
// })

const express = require('express');
const ExpressError = require('./ExpressError');
const app = express();
app.use((req,res,next)=>{
  req.time=new Date(Date.now()).toString();
  console.log(req.method,req.hostname,req.path,req.time);
  next();
})
// Middleware to check token
const checktoken = (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next(); // Access given
    } else {
        // Throwing a custom error
        throw new ExpressError(401,"ACESS DENIED");
    }
};

// Route with multiple middlewares
app.get("/api", checktoken, (req, res) => {
    res.send("data");
});

// Middleware to log all requests
app.use("/", (req, res, next) => {
    console.log("This is for all routes");
    next();
});

// Simple route
app.get("/api", (req, res) => {
    res.send("data");
});

// Route that causes an error
app.get("/err", (req, res) => {
    abcd = abcd; // This will cause a ReferenceError
});

// Custom error handling middleware
app.use((err, req, res, next) => {
    console.log("------ERROR1------");
    console.log(err);
    next(err); // Pass the error to the next middleware
});

// Final error handling middleware
app.use((err, req, res, next) => {
    console.log("------ERROR2------");
    //deconstructing and setting the defaut value
    const { statusCode=500, message = "Something went wrong!" } = err;
    res.status(statusCode).send(message);
});

// Another simple route
app.get("/random", (req, res) => {
    res.send("this is random page");
});
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"access to admin is forbidden");
})
app.use((req,res)=>{
    res.status(404).send("Page not found");
})
// Starting the server
app.listen(8080, () => {
    console.log("Server started on port 8080");
});
