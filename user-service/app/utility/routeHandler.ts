import { APIGatewayProxyEventV2 } from "aws-lambda";
import Joi from "joi";
import { errorResponce } from "./responce";

function asyncRouteHandler(handler: Function, validator?: Joi.ObjectSchema<any>) {
    return async (event: APIGatewayProxyEventV2) => {
        try {

            event.body = JSON.parse(event.body);

            if (validator) {
                const { error } = validator.validate(event.body);

                if (error) {
                    return errorResponce(400, error);
                }
            }
             
            return await handler(event);
            
        } catch (error) {
            return errorResponce(500, error);
        }
    };
}

function routeHandler(handler: Function, validator?: Joi.ObjectSchema<any>) {
    return (event: APIGatewayProxyEventV2) => {
        try {

            event.body = JSON.parse(event.body);

            if (validator) {
                const { error } = validator.validate(event.body);

                if (error) {
                    return errorResponce(400, error);
                }
            }
             
            return handler(event);
            
        } catch (error) {
            return errorResponce(500, error);
        }
    };
}

export { asyncRouteHandler, routeHandler };
