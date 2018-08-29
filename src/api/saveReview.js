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

router.post('/', (req, res, next) => {
  new Reviews(req.body)
    .save()
    .then(result => {
      return Reviews.find()
        .then(reviews => reviews)
        .catch(err => next(err));
    })
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

