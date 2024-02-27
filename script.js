function generer_cle(mot, n) {
    var cle = ""
    q = Math.floor(n / mot.length)
    rest = n % mot.length
    return mot*q + mot.slice(0, rest)    
}


function xor_crypt(message, cle) {
    // crypt the message using xor
    var message_code = '';
    for (let i = 0; i < message.length; i++) {
        message_code += String.fromCharCode(message.charCodeAt(i) ^ cle.charCodeAt(i % cle.length));
    }
    return message_code;
}


function randint(min=0, max=1) {
    // random an inteager number
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function choice(array) {
    // Retrun a random item of the array
    return array[randint(0, array.length - 1)]
}

function generer_cle_securise(n=null) {
    // generate a secure key
    var carateres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    var cle = "";
    if (n === null) {
        n = randint(5, 10);
    }

    for (let i = 0; i < n; i++ ) {
        cle += choice(carateres)
    }
    return cle
}

console.log(generer_cle_securise())
var cle = generer_cle("1234", 5)
var crypted = xor_crypt(message="salut", cle)
console.log(xor_crypt(crypted, cle))
