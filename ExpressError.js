//making custom error class
//extends the error class of express
class ExpressError extends Error {
    constructor(statusCode, message) {
        super();
        this.message=message;
        this.statusCode = statusCode;
    }
}

module.exports = ExpressError;
