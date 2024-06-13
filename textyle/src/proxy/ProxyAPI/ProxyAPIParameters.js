export default class ProxyAPIParameters{
    constructor() {
        this.dataReceivingFunction = () => {}
        this.messageReceivingFunction = () => {}
        this.parameters = ""
        this.body = null
    }

    static getBuilder() { return new Builder() }
}

class Builder{
    constructor() {
        this.apiParameters = new ProxyAPIParameters()
    }

    setDataReceivingFunction(dataReceivingFunction){
        this.apiParameters.dataReceivingFunction = dataReceivingFunction
        return this
    }

    setMessageReceivingFunction(messageReceivingFunction){
        this.apiParameters.messageReceivingFunction = messageReceivingFunction
        return this
    }

    setParameters(parameters){
        this.apiParameters.parameters = parameters
        return this
    }

    setBody(body){
        this.apiParameters.body = body
        return this
    }

    build(){
        return this.apiParameters
    }
}