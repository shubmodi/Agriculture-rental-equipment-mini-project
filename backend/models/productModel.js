const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    brand: { type: String },
    model: { type: String },
    price: { type: Number, required: true },
    image: String,
    rating: Number,
    about : {type: String},//chota wala 
    description: String,//bada wala
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('product', mySchema); //Product is a collection name