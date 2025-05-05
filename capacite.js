/* programme qui convertit en octets, kilo-octets, mega-octets et giga-octets  un nombre donnée en bits */


if (capacite(8) === 1 ) 
{
   console.log("✔ Test Passed");
} else {
   console.error("❌ Test Failed");
}


function capacite(n) {
	let octets = ( 1 * n ) / 8  ; 
	let kilo_octets =  octets / 1024  ;
	let mega_octets =  kilo_octets / 1024 ; 
	let giga_octets =  mega_octets / 1024 ;
	console.log(` ${n} bits : ${octets} o , ${kilo_octets} ko , ${mega_octets} mo , ${giga_octets} go `);
	return octets;
}

capacite(8192)



