import {toast} from "react-toastify";
import {MessageType} from "./MessageType.tsx";

export const displayMessage = (message, type) => {
    switch (type) {
        default:
        case MessageType.ERROR:
            toast.error(message, {
                position: 'bottom-right',
            });
            break;
        case MessageType.INFO:
            toast.info(message, {
                position: 'bottom-right',
            });
            break;
        case MessageType.SUCCESS:
            toast.success(message, {
                position: 'bottom-right',
            });
            break;
        case MessageType.WARN:
            toast.warn(message, {
                position: 'bottom-right',
            });
            break;
    }
}


export const saveStateMessage = (message, type, pageState) => {
    localStorage.setItem('notificationMessage', message);
    localStorage.setItem('notificationType', type.toString());
    localStorage.setItem('pageState', pageState)
}
