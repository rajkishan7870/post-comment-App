const express = require("express");
const app = express();
require("../db/conn");
const FeedsClient = require("../models/feeds")

const port = process.env.PORT || 5000;
app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.post("/feedsClient", async(req, res) => {
    try {
        console.log(req.body);

        const user = new FeedsClient({
            name: req.body.name,
        });

        const feedsClientData = await user.save();
        res.status(201).send(feedsClientData);
        
    } catch (err) {
        res.send(err);
    }
});

app.get("/feedsClient", async(req, res) => {
    try {
        const FeedsClientData = await FeedsClient.find();
        res.send(FeedsClientData);
    } catch (err) {
        res.send(err);
    }
})

app.listen(port, () => {
    console.log(`App is running at port ${port}`);
})
