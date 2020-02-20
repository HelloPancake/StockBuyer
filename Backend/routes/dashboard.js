const express = require('express')
const dashBoardRouter = express.Router();

dashBoardRouter.get('/', async (req, res) => {
    res.json({message: "get"})
});

dashBoardRouter.get('/transactions', async (req, res) => {
    res.json({ message: "transactions" })
});

dashBoardRouter.get('/portfolio', async (req, res) => {
    res.json({ message: "portfolio" })
});

dashBoardRouter.post('/transactions', async (req, res) => {
    res.json({ message: "transactions" })
});

module.exports = dashBoardRouter;