const express = require("express");
// const passport = require("passport");
const axios = require("axios"); // Import Axios for making API requests

const router = express.Router();

// ... (previous code)

// Route to search for a plant
router.get("/search-plant", async (req, res) => {
  try {
    const plantName = req.query.name; // Assuming the plant name is passed as a query parameter

    // Make a request to the Trefle.io API to search for the plant
    const response = await axios.get(`https://trefle.io/api/v1/plants/search?token=RwDvoRFeKEv5omklz4Yz-pY_lgoCfT5KOJ2Zkh5f9-0&q=${plantName}`);

    const plantData = response.data; // Assuming the API response contains plant information

    res.render("plant/search-result", { plantData });
  } catch (err) {
    console.error(err);
    res.status(500).render("error", { message: "Plant search failed" });
  }
});

module.exports = router;
