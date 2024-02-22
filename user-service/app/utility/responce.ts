function sendResponce(statusCode: number = 200, message: string, data: unknown = null) {
    return {
        statusCode,
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
            message,
            data,
        }),
    };
}

function successResponce(data: object) {
    return sendResponce(200, "success", data);
}

function errorResponce(code: number = 1000, error: unknown) {
    if(Array.isArray(error)){
        const errorObject = error[0].constraints;
        const errorMessage = errorObject[Object.keys(errorObject)[0]]  || "Error Occured";
        return sendResponce(code, errorMessage, error);
    }
    return sendResponce(code, `${error}`, error);
}

export { sendResponce, successResponce, errorResponce };