/*Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter
berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang
paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928,
maka function akan me-return 92, pasangan dua digit angka yang paling besar
diantara yang lainnya. */
function pasanganTerbesar(num) {
    // you can only write your code here!
    var str = String(num)
    var max = str[0] + str[1]
    for (var i = 1; i < str.length - 1; i++) {
        var current = str[i] + str[i + 1]
        if (current > max) {
            max = str[i] + str[i + 1]
        }
    } 
    return Number(max)
}
// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99