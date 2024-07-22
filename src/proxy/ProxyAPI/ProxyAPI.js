import RequestToServer from "../Request/RequestToServer";
import RequestParameters from "../Request/RequestParameters";
import {RequestType} from "../Request/RequestType.tsx";
import requestToServer from "../Request/RequestToServer";

// const URL = 'http://127.0.0.1:8000/';
const URL = 'https://6cf3-188-130-155-182.ngrok-free.app/'
const API = ''

export default class ProxyAPI{
    constructor(error, message, directory) {
        this.error = error
        this.message = message
        this.directory = directory
    }

    get(apiParameters){
        const parameters = RequestParameters.getBuilder()
            .setUrl(URL + API + this.directory)
            .setToken(localStorage.getItem('token'))
            .setMethod(RequestType.GET)
            .setAPIParameters(apiParameters)
            .setError(this.error)
            .setMessage(this.message).build()

        requestToServer(parameters)
    }

    post(apiParameters){
        const parameters = RequestParameters.getBuilder()
            .setUrl(URL + API + this.directory)
            .setToken(localStorage.getItem('token'))
            .setMethod(RequestType.POST)
            .setAPIParameters(apiParameters)
            .setError(this.error)
            .setMessage(this.message).build()

        requestToServer(parameters)
    }

    delete(apiParameters){
        const parameters = RequestParameters.getBuilder()
            .setUrl(URL + API + this.directory)
            .setToken(localStorage.getItem('token'))
            .setMethod(RequestType.DELETE)
            .setAPIParameters(apiParameters)
            .setError(this.error)
            .setMessage(this.message).build()

        requestToServer(parameters)
    }
}