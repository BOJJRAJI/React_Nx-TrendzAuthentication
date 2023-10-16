import './index.css'

const Header = () => (
  <>
    <div className="large-screen-nav-bar">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="large-header-logo-icon"
      />
      <ul className="items-container">
        <li className="home-text">Home</li>
        <li className="home-text">Products</li>
        <li className="home-text">Cart</li>
        <li>
          <button className="logout" type="button">
            Logout
          </button>
        </li>
      </ul>
    </div>
    <div className="small-logo-logout-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website login"
        className="small-header-logo-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png "
        alt="nav logout"
        className="logout-icon"
      />
    </div>
    <div className="home-cart-products-small-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png "
        alt="nav home"
        className="logout-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
        alt="nav products"
        className="logout-icon"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        alt="nav cart"
        className="logout-icon"
      />
    </div>
  </>
)

export default Header
