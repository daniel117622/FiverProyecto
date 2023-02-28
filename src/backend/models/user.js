import {db} from '../MongoClient'

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
}