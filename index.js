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
        code:code,
        stock :stock
    };

    // validacion para que los campos sean obligatorios de tipo texto
    if (title.length === 0 ,description.length === 0){
       throw new Error(`algunos campos no estan completos completelos`)
    }
    // valida que todos los campos sean obligatorios de tipo numero
    if(price === isNaN || price == undefined, thumbnail=== isNaN || thumbnail== undefined, code ===isNaN || code == undefined, stock===isNaN || stock == undefined ){
        throw new Error(`algunos campos no estan completos completelos`)
    }
  
   
// creo un nuevo array para agregar el nuevo producto y se le asigna a producto
    this.products =[...this.products,newProducto];
    
}


// funcion para buscar en la lista de productos un ID que exista , sino existe sale error


getproductById (id){
    const search  = this.products.find((pr)=>pr.id===id)
    if (!search){
        throw new Error (`not found`)
    }

}

// metodo para validacion de code , busca si ya existe un code con ese valor
searchcode (code){
    const searchcode  = this.products.find((pr)=>pr.code===code)
    if (searchcode){
        throw new Error (`ya existe ese code`)
    }

}


}

const order = new ProductManager();

//ordenes de productos//
order.addProduct ("tomate","grande",5,65,45,45)
order.addProduct ("pomelo","maduro",300,3,56,234)
order.getproductById(1)
order.searchcode(59)


// para ver la  la lista de pedidos//
console.log(order) 


