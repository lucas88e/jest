const { resetProducts,  addProduct, removeProduct, getProducts, getProduct, updateProduct} = require('./product.js');
// const {addProduct,products} = require("./product.js")
beforeEach(() => {
  resetProducts();

});
describe("addProduct",()=>{
    test("should return a product",()=>{
      expect(()=>addProduct("producto1",5)).not.toThrow()
      expect(()=>addProduct(Null,undefined)).toThrow()

      addProduct("producto2",5)
      expect(getProducts()).toEqual([{ id: 1, name: "producto1", price: 5 },
      { id: 2, name: "producto2", price: 5 }
      ]);

    });
 
    })
describe ("getProducts",()=>{
  test("should return a product by its id", () => {
    addProduct("producto1", 5);
    addProduct("producto2", 10);


    const product = getProduct(1);


    expect(product).toEqual({ id: 1, name: "producto1", price: 5 });
  });

  test("should throw an error if the product does not exist", () => {
    addProduct("producto1", 5);

    expect(() => getProduct(999)).toThrow("The product does not exist");
  });
});


describe("removeProduct", () => {
 
  test("should remove a product", () => {

    addProduct("producto1", 5);
    addProduct("producto2", 10);

    removeProduct(1);
    const updatedProducts = getProducts();

        expect(updatedProducts).toEqual([{ id: 2, name: "producto2", price: 10 }]);
  });

  test("should throw an error if the product does not exist", () => {
    
    addProduct("producto1", 5);

   
    expect(() => removeProduct(999)).toThrow("The product does not exist");
  });
});
