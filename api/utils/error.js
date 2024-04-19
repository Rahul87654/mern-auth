export const errorhandler = ( error , Statuscode ) =>{
    const error = new Error();
    error.Statuscode = Statuscode;
    error.message = message;
    return error;
};