function balikString (str) {
  var hurufTerakhir = str.length - 1
  var balik = ''
  while (hurufTerakhir >= 0) {
    balik = balik + str[hurufTerakhir]
    hurufTerakhir--
  }
  return balik
}
console.log(balikString('Hello World'))
