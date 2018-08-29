const router = require('express').Router();
const Goods = require('../models/goods.js');

const queryFunc = (goods) => {
  return {
    id: goods._id,
    name: goods.name,
    descr: goods.descr,
    data: goods.data,
    price: goods.price,
    image: goods.image
  };
};

router.get('/', (req, res, next) => {
  Goods.find()
    .then(items => {
      const goodsArray = [];
      items.forEach(item => {
        const query = queryFunc(item);
        goodsArray.push(query);
      });
      res.json(goodsArray);
    })
    .catch(err => next(err));
});

module.exports = router;
