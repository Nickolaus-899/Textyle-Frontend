import ReactDOM from "react-dom";
import React from "react";
import { BodyType } from "../ProxyAPI/BodyType.tsx";
import {MessageType} from "../errors/MessageType.tsx";
// const onUnauthorized = () => {
//     localStorage.setItem("token", null);
//     localStorage.setItem("user_id", null);
//     localStorage.setItem("status_user", "false");
//     ReactDOM.render(
//         <Login status={"Unauthorized"}/>,
//         document.getElementById("root")
//     );
// }

const parseJsonToForm = (body) => {
    const formData = new FormData();
    if (body && typeof body === 'object') {
        Object.keys(body).forEach((key) => {
            formData.append(key, body[key]);
        });
    } 
    return formData;
}

const requestToServer = (request) => {
    const {
        url,
        method,
        token,
        body,
        bodyType,
        dataReceivingFunction,
        messageReceivingFunction,
        error,
    } = request;
    const headers = {};

    const fetchOptions = {
        method: method.toString(),
        headers: headers,
        mode: 'cors',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    if (bodyType === BodyType.JSON) {
        headers['Content-Type'] = 'application/json';
    } else if (bodyType === BodyType.FORM_DATA) {
        // Content-Type should not be set manually; it will be set automatically by the browser
        // when using FormData
    }
    
    if (request.isHavingBody()) {
        if (bodyType === BodyType.JSON) {
            fetchOptions.body = JSON.stringify(body);
        } else if (bodyType === BodyType.FORM_DATA) {
            fetchOptions.body = parseJsonToForm(body);
        }
    }

    console.log(url)
    console.log(fetchOptions)
    fetch(url, fetchOptions)
        .then(async (response) => {
            if ([401, 403, 409].includes(response.status)) {
                console.log("in response:", response);

                let errorMessage = ""

                switch (response.status) {
                    case 401:
                        errorMessage = "Unauthorized";
                        break
                    case 403:
                        errorMessage = "Forbidden to accomplish";
                        break
                    case 409:
                        errorMessage = "Conflict"
                        break
                    default:
                        errorMessage = "Some error with authorization"
                        break
                }

                console.log(errorMessage)
                // const errorMessage = (await response.json()).message;
                return Promise.reject(new Error(errorMessage));
            }

            if (!response.ok) {
                const error = await response.json();
                return Promise.reject(new Error(error.message || 'Request failed'));
            }

            console.log('response before json:', response)

            if (fetchOptions.method === 'DELETE') {
                return response;
            }
            return response.json();
        })
        .then((jsonData) => {
            console.log('In response:', jsonData)
            dataReceivingFunction(jsonData);
            messageReceivingFunction("Done successfully", MessageType.SUCCESS);
        })
        .catch((err) => {
            console.log("in error:", err);
            messageReceivingFunction(err.message, MessageType.ERROR);
            //error.setResetError(new Date().getTime());
            //error.setError(err.message);
        });
};
    


export default requestToServer
