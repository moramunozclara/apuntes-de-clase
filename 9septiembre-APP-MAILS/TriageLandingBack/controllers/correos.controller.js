import {inbox} from '../data/mockData.js';

import mysqldb from '../data/mysqldb.js';

export const getAllCorreos = async (req, res) => {

    const query = 'SELECT * FROM inbox ';
    const [filas] = await mysqldb.query(query);
    console.log(filas);


    res.status(200).json({
        msg:"Lista de correos obtenida con éxito",
        success: "ok",
        data: filas
    })
}


export default mysqldb