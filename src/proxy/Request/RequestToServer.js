import ReactDOM from "react-dom";
import React from "react";
import { BodyType } from "../ProxyAPI/BodyType.tsx";
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
                console.log(response);
                const errorMessage = (await response.json()).message;
                return Promise.reject(new Error(errorMessage));
            }

            if (!response.ok) {
                const error = await response.json();
                return Promise.reject(new Error(error.message || 'Request failed'));
            }

            return response.json();
        })
        .then((jsonData) => {
            if (typeof jsonData === 'string') {
                dataReceivingFunction(jsonData);
            } else {
                dataReceivingFunction(jsonData);
                messageReceivingFunction(jsonData.message);
            }
        })
        .catch((err) => {
            console.log(err)
            //error.setResetError(new Date().getTime());
            //error.setError(err.message);
        });
};
    

const requestWithBody = (request) => {
      // Create a FormData object and append key-value pairs
      const formData = parseJsonToForm(request.body)

      const headers = {
          // Content-Type should not be set manually; it will be set automatically by the browser
          // when using FormData
      };


      console.log(request);
      return;
      fetch(request.url, {
            method: request.method.toString(),
            headers: headers,
            body: formData,
            mode: 'cors'
        })
            .then(async (response) => {
                if (response.status === 401 || response.status === 403 || response.status === 409) {
                    // Handle unauthorized responses
                    // TODO: How?
                    console.log(response)
                    return String((await response.json()).message);
                }
                console.log(response)
                if (!response.ok) {
                    throw new Error(await response.json());
                }
                try {
                    return await response.json();
                } catch (e) {
                    throw new Error(await e);
                }
            })
            .then((jsonData) => {
                if (typeof jsonData === 'string') {
                    request.dataReceivingFunction(jsonData);
                } else {
                    request.dataReceivingFunction(jsonData);
                    request.messageReceivingFunction(jsonData.message);
                }
            })
            .catch((error) => {
                console.log(error);
                // request.error.setResetError(new Date().getTime());
                // request.error.setError(error.message);
            });
  };
//   const requestWithoutBody = (request) => {
//     fetch(`${request.url}`, {
//       method: request.method.toString(),
//       headers: { Authorization: "Bearer " + request.token },
//     })
//       .then(async (response) => {
//           if (response.status === 401 || response.status === 403 || response.status === 409) {
//               //onUnauthorized()
//               // TODO: How?
//               console.log(response)
//               return String((await response.json()).message);
//           }
//         if (!response.ok) {
//           throw new Error(await response.json());
//         }
//         try {
//           return response.json();
//         } catch (e) {
//           throw new Error(await e);
//         }
//       })
//       .then((jsonData) => {
//           if (typeof jsonData === 'string') {
//               request.dataReceivingFunction(jsonData);
//           } else {
//               request.dataReceivingFunction(jsonData);
//               request.messageReceivingFunction(jsonData.message);
//           }
//       })
//       .catch((error) => {
//         request.error.setResetError(new Date().getTime());
//         request.error.setError(error.message);
//       });
//   };

//   if (parameters.isHavingBody()) requestWithBody(parameters);
//   else requestWithoutBody(parameters);
export default requestToServer
