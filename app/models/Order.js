const mongoose = require('mongoose');
const validator = require('validator');

const caffeSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    products: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    caffeId:
    {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Caffe'
    },
    date:{
        type:Date,
        required:true
    }
});

module.exports = mongoose.model('Order', caffeSchema);