// SEGUNDO DESAFIO//


const fs = require("fs");
// creo la clase
class ProductManager {
   

products = [];

constructor  (){
  this.#path = "./Producto.json";
}



getproduct() {
return this.products
}
// METODO PARA AGREGAR UN PRODUCTO//
async addProduct (title,description,price,thumbnail,code,stock){
    const newProducto ={
        id:this.products.length,
        title : title,
        description: description,
        price : price,
        thumbnail :  thumbnail,
        code:code,
        stock :stock
    };

//-------------------VALIDACION----------------------------------------------
    // validacion para que los campos sean obligatorios de tipo texto
    if (title.length === 0 ,description.length === 0){
       throw new Error(`algunos campos no estan completos completelos`)
    }
    // valida que todos los campos sean obligatorios de tipo numero
    if(price === isNaN || price == undefined, thumbnail=== isNaN || thumbnail== undefined, code ===isNaN || code == undefined, stock===isNaN || stock == undefined ){
        throw new Error(`algunos campos no estan completos completelos`)
    }
  //--------------------------------------------------------------------------------
// creo un nuevo array para agregar el nuevo producto y se le asigna a producto
    this.products =[...this.products,newProducto];

    //ESCRIBIR LE PRODUCTO y lo paso a formato json
    await fs.promises.writeFile(this.#path,JSON.stringify(this.products))
    
}
// METODO PARA CONSULTAR PRODUCTOS // LEERLOS

async consultarProducto (){
    try{
const users = await fs.promises.readFile(this.#path,"utf-8");
// lo paso a formato objeto
return JSON.parse(users)
    }catch (err){
 
    }
}

//METODO UPDATE PRODUCT para actualizar un campo ??
updateProduct (id,title){

}
//METODO PARA ELIMINAR PRODUCTO

async eliminar (){

    try{
         await fs.promises.unlink(this.#path)
console.log("eliminado")
    }catch(err){
        
    }

} 
eliminar()



// funcion para buscar en la lista de productos un ID que exista , sino existe sale error
//  busca el producto de acuerdo id , lo lee y lo pasa a objeto.
async getproductById (id){

    const search  = await  this.products.find((pr)=>pr.id===id)
    if (!search){
        throw new Error (`not found`)
    }else {
        const read = await fs.promises.readFile(this.#path,"utf-8");
        return JSON.parse (read)
    }
   

}
// FUNCION PARA BORRAR PRODUCTO DE SEGUN ID
 deleteProduct (id){

    const searchIdDelete =  this.products.find((pr)=>pr.id ===id)
    if (!searchIdDelete){
        throw new error (" id no encontrado")
    }else {
        const deleteProduct = fs.promises.unlink(this.#path,"utf-8");
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
// funcion principal para manejar los productos
async function main(){
    const order = new ProductManager();
    await order.addProduct ("tomate","grande",5,65,45,45)
    await order.addProduct ("pomelo","maduro",300,3,56,234)
    await  order.getproductById(1)
   

}



main()
// para ver la  la lista de pedidos//



