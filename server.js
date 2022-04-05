const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const shortid = require('shortid');
const cors = require('cors');

const app = express();
app.use(cors())
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/react-shopping-cart-db", {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const Product = mongoose.model(
    "products",
    new mongoose.Schema({
        _id : { type : String, default : shortid.generate },
        image : String,
        title : String,
        description : String,
        availableSizes : [String],
        price : Number
    })
);

app.get("/api/products", async (req, res) => {
    const products = await Product.find({});
    res.send(products);
});

app.post("/api/products", async (req, res) => {
    const newProduct = new Product(req.body);
    const savedProduct = await newProduct.save();
    res.send(savedProduct);
});

app.delete("/api/products/:id", async (req, res) => {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    res.send(deletedProduct);
});

///////
const Order = mongoose.model("order", new mongoose.Schema({
    _id: {
        type: String,
        default: shortid.generate
    },
    name: String,
    email: String,
    address: String,
    total: Number,
    cartItems: [{
        _id: String,
        title: String,
        price: Number,
        count: Number
    }],
},
    {
        timestamps: true,
    }
));

app.post(
    '/api/orders',
    async (req, res) => {
        if (
            !req.body.name || 
            !req.body.email || 
            !req.body.address ||
            !req.body.cartItems ||
            !req.body.total
        ) {
            return res.send({ message: 'Data is required.' });
        }
        const order = await Order(req.body).save();
        res.send(order);
        ///////////
        // const order = new Order(req.body);
        // const savedOrder = await order.save();
        // res.send(savedOrder);
        /////////////////////
    }
);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log('CORS enabled server listening on http://localhost:5000'));