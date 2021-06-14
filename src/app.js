const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes/api.route');
const pageRouter = require('./routes/page.route');

const app = express();

// Middleware
app.use(morgan('combined'));

// Routes
app.use(apiRouter);
app.use(pageRouter);

// Manage errors
app.use((req, res, next) => res.status(404).json('Not found'));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json('Internal error!');
});

// Starting server
app.listen(process.env.PORT, () => console.log(`Starting ${process.env.NODE_ENV} server on port ${process.env.PORT}`));
