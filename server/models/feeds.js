const mongoose = require("mongoose");

const feedsSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        minlength : 3
    },

})


//create collection......

const FeedsClient = new mongoose.model("FeedsClient",feedsSchema);

module.exports = FeedsClient;