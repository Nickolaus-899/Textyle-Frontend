import userImg from './../../images/user.svg'
import {displayMessage, saveStateMessage} from "../../proxy/errors/ErrorDisplay";
import {MessageType} from "../../proxy/errors/MessageType.tsx";
import ProxyAPIParameters from "../../proxy/ProxyAPI/ProxyAPIParameters";
import ProxyUser from "../../proxy/ProxyUser";


const AccountInfo = (props) => {
    const exitHandler = (e) => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');

        saveStateMessage('Successfully exited', MessageType.SUCCESS, "0")
        // displayMessage('Successfully exited', MessageType.SUCCESS)

        window.location.href = "/"

    }
    const deleteHandler = (e) => {

    }

    const clearHistoryHandler = (e) => {
        const apiParameters = ProxyAPIParameters.getBuilder()
            .setDataReceivingFunction(clearHistoryReceiver)
            .setMessageReceivingFunction(clearHistoryMsg)
            .build();

        ProxyUser.proxy().api.clear.delete(apiParameters);
    }

    const clearHistoryReceiver = (data) => {
        props.setHistory([])
    }

    const clearHistoryMsg = (msg) => {
        displayMessage(msg, MessageType.INFO)
    }

  return (
      <div className="UserInfoWrapper">
          <div className="userIcon">
              <img src={userImg} alt={"User Image"}/>
          </div>

          <p>Hello, {localStorage.getItem('username')}!</p>

          <button className="MyButton" onClick={() => (
              exitHandler()
          )}>
              Exit
          </button>

          <button className="MyButton" onClick={() => (
              deleteHandler()
          )}>
              Delete account
          </button>

          <button className="MyButton" onClick={() => (
              clearHistoryHandler()
          )}>
              Clear history
          </button>
      </div>
  )
}

export default AccountInfo;