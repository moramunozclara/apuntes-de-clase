import mongoose from "mongoose";
import {mongodbUri} from '../config/config.js';

// crear una conexión
const connectDB =  async () => {
    try {
        await mongoose.connect(mongodbUri);
        console.log("MongoDB conectaado correctamente ");

    }
    catch (e) {
        console.log("Error conectando a MongoDB: ", e.message);
        process.exit(1);

    }

}


// crear nuestro esqema
const addressSchema = new mongoose.Schema();

const userSchema = new mongoose.Schema({
    // username:String,
    // email:String

    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: addressSchema
});


// crear nuestros modelos 

 const emailSchema = new mongoose.Schema({
   remitente_id: {
        type: Number,
        required: true },
    destinatario_id: {
        type: Number,
        required: true},
    asunto: {
        type: String,
        required: true},
    contenido: {
        type: String},
    isLeido: {
        type: Boolean,
        default: false},
    createdAt: {
        type: Date,
        default: Date.now}
},
// opciones
// timestamps: agrega createdAt y updatedAt. (deletedAt no)
{ timestamps: true

});


const User = mongoose.model('User', userSchema);
const Email = mongoose.model('Email', emailSchema);

// esto creará la colección de users si no existen, pero en minusculas y plural

export {connectDB, User, Email}