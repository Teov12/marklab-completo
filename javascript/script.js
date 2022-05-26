const app = Vue.createApp({
    data(){
        return{
            cart: 0,
            precio: 50000,
            nombre: 'Notebook HP 14-dq2024la',
            descripcion: 'Computadora HP orientado para gama media. Procesador Intel® Core™ i3 de 11.ª generación.  Windows 10 Home 64.  Unidad de estado sólido PCIe® NVMe™ M.2 de 256 GB . Pantalla de 14 pulgadas.',
            imagen: 'https://ar-media.hptiendaenlinea.com/catalog/product/8/V/8VW01LA-1_T1615590539.png',
            factory: 'https://www.hp.com/ar-es/shop/notebook-hp-14-dq2024la-3v8j6la.html',
            Urlimages: [
                "https://images.fravega.com/f300/f19a13f256d442a8d2d3622e064bfe33.jpg.webp",
                "https://images.fravega.com/f300/7b331f9a696c4746c53033dcf1677b69.jpg.webp",
                "https://cdn.alquimio.cloud/images/@thumbs_1200_264686eaf62321cd408432b04c4637e40125ab62.webp"
            ]
            
        }
    },
    methods:{
        AddToCart(){
            this.cart +=1;
        },
        UpdateImage(urlimage){
            this.imagen = urlimage
        }
    }

})




async function cargarUrl(url){
let response = await fetch(url);
    return response.json();
}

async function descProd(){
    let url = `https://my-json-server.typicode.com/agustinruatta/fake_json_server_db/products/1`;
    let json = await cargarUrl(url);
    //document.getElementById("title").innerHTML =json.title;
    //document.getElementById("product-description").innerHTML =json.description;
    //document.getElementById("product-image").src =json.image_url;
    //document.getElementById("price").innerHTML = json.price;
    //document.getElementById("fabri").href = json.factory_url;
    

}
descProd();



