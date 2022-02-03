

const Products = require("../models/productsModel");



module.exports.findAllProducts = (req, res) => {
    Products.find()
        .then(allDaProducts => res.json({ results: allDaProducts }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.createNewProduct = (req, res) => {

    Products.create(req.body)
        .then(newProduct =>{
            res.json({results: newProduct})
        })
        .catch(err => res.json({ message: 'Something went wrong', error: err }))

    // User.create(req.body)
    //     .then(newlyCreatedUser => res.json({ user: newlyCreatedUser }))
    //     .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.findOneProduct = (req, res) => {
    Products.findOne({ _id: req.params.id })
    .then(singleProduct => {
        res.json({results: singleProduct})
    })
    .catch(err => res.json({ message: 'Something went wrong', error: err }))
}

module.exports.updateProduct = (req, res) => {
    Products.findOneAndUpdate({ _id: req.params.id },req.body,
        { new: true, runValidators: true }
    )
        .then(updatedProduct => res.json({ results: updatedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}


module.exports.deleteProduct = (req, res) => {
    Products.deleteOne({ _id: req.params.id })
        .then(deletedProduct => res.json({ results: deletedProduct }))
        .catch(err => res.json({ message: 'Something went wrong', error: err }));
}