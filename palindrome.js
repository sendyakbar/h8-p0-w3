function palindrome(kata) {
  var index = kata.length - 1
  var balik = ''
  while (index >= 0) {
    balik = balik + kata[index]
    index--
  }
  if (balik === kata) {
    return true
  } else {
    return false
  }
}
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
