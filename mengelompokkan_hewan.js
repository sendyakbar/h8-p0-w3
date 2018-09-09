/* Diberikan sebuah function groupAnimals(arr) yang menerima satu parameter berupa
array yang berisi string. Function akan me-return array multidimensi dimana array
tersebut berisikan kategori/kelompok array yang dikumpulkan sesuai dengan abjad
depannya. Abjad harus berurut dari a-z (jika ada). Untuk kasus ini, anggap saja
semua text lowercase.
Contoh jika animals adalah ["ayam", "kucing", "bebek", "bangau", "zebra"]
maka akan menampilkan output: [ [ "ayam" ], [ "bebek", "bangau" ], [ "kucing ],
[ "zebra" ] ]
Urutan hewan dalam array setiap pengelompokan huruf tidak penting. */

function groupAnimals(animals) {
    // you can only write your code here!
    var hasil = []
    var kelompok1 = []
    var kelompok2 = []
    var kelompok3 = []
    var kelompok4 = []
    for (var i = 0; i < animals.length; i++) {
        if (animals[i][0] === 'a') {
            kelompok1.push(animals[i])
        }
        else if (animals[i][0] === 'c') {
            kelompok2.push(animals[i])
        }
        else if (animals[i][0] === 'k') {
            kelompok3.push(animals[i])
        }
        else {
            kelompok4.push(animals[i])
        }
    }
    hasil.push(kelompok1, kelompok2, kelompok3, kelompok4)
    if (hasil[hasil.length-1] == []) {
        hasil.pop() 
    }
    return hasil
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
  // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ] kancilnya mana???