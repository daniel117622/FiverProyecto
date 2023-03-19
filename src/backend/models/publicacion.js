const db = require('../MongoClient');

class Publicacion 
{
    constructor()
    {
        db.collection('publicaciones').aggregate([{ $group: { _id: null, maxId: { $max: "$_id" } } }]).toArray().then( r => 
            { 
                let newId = parseInt(r[0].maxId.slice(1));
                newId += 1;
                const zeroPad = (num, places) => String(num).padStart(places, '0');
                console.log( 'P'  + zeroPad(newId, 3 ));
                this._id = newId;
                this._READY = true;
            })
            this.titulo = null;
            this.id_usuario = null;
            this.descripcion = null;
            this.requerimentos = [];
            this.usuarios_postulados = [];
            this.etiquetas = [];
            this._READY = false;
    }

    load(user_id)
    {
        filter = {_id : user_id};
        db.collection('publicaciones').findOne(filter).then((doc) => {
            this._id = doc._id;
            this.id_usuario = doc.id_usuario;
            this.descripcion = doc.descripcion;
            this.requerimentos = doc.requerimentos;
            this.usuarios_postulados = doc.usuarios_postulados;
        }).catch( (err) => {console.log(err)} ); 
    }

    save() // Performs validation and stores this user into database
    {
        // If user ID exists it overwrites that user. Else it is added to the database
        // Checking if that user already exists
        if (this._READY == false) {  console.log("Not ready") ; return;  }

        db.collection('publicaciones').countDocuments({_id:this._id}).then((cnt) => {
            if (cnt == 0 && this._id != null) 
            {
                db.collection('publicaciones').insertOne(this);
            }
            else if (cnt == 1)
            {
                // Should we update or just return?
                db.collection('publicaciones').deleteOne({_id : this._id},{justOne:true}).then( (result) => {
                    db.collection('publicaciones').insertOne(this);
                    console.log("An existing user was found and was modified");
                } );

            }
        }).catch((err) => {console.log(err)})
    }

    postule_user( new_user )
    {
        if ( new_user.hasOwnProperty('id_usuario') && new_user.hasOwnProperty('estatus'))
        {
            this.publicaciones.push(new_user);
        } 
    }

    add_tag(tag)
    {
        this.etiquetas.push(tag);
    }


    static fetchAll()
    {
        // Returns a promise with the objects that where fetched
        console.log("Fetching...")
        var q = db.collection('usuario').find({}).toArray()
        return q;
    }

}

module.exports = Publicacion;