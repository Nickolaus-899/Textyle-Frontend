import Proxy from "./Proxy";
import ProxyAPI from "./ProxyAPI/ProxyAPI";
import GetRequestEvent from "./ProxyAPI/GetRequestEvent";

const BASIC_PARAMETERS = ''
export default class ProxyUser extends Proxy{

    constructor(error, message) {
        super(error, message)
        this.api = {
            login: new ProxyAPI(error, message, 'login'),
            feed: new ProxyAPI(error, message, 'feed'),
            singUp: new ProxyAPI(error, message, 'singUp')
        }

        //this.createEvents(this.api)
    }
}