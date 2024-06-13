import Proxy from "./Proxy";
import ProxyAPI from "./ProxyAPI/ProxyAPI";
import GetRequestEvent from "./ProxyAPI/GetRequestEvent";

const BASIC_PARAMETERS = ''
export default class ProxyUser extends Proxy{

    constructor(error, message) {
        super(error, message)
        this.api = {
            config: new ProxyAPI(error, message, 'config'),
            booking: new ProxyAPI(error, message, 'booking'),
            presets: new ProxyAPI(error, message, 'presets'),
            reservations: new ProxyAPI(error, message, 'reservations')
        }

        //this.createEvents(this.api)
    }
}