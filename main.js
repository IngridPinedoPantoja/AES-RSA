// RIVEST-SHAMIR-ADLEMAN (RSA)
const NodeRSA = require('node-rsa');
const keyRSA = new NodeRSA({b: 512});

keyRSA.generateKeyPair();

const publicDer = keyRSA.exportKey('public');
const privateDer = keyRSA.exportKey('private');

console.log(publicDer);
console.log(privateDer);

const text = 'Secret information omg cant see this';
const encryptedTxt = keyRSA.encrypt(text, 'base64');

console.log(encryptedTxt);

// Insertar texto -> HTML
document.getElementById("rsa-Cifrado").innerHTML = encryptedTxt;
document.getElementById("rsa-Original").innerHTML = text;

















// ADVANCE ENCRYPTION STANDARD (AES)
const crypto = require('crypto');

const iv = Buffer.alloc(16, 0);
const key = "MySecretNiggaKey";

// Encriptar
function encode(text, key) {
	const mykey = crypto.createCipheriv('aes-128-cbc', key, iv);
	let mystr = mykey.update(text, 'utf8', 'hex');
	mystr += mykey.final('hex');
	return(mystr);
}

let encryptedValue = encode("OMG u got me nigga, Hackerman!", key);
console.log('El mensaje CIFRADO es: ' + encryptedValue );

//Desencriptar 
function decode(message, key) {
	const mykey = crypto.createDecipheriv('aes-128-cbc', key, iv);
	let mystr = mykey.update(message, 'hex', 'utf8');
	mystr += mykey.final('utf8');
	return(mystr);
}

decryptedValue = decode(encryptedValue, key);
console.log('El mensaje ORIGINAL es: ' + decryptedValue);


// Insertar texto -> HTML
document.getElementById("aes-Cifrado").innerHTML = encryptedValue;
document.getElementById("aes-Original").innerHTML = decryptedValue;

