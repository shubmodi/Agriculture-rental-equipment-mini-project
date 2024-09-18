const { model, Schema } = require('../connection');

const mySchema = new Schema({
    name : String,
    // brand: { type: String },
    // model: { type: String },
    price: { type: Number, required: true },
    image: String,
    rating: Number,
    about : {type: String},
    // description: String,
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = model('product', mySchema); //Product is a collection name