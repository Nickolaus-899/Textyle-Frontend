const Header = (props) => {
  return (
      <div className="HeaderWrapper">
        <div className="HeaderItemLogo">
          <a href="/" className="TextyleLogo">
            Textyle
          </a>
        </div>
        <div className="HeaderItemInfo">
          <a href="/contact" className="HeaderLink">Contact us</a>
          <a href="/account" className="HeaderLink">Account</a>
        </div>
      </div>
  )
}

export default Header;
