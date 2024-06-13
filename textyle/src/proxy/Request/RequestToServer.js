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
import Login from "../../Login";
import React from "react";
const onUnauthorized = () => {
    localStorage.setItem("token", null);
    localStorage.setItem("user_id", null);
    localStorage.setItem("status_user", "false");
    ReactDOM.render(
        <Login status={"Unauthorized"}/>,
        document.getElementById("root")
    );
}
const requestToServer = (parameters) => {
  const requestWithBody = (request) => {
    console.log(request);
    fetch(`${request.url}?${request.parameters}`, {
      method: request.method.toString(),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + request.token,
      },
      body: JSON.stringify(request.body),
    })
      .then(async (response) => {
          if (response.status === 401 || response.status === 403) {
              onUnauthorized()
              return;
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
        // request.dataReceivingFunction(jsonData);
        // request.messageReceivingFunction(jsonData);
        request.dataReceivingFunction(jsonData.data);
        request.messageReceivingFunction(jsonData.message);
      })
      .catch((error) => {
        request.error.setResetError(new Date().getTime());
        request.error.setError(error.message);
      });
  };
  const requestWithoutBody = (request) => {
    fetch(`${request.url}?${request.parameters}`, {
      method: request.method.toString(),
      headers: { Authorization: "Bearer " + request.token },
    })
      .then(async (response) => {
          if (response.status === 401 || response.status === 403) {
              onUnauthorized()
              return
          }
        if (!response.ok) {
          throw new Error(await response);
        }
        try {
          return response.json();
        } catch (e) {
          throw new Error(await e);
        }
      })
      .then((jsonData) => {
        // request.dataReceivingFunction(jsonData);
        // request.messageReceivingFunction(jsonData);
        request.dataReceivingFunction(jsonData.data);
        request.messageReceivingFunction(jsonData.message);
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
