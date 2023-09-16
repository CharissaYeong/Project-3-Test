// Create router object
const express = require('express');
const router = express.Router();

// Router object routes
router.get("", (req,res) => {
    res.render("landing/welcome");
})

router.get('/about-us', (req,res) => {
    res.send("About us");
})

router.get('/contact-us', (req,res) => {
    res.send("Contact us");
})

// Export Router object
module.exports = router;