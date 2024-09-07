{
    //1.Ko'paytiring
    multiply = (a, b) => a * b
    console.log(multiply(3, 4));
}

{
    //2.Sonning juft yoki toqligini aniqlang
    const evenOrOdd = number => number % 2 ? "Odd" : "Even"; //Even-juft Odd-toq
    console.log(evenOrOdd(3));
}

{
    //3.Raqamni satr(string)ga aylantiring
    const numberToString = num => `${num}`
    console.log(numberToString(7));
}

{
    //4.Teskari satr. Kiritilgan so'zni teskari qaytarish
    const solution = str => str.split(``).reverse().join(``)
    //(split-satrni harflarga ajratadi) (reverse-teskari o'giradi) (join-bir satrga yig'adi)
    console.log(solution(`Hello world`));
}

{
    //5.Berilgan sonni manfiy songa o'zgartirish agarda 0 yoki manfiy bo'lsa o'z holida qoladi
    function makeNegative(num) {
        if(num > 0) return -num
        else return num
    }
    console.log(makeNegative(5));
    console.log(makeNegative(-2));
}

{
    //6.Berilgan raqamning teskarisini topish(M.s 1:-1, 14:-14, -34:34)
    const opposite = number => number > 0 ? -number : Math.abs(number);
    console.log(opposite(17));
    console.log(opposite(-21));
}

{
    //7.Mantiqiy qiymat ya'ni true kirsa "Yes", false kirsa "No" chiqarish kerak
    const boolToWord = bool => bool == true ? `Yes` : `No`
    console.log(boolToWord(true));
    console.log(boolToWord(false));
}

{
    //8.n butun soni va satr(s) berilgan. Shu satrni n marta takrorlab qaytaruvchi funksiya
    let repeatStr = (n, s) => s.repeat(n)
    //repeat-s satrni n marta takrorlaydi
    console.log(repeatStr(5, `Najottalim `));
}

{
    //9."Hello World" ni qaytaruvchi funksiya
    let greet = g => "hello world!"
    console.log(greet());
}

{
    //10.Kiritilgan stringdan 1 chi va oxirgi xarfni olib tashlovchi funksiya
    let removeChar = str => str.slice(1, -1)
    //slice-stringdan belgi olib tashlashga hizmat qiladi
    console.log(removeChar(`Iphone`));
}

{
    //11.Kiritilgan string tipidagi sonlar orasidan eng katta va eng kichik sonni chiqaruvchi funksiya
    function highAndLow(numbers){
        let numArray = numbers.split(' ').map(Number);
        let max = Math.max(...numArray);
        let min = Math.min(...numArray);
        return `${max} ${min}`;
    }
    console.log(highAndLow("7 14 23 -1 5 23"));
}