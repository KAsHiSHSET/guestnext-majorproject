 const newListing = new Listing(req.body.listing);//creating new instance of the data
    await newListing.save();
    res.redirect("/listings");