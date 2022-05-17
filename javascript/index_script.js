async function cargarUrl(url){
    let response = await fetch(url);
    return response.json();
}

 async function cantprod(){
    let url = `https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/statistics`;
    let json = await cargarUrl(url);
    document.getElementById("cant-of-prod").innerHTML ="Cantidad de productos: "+ json.amount_of_products;
}
cantprod()

async function descAllPro(){
    let url =`https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products`;
    let json = await cargarUrl(url);

    for(let producto of json){

        let imagen = document.createElement('img');
        imagen.src = producto.image_url;
        imagen.className = 'product-image';
        imagen.alt = 'imagen de notebook';
    
        let nombre = document.createElement('nombre');
        nombre.appendChild(document.createTextNode(producto.title));
    
        let descripcion = document.createElement('descripcion');
        descripcion.appendChild(document.createTextNode(producto.price));
    
        let div = document.createElement('div');
        div.appendChild(imagen);
        div.appendChild(nombre);
        div.appendChild(descripcion);
        div.className = 'product';
    
        document.getElementById('product-list').appendChild(div);
    }

    
}

descAllPro();
    


