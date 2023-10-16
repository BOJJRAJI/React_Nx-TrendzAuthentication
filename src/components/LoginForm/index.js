import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: ''}

  onSubmitForm = async e => {
    e.preventDefault()
    const {username, password} = this.state
    const user = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(user),
    }

    const response = await fetch(url, options)
    console.log(response)
    const data = await response.json()
    if (response.ok) {
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({error: data.error_msg})
    }
    console.log(data)
  }

  render() {
    const {username, password, error} = this.state
    return (
      <div className="bg-container">
        <div className="app-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website login"
            className="icon-image-small-devices"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
            className="login-image"
          />
          <form className="form-container" onSubmit={this.onSubmitForm}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website login"
              className="icon-image"
            />
            <div className="label-input-container">
              <label className="label-element" htmlFor="Username">
                USERNAME
              </label>
              <br />
              <input
                placeholder="Username"
                id="Username"
                type="text"
                className="input-element"
                value={username}
                onChange={e => this.setState({username: e.target.value})}
              />
            </div>
            <div className="label-input-container">
              <label className="label-element" htmlFor="Password">
                PASSWORD
              </label>
              <br />
              <input
                placeholder="Password"
                id="Password"
                type="password"
                className="input-element"
                value={password}
                onChange={e => this.setState({password: e.target.value})}
              />
            </div>
            <button className="Login-button" type="submit">
              Login
            </button>
            {error !== '' && (
              <div className="error-container">
                <p className="error-msg">*{error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginForm
