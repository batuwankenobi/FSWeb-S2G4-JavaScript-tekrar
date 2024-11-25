let ucetambolunenler,
    enkucuk,
    enbuyuk,
    ucebolunenlerintoplami,
    besyuzdenkucuksayilar,
    siralisayilar,
    tekraredensayilar;
//
// 
// 3a
let enbuyuk = -Infinity;
let enkucuk = Infinity;

for (let i = 0; i < sayilar.length; i++) {
    if (sayilar[i] > enbuyuk) enbuyuk = sayilar[i];
    if (sayilar[i] < enkucuk) enkucuk = sayilar[i];
}

// 3b
let ucetambolunenler = [];
sayilar.forEach(function(sayi) {
    if (sayi % 3 === 0) {
        ucetambolunenler.push(sayi);
    }
});

// 3c
let ucebolunenlerintoplami = ucetambolunenler.reduce((toplam, sayi) => toplam + sayi, 0);

// 3d
let besyuzdenkucuksayilar = sayilar.filter(sayi => sayi < 500);

// 3e
let siralisayilar = besyuzdenkucuksayilar.sort((a, b) => a - b);

// 3f
let sayiSayaci = {};
let tekraredensayilar = [];

sayilar.forEach(function(sayi) {
    sayiSayaci[sayi] = (sayiSayaci[sayi] || 0) + 1;
});

for (let sayi in sayiSayaci) {
    if (sayiSayaci[sayi] > 1) {
        tekraredensayilar.push(`${sayi} sayısı ${sayiSayaci[sayi]} kere tekrar edilmiştir`);
    }
}

console.log("En büyük sayı:", enbuyuk);
console.log("En küçük sayı:", enkucuk);
console.log("3'e tam bölünenler:", ucetambolunenler);
console.log("3'e tam bölünenlerin toplamı:", ucebolunenlerintoplami);
console.log("500'den küçük sayılar:", besyuzdenkucuksayilar);
console.log("Sıralı 500'den küçük sayılar:", siralisayilar);
console.log("Tekrar eden sayılar:", tekraredensayilar);