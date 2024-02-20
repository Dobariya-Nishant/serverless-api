import { APIGatewayProxyCallbackV2 } from "aws-lambda";
import { UserService } from "../services";

const service = new UserService();

export async function Signup(event: APIGatewayProxyCallbackV2) {
    return service.createUser();
}

export async function Login(event: APIGatewayProxyCallbackV2) {
    console.log(event)


    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless v3.0! Your function executed successfully!",
                input: event,
            },
            null,
            2
        ),
    };
}

export async function Verify(event: APIGatewayProxyCallbackV2) {
    console.log(event)


    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless v3.0! Your function executed successfully!",
                input: event,
            },
            null,
            2
        ),
    };
}

export async function Cart(event: APIGatewayProxyCallbackV2) {
    console.log(event)


    return {
        statusCode: 200,
        body: JSON.stringify(
            {
                message: "Go Serverless v3.0! Your function executed successfully!",
                input: event,
            },
            null,
            2
        ),
    };
}

