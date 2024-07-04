import userImg from './../../images/user.svg'


const AccountInfo = (props) => {
    const exitHandler = (e) => {
        localStorage.removeItem('token')
        localStorage.removeItem('username')

        window.location.href = "/"
    }
    const deleteHandler = (e) => { }
    const clearHistoryHandler = (e) => { }

  return (
      <div className="UserInfoWrapper">
          <div className="userIcon">
              <img src={userImg} alt={"User Image"}/>
          </div>

          <p>Привет, {localStorage.getItem('username')}!</p>

          {/*<a className="MyButton" href="/change">*/}
          {/*    Change password*/}
          {/*</a>*/}

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