class ShoppingCart {
  constructor(items) {
    this.items = [];
  }

  getItems() {
    return this.items;
  }

  addItem(itemName, quantity, price) {
    const item = {
      name: itemName,
      quantity: quantity,
      pricePerUnit: price
    };
    this.items.push(item);
  }

  clear() {
    this.items = [];
  }
}

module.exports = ShoppingCart;
