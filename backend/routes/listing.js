// const router = require("express").Router();
// const verify = require("../routes/verifyToken");
// const Listing = require("../model/Listing");
// //Add New listings
// router.post("/", verify, async (req, res)=>{
// // res.send("Add New Listing");
// const listing = new Listing({
//    title: req.body.title,
//    price: req.body.price,
//    locality: req.body.locality,
//    details: req.body.details
//  });
//  try{
//   const savedListing = await listing.save();
//   res.send(savedListing);
//  }catch (error){
//   res.status(400).send(error);
//  }
// });

// //Get All listings
// router.get("/", async (req, res)=>{
// try{
//   const listings = await Listing.find()
//   res.json(listings);
// }catch(error){
//   res.json({ message: error });
// }
// });

// //Single listings
// router.get("/:listingId",async (req,res)=>{
// try{
//    const listing = await Listing.findById(req.params.listingId);
//    res.json(listing);
// }  catch(error){
//     res.json({ message: error });
// }
// });

// //Update Listings
// router.put("/:listingId",verify,async(req,res)=>{
//     try{
//         const listing = {
//             title:req.body.title,
//             price:req.body.price,
//             locality:req.body.locality,
//             details:req.body.details
//         };
//         const updatedListing = await Listing.findByIdAndUpdate({_id: req.params.listingId},listing);
//         res.json(updatedListing);
//       } catch(error){
//         res.json({ message: error })  
//       }

// }); 

// //Delete Listings
// router.delete("/:listingId",verify, async (req, res) => {
//   try {
//      const removeListing = await Listing.findByIdAndDelete(req.params.listingId);
//      res.json(removeListings);
//   }  catch(error){
//      res.json({ message: error });
//   }
// });

// module.exports = router;

const router = require("express").Router();
const verify = require("../routes/verifyToken");
const Listing = require("../model/Listing");

// Add New listing

router.post("/", verify, async(req, res) => {
    const listing = new Listing({
        title: req.body.title,
        price: req.body.price,
        locality: req.body.locality,
        details: req.body.details
    });

    try {
        const savedListing = await listing.save();
        res.send(savedListing);
    } catch (error) {
        res.status(400).send(error);
    }
});

// Get All listings

router.get("/", async(req, res) => {
    try {
        const listings = await Listing.find();
        res.json(listings);
    } catch (error) {
        res.json({ message: error });
    }
});

// Single listing
router.get("/:listingId", async(req, res) => {
    try {
        const listing = await Listing.findById(req.params.listingId);
        res.json(listing);
    } catch (error) {
        res.json({ message: error });
    }
});

// Update listing
router.put("/:listingId", verify, async(req, res) => {
    try {
        const listing = {
            title: req.body.title,
            price: req.body.price,
            locality: req.body.locality,
            details: req.body.details
        };
        const updatedListing = await Listing.findByIdAndUpdate({ _id: req.params.listingId }, listing);
        res.json(updatedListing);
    } catch (error) {
        res.json({ message: error });
    }
});

// Delete listing
router.delete("/:listingId", verify, async(req, res) => {
    try {
        const removeListing = await Listing.findByIdAndDelete(req.params.listingId);
        res.json(removeListing);
    } catch (error) {
        res.json({ message: error });
    }
});

module.exports = router;