const express = require('express');
const service = require('../services/marketstack.service');

const router = express.Router();

router.get('/', (req, res, next) => {
    if(req.query.symbol) {
        return service.getEndOfDayData(req.query.symbol, 0, 30)
        .then(config => res.render('../src/views/home.html.twig', {config}))
        .catch(error => res.render('../src/views/home.html.twig', {error}));
    }

    return res.render('../src/views/home.html.twig')
});

module.exports = router;