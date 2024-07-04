// Request format
// {
//     url: '',
//     parameters: '',
//     method: '',
//     body: {}
//     isHavingBody: false
//     error: {setResetError}
// }
import ReactDOM from "react-dom";
import React from "react";
// const onUnauthorized = () => {
//     localStorage.setItem("token", null);
//     localStorage.setItem("user_id", null);
//     localStorage.setItem("status_user", "false");
//     ReactDOM.render(
//         <Login status={"Unauthorized"}/>,
//         document.getElementById("root")
//     );
// }
const requestToServer = (parameters) => {
  const requestWithBody = (request) => {
      // Create a FormData object and append key-value pairs
      const formData = new FormData();
      if (request.body && typeof request.body === 'object') {
          for (const key in request.body) {
              if (request.body.hasOwnProperty(key)) {
                  formData.append(key, request.body[key]);
              }
          }
      }

      const headers = {
          // Content-Type should not be set manually; it will be set automatically by the browser
          // when using FormData
      };


      console.log(request);
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
  const requestWithoutBody = (request) => {
    fetch(`${request.url}`, {
      method: request.method.toString(),
      headers: { Authorization: "Bearer " + request.token },
    })
      .then(async (response) => {
          if (response.status === 401 || response.status === 403 || response.status === 409) {
              //onUnauthorized()
              // TODO: How?
              console.log(response)
              return String((await response.json()).message);
          }
        if (!response.ok) {
          throw new Error(await response.json());
        }
        try {
          return response.json();
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
        request.error.setResetError(new Date().getTime());
        request.error.setError(error.message);
      });
  };

  if (parameters.isHavingBody()) requestWithBody(parameters);
  else requestWithoutBody(parameters);
};

export default requestToServer
