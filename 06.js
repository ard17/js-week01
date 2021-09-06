const getCordinat = (x1,y1,x2,y2) => {
    const d = Math.sqrt(Math.pow((x1 - x2),2)) + Math.pow((y1 - y2),2);
    let i = Math.pow((x1 - x2),2)
    let k = Math.pow((y1 - y2),2)
    let j = Math.sqrt(i)
    if(isNaN(x1) || isNaN(y1) || isNaN(x2) || isNaN(y2)){
        return "input kordinat dalam angka"
    } else {
        return k
    }

}

// console.log(getCordinat(3,4,-4,-5)); //9
console.log(getCordinat("1","2","-1","-2")); //1
// console.log(getCordinat("x","2","-y","-2")); //input kordinat dalam angka
// console.log(getCordinat(3.2,4.5,-4.4,-5)); //13.695801445917125