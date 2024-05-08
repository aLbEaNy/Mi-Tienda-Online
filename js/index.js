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
let usuarioBD = [];

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

    console.log(carrito.length);
    const unidCarrito = carrito.length;
    const idNavCarrito = document.getElementById('navCarrito');
    idNavCarrito.innerHTML = `<img class="imgCarrito" src="img/carrito.png" alt="carrito"/> Carrito(${unidCarrito})`;
    toggleCarrito();



    DOMcarrito.innerHTML = ''; // Borrado todo el html del carrito
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


    saveLS();
}
// BOTON DE VACIAR CARRITO
const btnResetCarrito = document.getElementById('resetCarrito');
btnResetCarrito.addEventListener('click', () => { carrito = []; renderizarCarrito() });

//---------- MOSTRAR/OCULTAR CARRITO ------------------//

const iconoCarrito = document.getElementById('navCarrito');
iconoCarrito.addEventListener('click', toggleCarrito);

function toggleCarrito(ev) {

    const main = document.querySelector('main');
    const aside = document.querySelector('aside');
    if (ev != undefined) {  // si venimos desde el icono de carrito
        if (aside.classList.value.includes('oculta')) {
            //console.log('estaba oculta');
            main.classList.remove('agrandaM');
        }
        else {
            main.classList.add('agrandaM');
        }
        aside.classList.toggle('oculta');
    }
    else { //venimos de otros eventos o del load
        if (carrito.length == 0) {
            main.classList.add('agrandaM');
            aside.classList.add('oculta');
        }
        else {
            main.classList.remove('agrandaM');
            aside.classList.remove('oculta');
        }
    }
}
//----------------------------------------------------//

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
    if (window.localStorage.getItem('usuarios'))
        usuarioBD = JSON.parse(window.localStorage.getItem('usuarios'));
}
//--------- INICIO ---------//
window.addEventListener('load', loadLS)
window.addEventListener('load', renderizarProductos(productosBD));
window.addEventListener('load', renderizarCarrito);

//---------- FORMULARIO -----------//

const divForm = document.querySelector('.formulario')
const DOMcontainer = document.querySelector('.container');

const login = document.getElementById('login');
login.addEventListener('click', muestraForm);

const btnCancelar = document.querySelector('#bCancelar');
btnCancelar.addEventListener('click', cierraForm);

const btnEnviar = document.getElementById('bEnviar');
btnEnviar.addEventListener('click', submitEnviar);

// Mensaje personalizado dirección
document.forms.formReg.direccion.addEventListener('input', ev => {
    console.log(ev.target.validity.tooShort);
    if (ev.target.validity.tooShort) {
      ev.target.setCustomValidity("Dirección demasiado corta. No has escrito la dirección de envío completa.");
    }
    else
      ev.target.setCustomValidity("");
  });
//-----------------------------------
// Ver password click en ojo 
document.getElementById('verPass').addEventListener('click', () => {
    const tipoTextPass = document.getElementById('password');
    if (tipoTextPass.getAttribute('type') === 'password')
        tipoTextPass.setAttribute('type','text');
    else
        tipoTextPass.setAttribute('type','password');
});
document.getElementById('verVPass').addEventListener('click', () => {
    const tipoTextPass = document.getElementById('vPassword');
    if (tipoTextPass.getAttribute('type') === 'password')
        tipoTextPass.setAttribute('type','text');
    else
        tipoTextPass.setAttribute('type','password');
});
//-----------------------------------
function submitEnviar(ev) {
    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('password').value;
    if (usuarioBD.length != 0) {
        if (usuarioBD.find(item => item.usuario === usuario) && usuarioBD.find(i => i.pass === pass)) {
            cierraForm();
            ev.preventDefault();
            alert(`Bienvenido ${usuario}`);
            login.innerText = usuario;
        }
        else
            alert('Usuario o password incorrectos');
        ev.preventDefault();
    }
    else
        registroForm(ev);
}

function registroForm(ev) {
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const vPass = document.getElementById('vPassword').value;
    const direccion = document.getElementById('direccion').value;

    let esValida = false;
    if (pass !== vPass) {
        alert('Las contraseñas no coinciden');
        ev.preventDefault();
    }
    else if (direccion.length < 10) {
    }
    else
        esValida = true;
    console.log(esValida);
    if (esValida) {
        usuarioBD = [{ usuario, email, pass, direccion }];
        console.log(usuarioBD);
        window.localStorage.setItem('usuarios', JSON.stringify(usuarioBD));
        cierraForm();
    }
}
function muestraForm() {
    if (usuarioBD.length != 0)
        loginForm();
    divForm.style.display = 'block';
    DOMcontainer.style.filter = 'blur(5px)';// Aplica un filtro de desenfoque
    DOMcontainer.style.pointerEvents = 'none';// Desactiva eventos de puntero
}
function cierraForm() {
    divForm.style.display = 'none';
    DOMcontainer.style.filter = 'none';
    DOMcontainer.style.pointerEvents = 'auto';
}

function loginForm() {
    document.querySelector('form h1').textContent = 'Inicio de sesión';
    const fuera = document.querySelectorAll('.fuera');
    fuera.forEach(i => i.remove()); // elimino los p de formulario de registro que no necesito para login
}
// -------------------------------------------------------------------//
