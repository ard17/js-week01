const convertToRupiah = (value, currencyType) => {
    const yen = value * 130.12;
    const usd = value * 14382.5;
    const euro = value * 16000;
    
    if(currencyType === "yen"){
        return `${value} yen = Rp.${yen}`
    } else if(currencyType === "usd"){
        return `${value} dollar = Rp.${usd}`
    } else if(currencyType === "euro"){
        return `${value} euro = Rp.${euro}`
    } else {
        return "no match type currency"
    }
}

console.log(convertToRupiah(1000,'yen'));//1000 yen = Rp.130.120
console.log(convertToRupiah(100,'usd'));//100 dollar = Rp.1.438.250
console.log(convertToRupiah(100,'euro'));//100 dollar = Rp.1.600.000
console.log(convertToRupiah(100,''));//no match type currency