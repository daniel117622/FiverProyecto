const db = require('../MongoClient');

class Usuario {
    constructor()
    {
        db.collection('usuario').aggregate([{ $group: { _id: null, maxId: { $max: "$_id" } } }]).toArray().then( r => 
            { 
                let newId = parseInt(r[0].maxId.slice(1));
                newId += 1;
                const zeroPad = (num, places) => String(num).padStart(places, '0');
                console.log( 'U'  + zeroPad(newId, 3 ));
                this._id = newId;
                this._READY = true;
            })
        this.nombre = null;
        this.apellido = null;
        this.correo = null;
        this.pass = null;
        this.profile_image = null;
        this.background_image = null;
        this.descripcion = null;
        this.publicaciones = [];
        this.preferencias = [];
        this.proyectos = [];
        this._READY = false;
    }

    load(user_id)
    {
        filter = {_id : user_id};
        db.collection('usuario').findOne(filter).then((doc) => {
            this._id = doc._id;
            this.nombre = doc.nombre;
            this.apellido = doc.apellido;
            this.correo = doc.apellido;
            this.pass = doc.pass;
            this.profile_image = null;
            this.background_image = null;
            this.descripcion = null; 
            this.publicaciones = doc.publicaciones;
            this.preferencias = doc.preferencias;
            this.proyectos = doc.proyectos;
        }).catch( (err) => {console.log(err)} ); 
    }

    

    add_pub( pub )
    {
        if ( pub.hasOwnProperty('id_publicacion'))
        {
            this.publicaciones.push(pub);
        }
    }

    add_info( profile_image , background_image, descripcion )
    {
        this.profile_image = profile_image;
        this.background_image = background_image;
        this.descripcion = descripcion;
    }

    add_preferene( pref )
    {
        this.preferencias.push(pref);
    }

    add_project(proj)
    {
        if ( proj.hasOwnProperty('id_publicacion') && proj.hasOwnProperty('estatus'))
        {
            this.publicaciones.push(proj);
        }   
    }

    save() // Performs validation and stores this user into database
    {
        // If user ID exists it overwrites that user. Else it is added to the database
        // Checking if that user already exists
        if (this._READY == false) {  console.log("Not ready") ; return;  }
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