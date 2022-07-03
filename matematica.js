const matematica = {};

function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0) {
        console.log("no se puede dividir")
    } else {
        return x1 / x2;
    }

}
/*
propiedad de un objeto
exports.add = add;
exports.substract = substract;
exports.multiply = multiply;
exports.divide = divide;*/

matematica.add = add;
matematica.substract = substract;
matematica.multiply = multiply;
matematica.divide = divide;

module.exports = matematica;