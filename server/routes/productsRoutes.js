
const productsController = require("../controllers/productsController")


module.exports = (app) =>{

    app.get("/api/products", productsController.findAllProducts)

    app.post("/api/newProduct", productsController.createNewProduct)

    app.get("/api/singleProduct/:id", productsController.findOneProduct)


    app.put("/api/updateProduct/:id", productsController.updateProduct)

    app.delete("/api/product/:id", productsController.deleteProduct)

}




