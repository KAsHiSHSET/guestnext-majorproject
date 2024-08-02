/*const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Listing = require('./model/listings'); // Adjust the path to match the folder name

const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Middleware to parse JSON requests
app.use(express.json());

main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.error("Error connecting to DB:", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));

app.get("/", (req, res) => {
    res.send("Hello World!");
});

// app.get("/testlisting", async (req, res) => {
    
//         let sampleListing2 = new Listing({
//             title: "Sample Listing",
//             description: "This is a sample listing",
//             price: 100,
//             location: "New York",
//             images:"",
//             country: "USA"
//         });
//         await sampleListing2.save();
//         console.log("Sample listing saved");
//         res.send("Sample listing created");
    
//     }
    
// );
//to show all the listing
//when async is used then is not used
app.get("/listings",  async(req, res) => {
    const alllistings= await Listing.find({});
    res.render("/listings/index.ejs",{alllistings});
    // Listing.find({}).then((res)=>{
    //     console.log(res);
    // })
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
*/
/*const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Listing = require('./model/listings'); // Correct path to listings.js
const methodoverride=require("method-override");
const ejsmate=require("ejs-mate");
const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
app.engine("ejs",ejsmate);
// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({extended: true}));//to parse the data coming in body
app.use(methodoverride("_method"));

main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.error("Error connecting to DB:", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Basic route to check server status
app.get("/", (req, res) => {
    res.send("Hello World!");
});

// Route to show all listings
app.get("/listings", async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listings/index", { alllistings });
});
//create new route
app.get("/listing/new",(req,res)=>{
    res.render("listings/new.ejs");
})

//on clicking, requst goes for that particular id.
app.get("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/show.ejs",{listing});
})
app.post("/listings",async(req,res)=>{
    /*let listing =req.body.listing;
    console.log(listing);
    const newListing = new Listing(req.body.listing);//creating new instance of the data
    await newListing.save();
    res.redirect("/listings");
})
//edit the route 

app.get("/listings/:id/edit",async(req,res)=>{
    let {id}=req.params;
    const listing=await Listing.findById(id);
    res.render("listings/edit.ejs",{listing});
})
//update route

app.put("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    await Listing.findByIdAndUpdate(id,{...req.body.listing});
    res.redirect("/listings/"+id);
})
//delete

app.delete("/listings/:id",async(req,res)=>{
    let {id}=req.params;
    let delted= await Listing.findByIdAndDelete(id);
    console.log(delted);
    res.redirect("/listings");
})
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


*/
/*
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Listing = require('./model/listings'); // Correct path to listings.js
const methodoverride = require("method-override");
const ejsMate = require("ejs-mate");
const app = express();
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
const wrapAsync=require("./utils/wrapasync.js")
app.engine("ejs", ejsMate); // Use ejs-mate for all ejs files
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
// const passport=require("passport");
// const  Localstrategy=require("passport-local");
// const user=require("./model/user.js");
// const flash=require("connect-flash");
// const session=require("express-session");

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // to parse the data coming in body
app.use(methodoverride("_method"));
app.use(express.static(path.join(__dirname,"/public")));
const ExpressError=require("./utils/ExpressError.js")
// Connect to MongoDB
main().then(() => {
    console.log("Connected to DB");
}).catch(err => {
    console.error("Error connecting to DB:", err);
});

async function main() {
    await mongoose.connect(MONGO_URL);
}

// Basic route to check server status
app.get("/", (req, res) => {
    res.render("home");
});

// Route to show all listings
app.get("/listings", wrapAsync(async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listings/index", { alllistings });
}));
app.get("/privacy",  (req, res) => {
    res.render("privacy");
});
app.get("/terms",  (req, res) => {
    res.render("terms.ejs");
});


// Create new route
app.get("/listing/new", (req, res) => {
    res.render("listings/new");
});

// Show listing by ID
app.get("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", { listing });
}));

// Create new listing
app.post("/listings", wrapAsync(async (req, res,next) => {
    if(!req.body.listing){
        throw new ExpressError(400,"send vlid data for listing");
    }
  const newListing = new Listing(req.body.listing); // creating new instance of the data
    await newListing.save();
    res.redirect("/listings");
  
}));
//without wrapsync
// app.post("/listings",async (req, res,next) => {
//     try{const newListing = new Listing(req.body.listing); // creating new instance of the data
//      await newListing.save();
//      res.redirect("/listings");
//     }catch(err){
//      //for error, we will through custom error, MEANS tht no one should enter invalidd price
//      next(err);
//     }
//  });
// Edit listing route
app.get("/listings/:id/edit",wrapAsync( async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
}));


// Update listing route
app.put("/listings/:id", wrapAsync(async (req, res) => {
    if(!req.body.listing){
        throw new ExpressError(400,"send valid data for listing");
    }
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect("/listings/" + id);
}));

// Delete listing
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deleted = await Listing.findByIdAndDelete(id);
    console.log(deleted);
    res.redirect("/listings");
}));
// app.use(session(sessionOptions));
// app.use(flash());
// app.use(passport.initialize());
// app.use(passport.session());
// passport.use(new Localstrategy(User.authenticate())); 
// //when user logins in , he//she serialises and store their information

// passport.serializeUser(User.serializeUser());
// //
// passport.deserializeUser(User.deserializeUser());
// app.get("/demouser",async(req,res)=>{
//     let fakeuser= new User({
//         email:"stu@gmail.com",
//         username:"delta-student"
//     });
//    let registereduser=await User.regiser(fakeuser,"helli");
//    res.send(registereduser);
// })
//if the response doesnt match with 
//anything above
//thrown a custom express error
app.all("*",(req,res,next)=>{
    next(new ExpressError(404,"page Not found"));
})
//handles error
app.use((err,req,res,next)=>{
    //deconsturct the error
    let {statusCode=500,message="something went wrong"}=err;
    //send the sttus code before rendering

    res.status(statusCode).render("error.ejs",{err});
    // res.status(statusCode).send(message);
   
}
)
const port=process.env.PORT||8080;
app.listen(port, () => {
    console.log("Server is running on port 8080");
});
*/
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const Listing = require('./model/listings'); // Correct path to listings.js
const methodoverride = require('method-override');
const ejsMate = require('ejs-mate');
const app = express();
const wrapAsync = require('./utils/wrapasync.js');
const ExpressError = require('./utils/ExpressError.js');

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

