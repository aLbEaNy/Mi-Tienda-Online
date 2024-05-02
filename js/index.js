const productosBD = [

    {
        id: 1,
        imagen: 'img/producto1.jpg',
        info: 'Desbloquea la puerta mediante un código PIN en el teclado inteligente y concede códigos de entrada únicos personalizados para acceder sin necesidad de usar llaves mecánicas ni Smartphone.',
        nombre: 'YALE SMART KEYPAD LINUS',
        precio: 54,
        categoria: ['teclado, accesorios']
    },
    {
        id: 2,
        imagen: 'img/producto2.jpg',
        info: 'Candado táctil COOL TOUCH.\
        Apertura táctil instantánea con huella dactilar.\
        Registro de huellas de hasta 10 usuarios simultáneos habilitados por un usuario principal (administrador).\
        Incluye cargador de batería USB-C, de carga ultra rápida.',
        nombre: 'CANDADO TACTIL COOL TOUCH',
        precio: 92.86,
        categoria: ['huella', 'accesorios']
    },
    {
        id: 3,
        imagen: 'img/producto3.jpg',
        info: 'Linus® Smart Lock bloquea y desbloquea la cerradura de forma segura remotamente. Accede a tu hogar sin llaves,\
         ve quién entra y cuándo, si la puerta está abierta o cerrada, y concede llaves virtuales a invitados a través de la app Yale\
          Access, desde cualquier lugar en cualquier momento. Disponible en plata y negro mate.',
        nombre: 'CERRADURA INTELIGENTE KEYLESS LINUS',
        precio: 195.95,
        categoria: ['cerraduraE']
    },
    {
        id: 4,
        imagen: 'img/producto4.jpg',
        info: 'NUKI Pack combo SMART LOCK 2.0. NUKI convierte tu puerta en un sistema de acceso inteligente y tu Smartphone\
         en una llave inteligente. Se sigue pudiendo abrir la puerta con una llave física.',
        nombre: 'NUKI SMART LOCK V3',
        precio: 168.99,
        categoria: ['cerraduraE']
    },
    {
        id: 5,
        imagen: 'img/producto5.jpg',
        info: 'Pila Litio 9 Voltios especial. Recambio para cerraduras INT-LOCK BF y RF. Acabado: Blanco-azul.',
        nombre: 'PILA LITIO NX 9V 6LF22',
        precio: 23.95,
        categoria: ['accesorios']
    },
    {
        id: 6,
        imagen: 'img/producto6.jpg',
        info: 'Cerradura invisible alta seguridad INT-LOCK RF con alarma. Cerradura electrónica de fácil instalación para\
         cualquier tipo de puerta. Permite la apertura remota desde mando a distancia RF int-KEY incopiable. Invisible desde el exterior.',
        nombre: 'CERRADURA INVISIBLE 504 INT-LOCK RF',
        precio: 185,
        categoria: ['cerraduraE']
    },
    {
        id: 7,
        imagen: 'img/producto7.jpg',
        info: 'La cerradura hotelera LH3000 RFID es una gran solución para los hoteles gracias a su tecnología avanzada de\
         tarjeta Mifare de 13.56 Mhz. Cuenta con mortaja estándar americana de 2 pestillos y su carcasa de acero inoxidable ofrece\
          una gran estética y seguridad.',
        nombre: 'YZKTeco LH3000L',
        precio: 87.50,
        categoria: ['cerraduraE', 'tarjeta']
    },
    {
        id: 8,
        imagen: 'img/producto8.jpg',
        info: 'Cerradura Girallaves inteligente Bluetooth. Sin cilindro. Apta para cilindros de terceros. Potente motor para\
         puertas blindadas. App Cloud Smart Lock. Sin corte de llave',
        nombre: 'SF-SMARTLOCK-BT-PRO-V2',
        precio: 189.95,
        categoria: ['cerraduraE']
    },
    {
        id: 9,
        imagen: 'img/producto9.jpg',
        info: 'WM-LOCK-B. Cerradura inteligente Bluetooth Watchman Door. Instalación invisible desde el exterior. Usuarios \
        invitados y reportes de accesos. Fácil instalación sin manipular la puerta. Material robusto de alta seguridad. App gratuita \
        WatchManDoor Home',
        nombre: 'WM-LOCK-B BLUETOOTH WATCHMAN DOOR',
        precio: 172,
        categoria: ['cerraduraE']
    }

];

const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.getElementById('total');

let carrito = [];
const divisa = '€';

//--------- CATEGORIAS ---------------- //

const cerraduraE = document.getElementById('cerraduraE');
cerraduraE.addEventListener('click', obtenerCat);
const teclado = document.getElementById('teclado');
teclado.addEventListener('click', obtenerCat);
const tarjeta = document.getElementById('tarjeta');
tarjeta.addEventListener('click', obtenerCat);
const huella = document.getElementById('huella');
huella.addEventListener('click', obtenerCat);
const todas = document.getElementById('todas');
todas.addEventListener('click', () => renderizarProductos(productosBD));

function obtenerCat(ev) {
    const cat = ev.target.id;
    //console.log(cat);
    const categoria = productosBD.filter(item => item.categoria.some(it => it.includes(cat)));
    renderizarProductos(categoria);
}

