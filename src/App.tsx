import Scene from './Scene'

export default function App() {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden'
  }

  return (
    <div style={containerStyle}>
      <Scene />
    </div>
  )
}