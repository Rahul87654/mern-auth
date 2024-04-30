export const errorhandler = ( error , Statuscode ) =>{
    const customerror = new Error();
    customerror.Statuscode = Statuscode;
    customerror.message = message;
    return customerror;
};