function renderizarProductos(categoria) {

    DOMitems.innerHTML = ''; // Borro antes de cargar

    categoria.forEach(items => {

        const nArti = document.createElement('article');
        nArti.setAttribute('id', items.id);
        const nImg = document.createElement('img');
        nImg.setAttribute('src', items.imagen);
        nImg.setAttribute('alt', items.nombre);
        nImg.addEventListener('mouseover', () => { nInfo.style.opacity = '0.90'; nInfo.style.transitionDelay = '0.4s'; nInfo.style.zIndex = '0' });
        nImg.addEventListener('mouseout', () => { nInfo.style.opacity = '0'; nInfo.style.transitionDelay = '1s'; nInfo.style.zIndex = '-1' });
        const nInfo = document.createElement('p');
        nInfo.classList.add('menuInfo');
        nInfo.textContent = items.info; 12
        const nNombre = document.createElement('span');
        nNombre.textContent = items.nombre;
        const nPrecio = document.createElement('span');
        nPrecio.textContent = items.precio + divisa;
        const nBoton = document.createElement('button');
        nBoton.classList.add('add');
        nBoton.setAttribute('idP', nArti.id);
        nBoton.textContent = 'Añadir';
        nBoton.addEventListener('click', addItemCarrito);

        // AÑADIENDO ITEMS..........

        DOMitems.append(nArti);
        nArti.append(nInfo);
        nArti.append(nImg);
        nArti.append(nNombre);
        nArti.append(nPrecio);
        nArti.append(nBoton);

    });
}

function renderizarCarrito() {

    DOMcarrito.innerHTML = ''; // Borrado todo el html dinamico del carrito
    const carritoSinDupli = new Set(carrito);
    carritoSinDupli.forEach(idPr => {

        const item = getItem(idPr);

        const div = document.createElement('p');
        const spanCant = document.createElement('h3');
        spanCant.classList.add('negrita', 'margen')
        spanCant.textContent = getUnidades(idPr);
        const aC = document.createElement('a');

        const botonAdd = document.createElement('button');
        botonAdd.classList.add('btnAdd');
        botonAdd.setAttribute('id', idPr);
        botonAdd.addEventListener('click', addItem1a1);

        const botonDel = document.createElement('button');
        botonDel.classList.add('btnDel');
        botonDel.setAttribute('id', idPr);
        botonDel.addEventListener('click', delItem1a1);

        const spanUnid = document.createElement('span');
        spanUnid.classList.add('negrita', 'margen')
        spanUnid.textContent = 'Unid.';
        const imgMini = document.createElement('img');
        imgMini.src = item.imagen;
        imgMini.style.width = '20%';
        imgMini.alt = 'Producto ', idPr;

        const botonDelProd = document.createElement('button');
        botonDelProd.classList.add('btnDelP');
        botonDelProd.setAttribute('id', idPr);
        botonDelProd.addEventListener('click', delItemCarrito)

        const spanNombre = document.createElement('h4');
        spanNombre.textContent = item.nombre;

        const spanPrecio = document.createElement('span');
        spanPrecio.className = 'precioC';
        spanPrecio.textContent = item.precio + divisa;

        DOMcarrito.append(div);

        div.append(botonDel);
        div.append(botonAdd);
        div.append(spanCant);
        div.append(spanUnid);
        div.append(imgMini);
        div.append(botonDelProd);

        DOMcarrito.append(spanNombre);
        DOMcarrito.append(spanPrecio);
    });

    DOMtotal.textContent = 'Total: ' + calcularTotal() + divisa;

    // BOTON DE VACIAR CARRITO
    const btnResetCarrito = document.getElementById('resetCarrito');
    btnResetCarrito.addEventListener('click', () => { carrito = []; renderizarCarrito() });

    saveLS();
}


// DEVUELVE EL OBJETO PASANDOLE EL ID
function getItem(idPr) {
    const item = productosBD.find(item => item.id == idPr);
    return item; // objeto que contiene el idPr
}

function getUnidades(idPr) {
    const unid = carrito.filter(item => item == idPr).length
    return unid;
}

function addItemCarrito(ev) {
    carrito.push(ev.target.getAttribute('idP'));
    console.log('Item pulsado add al carrito ', ev.target.getAttribute('idP'));
    renderizarCarrito();
}

function calcularTotal() {
    let total = 0;
    carrito.forEach(i => total += getItem(i).precio);
    return total.toFixed(2);
}
//AÑADE AL CARRITO DE 1 EN 1 EL MISMO ITEM
function addItem1a1(ev) {
    carrito.push(ev.target.id);
    renderizarCarrito();
}
//ELIMINA DEL CARRITO DE 1 EN 1 EL MISMO ITEM
function delItem1a1(ev) {
    const indexDel = carrito.findIndex(i => i == ev.target.id);
    if (indexDel !== -1)
        carrito.splice(indexDel, 1);
    renderizarCarrito();
}
//ELIMINA DEL CARRITO TODOS LOS DEL MISMO ITEM 
function delItemCarrito(ev) {
    const idDel = ev.target.id;
    carrito = carrito.filter(i => i != idDel);
    renderizarCarrito();
}

//--------- LOCAL STORAGE --//
function saveLS() {
    window.localStorage.setItem('carritoMiTienda', JSON.stringify(carrito));
}
function loadLS() {
    if (window.localStorage.getItem('carritoMiTienda'))
        carrito = JSON.parse(window.localStorage.getItem('carritoMiTienda'));
}
//--------- INICIO ---------//
window.addEventListener('load', loadLS)
window.addEventListener('load', renderizarProductos(productosBD));
window.addEventListener('load', renderizarCarrito);