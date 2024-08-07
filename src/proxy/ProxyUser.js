import Proxy from "./Proxy";
import ProxyAPI from "./ProxyAPI/ProxyAPI";
import GetRequestEvent from "./ProxyAPI/GetRequestEvent";

const BASIC_PARAMETERS = ''
export default class ProxyUser extends Proxy{

    constructor(error, message) {
        super(error, message)
        ProxyUser.Field = this

        this.api = {
            login: new ProxyAPI(error, message, 'login'),
            feed: new ProxyAPI(error, message, 'feed'),
            singUp: new ProxyAPI(error, message, 'sign_up'),
            history: new ProxyAPI(error, message, 'history'),
            clear: new ProxyAPI(error, message, 'clear')
        }

        //this.createEvents(this.api)
    }
    static Field;
    static proxy() {
        return this.Field;
    }
}