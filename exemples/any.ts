let valorAny: any = 3;
valorAny = 3;
valorAny = 'ola'
valorAny = true;

let valorString: string = 'teste'
valorString = valorAny 
let valorString2: string = 'String2'
valorString2 = valorAny

function somarString(string1: string, string2: string) {
    console.log(string1 + string2);
}

somarString(valorString, valorString2)
somarString(valorString, valorString2)
