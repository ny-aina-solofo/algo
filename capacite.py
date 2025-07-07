# programme qui convertit en octets, kilo-octets, mega-octets et giga-octets  un nombre donnée en bits



def capacite(n) :
	octets = ( 1 * n ) / 8   
	kilo_octets =  octets / 1024  
	mega_octets =  kilo_octets / 1024  
	giga_octets =  mega_octets / 1024 
	print( n," bits : ",octets,"o ,",kilo_octets,"ko ,",mega_octets,"mo ,",giga_octets,"go")
	return octets;


capacite(8192)


# TDD
if capacite(8) == 1 : 
   print("✔ Test Passed");
else :
   print("❌ Test Failed");

