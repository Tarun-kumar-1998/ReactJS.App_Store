import './index.css'

const AppItem = props => {
  const {app} = props
  const {appName, imageUrl} = app
  console.log('tarjv')
  return (
    <li className="bg3">
      <img className="img" src={imageUrl} alt={appName} />
      <p>{appName}</p>
    </li>
  )
}
export default AppItem
