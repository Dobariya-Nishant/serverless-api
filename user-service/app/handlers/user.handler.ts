import { APIGatewayProxyEventV2 } from "aws-lambda";
import { UserService } from "../services";
import { errorResponce } from "../utility/responce";
import { container } from "tsyringe";
import { asyncRouteHandler } from "../utility/routeHandler";
import { sigupSchema, loginSchema } from "../validators";

const userService = container.resolve(UserService);

const signup = asyncRouteHandler((event: APIGatewayProxyEventV2) => {
    const { name, email, password } = event.body as any;
    return userService.createUser(email, password);
}, sigupSchema);

const login = asyncRouteHandler((event: APIGatewayProxyEventV2) => {
    const { email, password } = event.body as any;
    return userService.userLogin();
}, loginSchema);

const verify = asyncRouteHandler((event: APIGatewayProxyEventV2) => {
    return userService.userVerify();
});

const profile = asyncRouteHandler((event: APIGatewayProxyEventV2) => {

    const httpMethod = event.requestContext.http.method.toLowerCase();

    switch (httpMethod) {
        case "get":
            return userService.getProfile();
        case "post":
            return userService.createProfile();
        case "put":
            return userService.updateProfile();
        default:
            return errorResponce(404, "requested method is not supported");
    }
});

const cart = asyncRouteHandler((event: APIGatewayProxyEventV2) => {

    const httpMethod = event.requestContext.http.method.toLowerCase();

    switch (httpMethod) {
        case "get":
            return userService.getCart();
        case "post":
            return userService.createCart();
        case "put":
            return userService.updateCart();
        default:
            return errorResponce(404, "requested method is not supported");
    }
});

const payment = asyncRouteHandler((event: APIGatewayProxyEventV2) => {

    const httpMethod = event.requestContext.http.method.toLowerCase();

    switch (httpMethod) {
        case "get":
            return userService.getPaymentMethod();
        case "post":
            return userService.createPaymentMethod();
        case "put":
            return userService.updatePaymentMethod();
        default:
            return errorResponce(404, "requested method is not supported");
    }
});

export { signup, login, verify, profile, cart, payment };

