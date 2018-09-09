/* Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa
array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter
'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah
['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2.
Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0. */

function targetTerdekat(arr) {
    // you can only write your code here!
    for (var i=0; i<arr.length; i++) {
        var stp = 0
        if (arr[i] === 'o') {
            stp = i
            for (stp; stp<arr.length; i++) {
                stp2 = 0
                if (arr[stp] === 'x') {
                    stp2 = stp
                    
                }return stp2
            }
        }
    }
  }
  
  // TEST CASES
  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
//   console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
//   console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
//   console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
//   console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2