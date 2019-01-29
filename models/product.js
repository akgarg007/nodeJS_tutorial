const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});

// export mongoose model
module.exports = mongoose.model('Product', productSchema);

// const getDb = require('../util/database').getDb;
// class Product {
//     constructor(title, price, description, imageUrl) {
//         this.title = title;
//         this.price = price;
//         this.description = description;
//         this.imageUrl = imageUrl;
//     }

//     save() {
//         const db = getDb();
//         db.collection('products')
//             .insertOne(this)
//             .then(result => {
//                 console.log(result);
//             })
//             .catch(err => console.log(err));
//     }
// }

// // here export your model
// module.exports = Product;