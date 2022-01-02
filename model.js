const mongoose = require('mongoose');
const { stringify } = require('querystring');
const Model = mongoose.model('Search',{
    "Search Terms": {
        type : String,
        required : true
    },
    "Num Searches":{
        type : String,
        required : true
    }
});
module.exports = Model;