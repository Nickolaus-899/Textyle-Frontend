import GetRequestEvent from "./ProxyAPI/GetRequestEvent";

export default class Proxy{

    constructor(error, message){
        this.events = []
        this.error = error
        this.message = message
    }

    createEvents(api, basicParameters){
        this.events = []
        for (let i in api){
            this.events.push(new GetRequestEvent(api[i],
                basicParameters))
        }
    }

    getEvent(api){
        for (let i in this.events)
            if (this.events[i].api === api)
                return this.events[i]
    }
    reloadAllAPI(){
        for (let i in this.events){
            this.events[i].loadData()
        }
    }

    reloadAPI(api){
        this.getEvent(api).loadData()
    }
}