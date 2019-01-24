// no need of fs to create path to file, when using mysql database

const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    // ? mark used to overcome sql injection queries in the input fields
    return db.execute('INSERT INTO products(title, price, imageUrl, description) VALUES (?, ?, ?, ?)',
    [this.title, this.price, this.imageUrl, this.description]);
  }


  static deleteById(id) {

  }
  static fetchAll() {
    // now we use promise here to fetch all the products from the database products table
    return db.execute('SELECT * FROM products');
  }

  static findById(id) {
    return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
  }
};
