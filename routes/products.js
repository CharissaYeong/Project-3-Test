// Create router object
const express = require('express');
const router = express.Router();

// Router object routes
router.get('/', async(req,res) => {
    res.send("All products");
})

router.get('/create', async(req,res) => {
    res.send("Create a product");
})

// Export Router object
module.exports = router;