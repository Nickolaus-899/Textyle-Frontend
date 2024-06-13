import {RequestType} from "./RequestType.tsx";


export default class RequestParameters{
    constructor() {
        this.dataReceivingFunction = () => {}
        this.messageReceivingFunction = () => {}
        this.url = ""
        this.token = ""
        this.method = RequestType.GET
        this.parameters = ""
        this.body = null
        this.error = {
            setError: () => {},
            setResetError: () => {}
        }
        this.message  = {
            setMessage: () => {},
            setResetMessage: () => {}
        }
    }

    isHavingBody(){ return this.body !== null }

    static getBuilder() { return new Builder() }
}

class Builder{
    constructor() {
        this.requestParameters = new RequestParameters()
    }

    setUrl(url){
        this.requestParameters.url = url
        return this
    }

    setToken(token){
        this.requestParameters.token = token
        return this
    }

    setMethod(method){
        this.requestParameters.method = method
        return this
    }

    setAPIParameters(apiParameters){
        this.requestParameters.dataReceivingFunction = apiParameters.dataReceivingFunction
        this.requestParameters.messageReceivingFunction = apiParameters.messageReceivingFunction
        this.requestParameters.parameters = apiParameters.parameters
        this.requestParameters.body = apiParameters.body
        return this
    }

    setError(error){
        this.requestParameters.error = error
        return this
    }

    setMessage(message){
        this.requestParameters.message = message
        return this
    }

    build(){
        return this.requestParameters
    }
}