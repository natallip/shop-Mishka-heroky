const router = require('express').Router();
const Reviews = require('../models/reviews.js');

const queryFunc = (reviews) => {
  return {
    id: reviews._id,
    user: reviews.user,
    email: reviews.email,
    text: reviews.text
  };
};

router.get('/', (req, res, next) => {
  Reviews.find()
    .then(items => {
      const reviewsArray = [];
      items.forEach(item => {
        const query = queryFunc(item);
        reviewsArray.push(query);
      });
      res.json(reviewsArray);
    })
    .catch(err => next(err));
});

module.exports = router;
