async function cargarUrl(url){
let response = await fetch(url);
    return response.json();
}

async function descProd(){
    let url = `https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1`;
    let json = await cargarUrl(url);
    

}
descProd();

