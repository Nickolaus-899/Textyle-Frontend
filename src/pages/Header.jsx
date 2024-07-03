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
          <a href="/auth" className="HeaderLink">Account</a>
            <a href="/account" className="HeaderLink">Account(test)</a>
        </div>
      </div>
  )
}

export default Header;