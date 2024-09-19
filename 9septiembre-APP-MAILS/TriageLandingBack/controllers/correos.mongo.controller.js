// CONTROLLER MongoDB
import { connectDB } from "../data/mongodb.js";
import {User, Email} from "../data/mongodb.js";

connectDB();

export const getEmails = async (req, res, next) => {
    try {
        console.log("correos");
        // find() trae los eementos
        // populate() trae el documento vinculado según mi schema
        //  1er atributo: nombre de la propiedad
        // 2º atributo: campos que deseo obtener (omitiendo password)

        const emails = await Email.find().populate('remitente destinatario', 'username email');
        res.json(emails);
    }

    catch (e) {

    }


};

export const getEmailsById = async (req, res, next) => {
    try {
        console.log("Borrar email");
        
    } catch (e) {
        res.status(201).json({message:e.message});
    }
};

export const createEmail = async (req, res, next) => {
try {
    const {remitente, destinatario, asunto, contenido, isLeido} = req.body;

    const newEmail = new Email ({remitente, destinatario, asunto, contenido, isLeido});
    
    await newEmail.save();

} catch (e) {
    res.status(201).json({message:e.message});
}
};

export const deleteEmail = async (req, res, next) => {
    try {
        console.log("Borrar email");
        
    } catch (e) {
        res.status(201).json({message:e.message});
    }
};

export const updateEmail = async (req, res, next) => {
    try {
        console.log("Borrar email");
        
    } catch (e) {
        res.status(201).json({message:e.message});
    }
};

//  getEmails, getEmailsById, createEmail, deleteEmail, updateEmail