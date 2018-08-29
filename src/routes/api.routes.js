const path = require('path');
const router = require('express').Router();

router.use('/getGoods', require('../api/getGoods.js'));
router.use('/getReviews', require('../api/getReviews.js'));
router.use('/save-review', require('../api/saveReview.js'));
router.use('/send-email', require('../api/sendEmail.js'));
router.use('/send-order', require('../api/sendOrder.js'));

router.use('/', (req, res, next) => {
  const url = path.join('api', req.url);
  const message = `${req.method} ${url} route is not served.`;
  next({ status: 404, message: message });
});

module.exports = router;
