// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onLeftNav = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onRightNav = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="config-controller-con">
          <h1 className="layout-heading">Layout</h1>
          <input
            type="checkbox"
            className="checkbox"
            id="content"
            onChange={onContent}
            checked={showContent}
          />
          <label htmlFor="content" className="label">
            Content
          </label>
          <br />
          <input
            type="checkbox"
            className="checkbox"
            id="left-nav"
            onChange={onLeftNav}
            checked={showLeftNavbar}
          />
          <label htmlFor="left-nav" className="label">
            Left Navbar
          </label>
          <br />
          <input
            type="checkbox"
            className="checkbox"
            id="right-nav"
            onChange={onRightNav}
            checked={showRightNavbar}
          />
          <label htmlFor="right-nav" className="label">
            Right Navbar
          </label>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
