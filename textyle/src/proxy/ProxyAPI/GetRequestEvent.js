import ProxyAPIParameters from "./ProxyAPIParameters";

export default class GetRequestEvent{

    constructor(api, basic_parameters = ""){
        this.data = null
        this.listeners = []

        this.api = api
        this.basic_parameters = basic_parameters;
        this. additional_parameters = ""

        //this.isLoadingProcess
    }

    addListener(listener){
        const setData = (listener) => {
            if (this.data)
                listener(this.data)
            else this.loadData()
        }

        this.listeners.push(listener)
        setData(listener)
    }

    loadData(){
        const setData = (data) => {
            this.data = data
            this.setData()
        }

        const parseParameters = (basic_parameters, additional_parameters) => {
            if (basic_parameters !== "" && additional_parameters !== "")
                return basic_parameters + '&' + additional_parameters
            return basic_parameters + additional_parameters
        }

        const parameters = parseParameters(this.basic_parameters, this.additional_parameters)
        const apiParameters = ProxyAPIParameters.getBuilder().
            setDataReceivingFunction(setData).
            setParameters(parameters).build()
        this.api.get(apiParameters)
    }

    setData(){
        if (this.data)
            for (let listener in this.listeners)
                this.listeners[listener](this.data)
    }

    setAdditionalParameters(additional_parameters) {
        this.additional_parameters = additional_parameters
        this.loadData()
    }
}