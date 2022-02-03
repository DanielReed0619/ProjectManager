const mongoose = require('mongoose');

const ProductsSchema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [4, "title must be at least 4 characters long"]
    },
    price: {
        type: Number,
        min: [5, "price must be at least 5 dollars"]
    },
    description: {
        type: String,
        minlength: [10, "description must be at least 10 characters long"]
    }
    
});

const Products = mongoose.model('Products', ProductsSchema);

module.exports = Products;
