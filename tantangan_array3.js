function dataHandling2 (input) {

  input.splice(4, 1, 'pria', 'SMA Internasional Metro')
  input.splice(1, 1, 'Roman Alamsyah Elsharawy')
  input.splice(2, 1, 'Provinsi Bandar Lampung')
  console.log(input)

  var tanggal = input[3].split('/')
  var bulan = tanggal[1]
  switch(bulan) {
    case '01': { console.log(' Januari '); break; }
    case '02': { console.log(' Februari '); break; }
    case '03': { console.log(' Maret '); break; }
    case '04': { console.log(' April '); break; }
    case '05': { console.log(' Mei '); break; }
    case '06': { console.log(' Juni '); break; }
    case '07': { console.log(' Juli '); break; }
    case '08': { console.log(' Agustus '); break; }
    case '09': { console.log(' September '); break; }
    case '10': { console.log(' Oktober '); break; }
    case '11': { console.log(' November '); break; }
    case '12': { console.log(' Desember '); break; }
  }

  tanggal.sort(function(value1, value2) {return value2 - value1})
  console.log(tanggal)

  tanggal = input[3].split('/')
  console.log(tanggal.join('-'))

  var potongNama = input[1].slice(0, 15)
  console.log(potongNama)
}

dataHandling2(['0001', 'Roman Alamsyah ', 'Bandar Lampung', '21/05/1989', 'Membaca'])
