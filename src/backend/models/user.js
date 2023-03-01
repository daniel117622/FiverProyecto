const db = require('../MongoClient');

class Usuario {
    constructor()
    {
        this._id = null;
        this.nombre = null;
        this.edad = null;
        this.id_proyectos = [];
        this.id_eventos = [];
        this.descripcion = null;
        this.credenciales = [{nombre : null , nivel: null}];
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

    save() // Performs validation and stores this user into database
    {
        // If user ID exists it overwrites that user. Else it is added to the database
        // Checking if that user already exists
        db.collection('usuario').countDocuments({_id:this._id}).then((cnt) => {
            if (cnt == 0 && this._id != null) 
            {
                db.collection('usuario').insertOne(this);
            }
            else if (cnt == 1)
            {
                // Should we update or just return?
                db.collection('usuario').deleteOne({_id : this._id},{justOne:true}).then( (result) => {
                    db.collection('usuario').insertOne(this);
                    console.log("An existing user was found and was modified");
                } );

            }
        }).catch((err) => {console.log(err)})
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