

export function getLastId(array){



    // reduce nuestro array al id más alto
    const lastId = array.reduce( (max, obj) => (obj.id > max ? obj.id : max) , 0 );

    // const id = array.map( obj => obj.id);
    // const lastId = Math.max(...ids);

    // array.map( item => {
        // obtener el id de item
        // preguntar si el id es mayor > a lastId
    // })



    return lastId;
}

