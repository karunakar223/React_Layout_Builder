// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="body-container">
          {showLeftNavbar && (
            <ul className="left-nav-menu">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <li className="item">Item 1</li>
              <li className="item">Item 2</li>
              <li className="item">Item 3</li>
              <li className="item">Item 4</li>
            </ul>
          )}

          {showContent && (
            <div className="content-container">
              <h1 className="center-heading">Content</h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          )}

          {showRightNavbar && (
            <div className="right-nav">
              <h1 className="right-heading">Right Navbar</h1>
              <p className="add">Ad 1</p>
              <p className="add">Ad 2</p>
            </div>
          )}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
