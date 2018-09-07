/* Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka.
Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome.
Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah
angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus
mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8,
walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9. */

function angkaPalindrome(num) {
  var limit = 0
  var temp = 0
  while (num > limit) {
    var selector = num.toString()
    if (num < 10) {
      temp = num + 1
      limit = num + 5
    }
    else if (selector[0] === selector   [selector.length-1]) {
      temp = num
      limit = num + 5
    }
    num++
  }
  return temp
}
//TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
// console.log(angkaPalindrome('jajan'))
