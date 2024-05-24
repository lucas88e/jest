let id = 0
const products = []

function resetProducts() {
    const products = []
    return products
};
function addProduct(name, price) {
    if (!name || price === undefined) {
        throw new Error("The name or the price are undefined please enter a prodcut")
    }

    const nameExist = products.some(element => element.name === name)
    if (nameExist) {
        throw new Error("The name has already exist")
    }
    id++;
    products.push(id, name, price)
    return products

};
function removeProduct(id) {
    if (!id) {
        throw new Error("The product dont be exist")
    }
    const product = products.findIndex(product => product.id === id);
    if (!product) {
        throw new Error("The product dont be exist")
    }
    products.splice(product, 1)
    return products

};
function getProducts() {

    return products
};
function getProduct(id) {
    if (id === undefined) {
        throw new Error("The product ID is not defined");
    }
    const product = products.find(product => product.id === id);
    if (!product) {
        throw new Error("The product does not exist");
    }

    return product;
}

function updateProduct(id, name, price) {
    const product = products.findIndex(product => product.id === id);
    if (!product) {
        throw new Error(`No product found with ID ${id}`);
    }


    const nameExist = products.some(product => product.name === name && product.id !== id)
    if (nameExist) {
        throw new Error("The name has already exist")

    }
    product.name = name;
    product.price = price;
};


addProduct("Producto 1", 5);
addProduct("Producto 2", 200);
addProduct("Producto 3", 300);
// getProduct(1)
removeProduct(2)
// resetProducts()
// updateProduct(1, "producto", 100)
console.log(products.id)
// console.log(getProduct(0))
module.exports = { resetProducts, products, id, addProduct, removeProduct, getProduct, getProducts, updateProduct }