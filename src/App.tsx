import Scene from './Scene'
import { BrowserRouter as Router } from 'react-router-dom';
export default function App() {
  const containerStyle = {
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden'
  }

  return (

    <Router basename="/DanteParadisoExhibit">
      <div style={containerStyle}>
      <Scene />
      </div>
    </Router>
    
  )
}