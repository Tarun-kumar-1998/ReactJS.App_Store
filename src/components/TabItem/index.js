import './index.css'

const TabItem = props => {
  const {tab, idd, selectedTab} = props
  const clicked = () => {
    selectedTab(idd)
  }
  return (
    <li className="bg4">
      <button onClick={clicked} className="btn" type="button">
        {tab}
      </button>
    </li>
  )
}
export default TabItem
