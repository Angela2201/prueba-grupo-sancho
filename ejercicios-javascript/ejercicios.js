/* SCRIPT:

const getPairs = (array) => {
    return array.filter(a => a % 2 == 0);
} */

/* 1. Cuando pasas un valor null o undefined como getPair(null) el script se bloquea. ¿cómo lo refactorizarías para soportar valores nulos?. */

const getPairs = (array) => {
    if (array == null || undefined) {
        return null;
    } else {
        return array.filter(a => a % 2 == 0)
    }
}

console.log(getPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, null]));

/* 2. Utiliza el mismo enfoque para crear una nueva función para obtener números primos. */

const isPrime = (a) => {

    if (a < 2) {
        return false
    }
    if (a == 2 || a == 3) {
        return true
    }
    if (a % 2 == 0){
        return false
    }

    let multiples = [3, 5, 7, 9]

    for (let index in multiples) {
        if (a != multiples[index] && a % multiples[index] == 0) {
            return false
        }
    }

    return true
}

const primeNumbers = (array) => {
    return array.filter(isPrime);
}

console.log(primeNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13]));