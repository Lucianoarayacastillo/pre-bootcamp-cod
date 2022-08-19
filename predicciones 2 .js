function muestraInformaciónContacto() {
    var auntContactInfo = ["Paula", "Smith", "Calle Principal 1234", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}
//el console.log imprime  paula , Smith , Calle principal 1234 , st. lous , MO , 12345


/*

        diagrama en t
    Variable                |               Values
    auntContactInfo         | Paula, Smith, Calle Principal 1234, St. Louis, MO, 12345

*/

function muestraListaDeCompras() {
    var produce = ["manzanas", "naranjas"];
    var frozen = ["brócoli", "helado"];
    frozen.push("croqueta de papa");
    console.log(frozen);
}
//el console.log muestra "brócoli" ,"helado" , "croqueta de papa"
//variable                      values
//produce                 "manzanas", "naranjas"
//forzen               brócoli, helado  >  brócoli, helado, croqueta de papa 



var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

//el console.log muestra "Bambi" , "Beetlejuice" , "toy story" , "zoro"
//             variable                                 values
//            moovielibrary                     Bambi", "E.T.", "Toy Story"   >   "Bambi", "E.T.", "Toy Story" , "zoro"   >   "Bambi", "beetlejuice", "Toy Story" , "zoro"             