var CodigoSala = prompt("Ingresa el código de la sala");

if (CodigoSala==null) {
    nuevo_codigo = makeid(5)
    console.log(nuevo_codigo);

    var data = {
        JuegoID: nuevo_codigo,
        MovimientoID: null,
        Tablero: null,
        Posicion: null,
        Jugador: null,
    };

    Sheetsu.write("c68466cdb55f", data, {}, function (escrito) {
    console.log(escrito);
    });


}else{
    //Buscar CodigoSala en db
    var query = {
        JuegoID: CodigoSala,
    };
    Sheetsu.read("c68466cdb55f", {
      search: query
    }, result);

    function result(data){
        if(data.isEmpty){
            console.log("No se encontró la sala :/");
        }else{
            console.log("Resultado con query");
            console.log(data);
        }
    }
}

function makeid(length) {
    var id = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        id += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return id;
 }
 

var gameID = 
Sheetsu.read("c68466cdb55f/", {}, successFunc);

function successFunc(data) {
    console.log(data);
    ans = data;
    console.log(ans["0"].JuegoID);
}
