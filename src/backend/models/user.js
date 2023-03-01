const db = require('../MongoClient');

class Usuario {
    constructor()
    {
        _id = null;
        nombre = null;
        edad = null;
        id_proyectos = [];
        id_eventos = [];
        descripcion = null;
        credenciales = [{nombre : null , nivel: null}];
    }

    load(user_id)
    {
        filter = {_id : user_id};
        db.collection('usuario').findOne(filter).then((doc) => {
            this._id = doc.id;
            this.nombre = doc.nombre;
            this.edad = doc.edad;
        }).catch( (err) => {console.log(err)} ); 
    }

    static fetchAll()
    {
        // Returns a promise with the objects that where fetched
        console.log("Fetching...")
        var q = db.collection('usuario').find({}).toArray()
        return q;
    }
}

module.exports = Usuario;