// Set up EJS engine and views directory
app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodoverride('_method'));
app.use(express.static(path.join(__dirname, '/public')));

// Connect to MongoDB
async function main() {
    try {
        await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // Increase server selection timeout
            socketTimeoutMS: 45000, // Increase socket timeout
        });
        console.log("Connected to DB");
    } catch (err) {
        console.error("Error connecting to DB:", err);
    }
}
main();

// Basic route to check server status
app.get("/", (req, res) => {
    res.render("home");
});

// Route to show all listings
app.get("/listings", wrapAsync(async (req, res) => {
    const alllistings = await Listing.find({});
    res.render("listings/index", { alllistings });
}));

app.get("/privacy", (req, res) => {
    res.render("privacy");
});

app.get("/terms", (req, res) => {
    res.render("terms");
});

// Create new route
app.get("/listing/new", (req, res) => {
    res.render("listings/new");
});

// Show listing by ID
app.get("/listings/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show", { listing });
}));

// Create new listing
app.post("/listings", wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    }
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    res.redirect("/listings");
}));

// Edit listing route
app.get("/listings/:id/edit", wrapAsync(async (req, res) => {
    const { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit", { listing });
}));

// Update listing route
app.put("/listings/:id", wrapAsync(async (req, res) => {
    if (!req.body.listing) {
        throw new ExpressError(400, "Send valid data for listing");
    }
    const { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect("/listings/" + id);
}));

// Delete listing
app.delete("/listings/:id", wrapAsync(async (req, res) => {
    const { id } = req.params;
    await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
}));

// Handle 404 errors
app.all("*", (req, res, next) => {
    next(new ExpressError(404, "Page Not Found"));
});

// Error handling middleware
app.use((err, req, res, next) => {
    const { statusCode = 500, message = "Something went wrong" } = err;
    res.status(statusCode).render("error", { err });
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
