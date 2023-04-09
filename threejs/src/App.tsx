import './App.css'
import { Canvas } from '@react-three/fiber'

function App() {

  return (
    <div className="w-full h-screen">
      <Canvas> 
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 8, 5]} />
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="green" />
        </mesh>
      </Canvas>
    </div>
  )
}

export default App
