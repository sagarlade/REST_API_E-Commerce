class CartService {
    constructor() {
        this.cart = [];
    }

    addItem(item) {
        this.cart.push(item);
    }

    removeItem(itemId) {
        this.cart = this.cart.filter(item => item.id !== itemId);
    }

    getItems() {
        return this.cart;
    }

    clearCart() {
        this.cart = [];
    }

    getTotal() {
        return this.cart.reduce((total, item) => total + item.price, 0);
    }
}

module.exports = new CartService();