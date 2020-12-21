const db = require('../utils/database');

const Clothing = class Clothing {
  constructor(id, name, cat_id, price, remote_url, local_url) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.cat_id = cat_id;
    this.remote_url = remote_url;
    this.local_url = local_url;
  }

  static fetchHomepage() {
    return db.execute('SELECT * FROM clothing where cat_id=0;');
  }
  static fetchProductsByCategory(cid) {
    return db.execute('SELECT * FROM clothing where cat_id= ?', [cid]);
  }
};

// test
const testfetchHomepage = async (req, res) => {
  try {
    await Clothing.fetchHomepage().then(([rows]) => {
      console.log('fetchHomepage', JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};

const testfetchProductsByCategory = async (req, res) => {
  try {
    await Clothing.fetchProductsByCategory(5).then(([rows]) => {
      console.log('fetchProductsByCategory', JSON.stringify(rows));
    });
  } catch (err) {
    console.log(err);
  }
};
//testfetchHomepage();

//testfetchProductsByCategory();

module.exports = Clothing;
