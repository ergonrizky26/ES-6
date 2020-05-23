// ES5
//var myName = "SukaKoding";

//myName = "Belajar Koding";
//console.log(myName);

// ES6
//const myCar = "Toyota Rush";
//myCar = "Agya";
//console.log(myCar);

// penggunaan let jika tipe data nya ingin diubah, jika tidak bisa gunakan const saja
//let myCar = ['BMW', 'Suzuki', 'Toyota'];

//for (let i = 0; i < myCar.length; i++) {
//  console.log(myCar[i]);
//}

// ambil elemen
const user_place = document.getElementById('user');

//ES5
//const user_logged = "Tony";
//user_place.innerHTML = user_logged;
//user_place.innerHTML = "Hi, " + user_logged;
//console.log(user_logged);

//ES6
const user_logged = "Tony";
user_place.innerHTML = `Hi, ${user_logged}. Apa Kabar?`;

//ES5
//ambil elemen
// const cart_items = document.getElementById('cart');

// function addProduct(name, category) {
//     return {
//         name: name,
//         category: category
//     }
// }

// var getProduct = addProduct("iPhone 11", "Gadget");
// console.log(getProduct);

//ES6
//ambil elemen

const cart_items = document.getElementById('cart');

function addProduct(name, category) {
    return {
        name,
        category
    }
}

var getProduct = addProduct("iPhone 11", "Gadget");
cart_items.innerHTML = `Product: ${getProduct.name} Category: ${getProduct.category}`;

//ambil elemen
const skilss_holder = document.getElementById('skills');

//ES5

//ES6
const yourskills = ['ES6', 'Java', 'React'];

// yourskills.push('DevOps');

// var parent = '<ul>'

// yourskills.forEach((skill) => {
//     parent += '<li>' + skill + '</li>';
//     console.log(`${skill}`);
// });

// parent += '</ul>';
// skilss_holder.innerHTML = parent;

// mapfilter => filter data
const myPrimarySkill = yourskills.filter(skill => {
    return skill === "ES6";
})

skilss_holder.innerHTML = myPrimarySkill;

//Classes
//ex. modul untuk member kelas

class Siswa {
    constructor(username, password, nama_kelas) {
        this.username = username;
        this.password = password;
        this.nama_kelas = nama_kelas;
    }
    gabung() {
        console.log(this.username + ' telah bergabung pada kelas ' + this.nama_kelas);
    }
}

// let tambahSiswa = new Siswa('Ergon', '230fsdf', 'JavaScript');
// tambahSiswa.gabung();

//inheritance
class langganan extends Siswa {
    constructor(username, paket) {
        super(username);
        this.paket = paket;
    }
    gabungPaket() {
        console.log(this.username + ' telah langganan paket ' + this.paket);
    }
}

let tambahLangganan = new langganan('Rizky', 'Premium');
tambahLangganan.gabungPaket();