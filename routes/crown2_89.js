var express = require('express');
var router = express.Router();
const crown2Controller = require('../controllers/crownController_89');

//Create
router.post('/create', crown2Controller.createProduct);

//Read
router.get('/', crown2Controller.getHomepage);
router.get('/shop', crown2Controller.getShopOverview);
router.get('/shop_89/:product', crown2Controller.getProductsByCategory);

// router.get('/shop_89/:product', (req, res) => {
//   res.render('products2_89', { title: req.params.product });
// });

module.exports = router;
