const Header = (props) => {
  return (
      <div className="HeaderWrapper">
        <div className="HeaderItemLogo">
          <a href="/" className="TextyleLogo">
            Textyle
          </a>
        </div>
        <div className="HeaderItemInfo">
          <a href="/about" className="HeaderLink">About us</a>
            {
                localStorage.getItem('username') === null ? (
            <a href="/auth" className="HeaderLink">Register</a>
                ) : (
                <a href="/account" className="HeaderLink">Account</a>
            )
            }
        </div>
      </div>
  )
}

export default Header;
