import { injectable } from "inversify";
import { Hello } from "../model/hello";
import HttpStatusCode from "@/utils/constants";
import { CustomResponse } from "@/utils/custom-response";

export interface IHelloRemote {
    getDataForServerSideRendering: () => Promise<CustomResponse<Hello>>
    getDataForClientSideRendering: () => Hello
}

// @injectable is a way of telling the compiler that we want to inject this class as a dependency
@injectable()
export class HelloRemote implements IHelloRemote {
    getDataForServerSideRendering = async (): Promise<CustomResponse<Hello>> => {
        // Interpolating API URL
        const url: string = `${process.env.NEXT_PUBLIC_API_URL}/hello`
        // Make an API Request into API
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            cache: "no-cache"
        })
        // Get the response in JSON format
        const result = await response.json()
        // Get "status" from the result
        const status = result['status']
        // Get "message" from the result
        const message = result['message']
        // Get "data" from the result
        const data = result['data']
        // Check response status code
        if (response.status == HttpStatusCode.OK) {
            const model = new Hello({
                message: data
            })
            // RETURN THE RESULT
            return new CustomResponse<Hello>({
                status, 
                message, 
                data: model
            })
        }
        
        return new CustomResponse<Hello>({
            status,
            message
        })
    }
    
    getDataForClientSideRendering = (): Hello => {
        return new Hello({
            message: "Hello Client Side!"
        })
    }
}