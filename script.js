function tambah(a, b){
    console.log("Angka 1: " + a);
    console.log("Angka 2: " + b);
    return a + b;
}
function kurang(a, b){
    console.log("Angka 1: " + a);
    console.log("Angka 2: " + b);
    return a - b;
}
function kali(a, b){
    console.log("Angka 1: " + a);
    console.log("Angka 2: " + b);
    return a * b;
}
function bagi(a, b){
    console.log("Angka 1 : " + a);
    console.log("Angka 2 : " + b);
    return a / b;
}

let user = prompt("masukan input +, -, *, /");
if(user == "+"){
    let a = parseInt(prompt("Masukan Nilai 1 : "));
    let b = parseInt(prompt("Masukan Nilai 2 : "));
    let hasil = tambah(a, b);
    console.log("Hasil = " + hasil);
}else if(user == "-"){
    let a = parseInt(prompt("Masukan Nilai 1 : "));
    let b = parseInt(prompt("Masukan Nilai 2 : "));
    let hasil = kurang(a, b);
    console.log("Hasil = " + hasil);
}else if(user == "*"){
    let a = parseInt(prompt("Masukan Nilai 1 : "));
    let b = parseInt(prompt("Masukan Nilai 2 : "));
    let hasil = kali(a, b);
    console.log("Hasil = " + hasil);
}else if(user == "/"){
    let a = parseInt(prompt("Masukan Nilai 1 : "));
    let b = parseInt(prompt("Masukan Nilai 2 : "));
    let hasil = bagi(a, b);
    console.log("Hasil : " + hasil);
}