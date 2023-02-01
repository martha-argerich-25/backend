// PRIMER DESAFIO//

class ProductManager {

products = [];
constructor  (){}

getproduct() {
return this.products
}
// metodo agregar producto//
addProduct (title,description,price,thumbnail,code,stock){
    const newProducto ={
        id:this.products.length,
        title : title,
        description: description,
        price : price,
        thumbnail :  thumbnail,
        code: code,
        stock :stock
    };

    // validacion para que los campos sean obligatorios
    if (title !=" ",description != " ",price != " ",thumbnail != " ",stock != " " ,code !== " "){
       throw new Error(`algunos campos no estan completos completelos`)
    }
   // validacion para que no se repita el campo code
   if (code.includes(code)){
       throw new   Error(`ese id ya existe`)
   }


// creo un nuevo array para agregar el nuevo producto y se le asigna a producto
    this.products =[...this.products,newProducto];
    
}

getproductById (){
    const search  = this.products.find((pr)=>pr.id===id)
    if (!search){
        throw new Error (`not fount`)
    }

}




}

const order = new ProductManager();


order.addProduct ("hola","bonico",300,345,3,5)

console.log(order.getproduct())
console.log (order.getproduct())

