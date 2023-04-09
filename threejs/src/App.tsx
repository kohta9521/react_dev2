import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei';

function App() {

  return (
    <div className="w-full h-screen">
      <Canvas> 
        {/* <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 8, 5]} /> */}
        <mesh>
          <boxGeometry args={[2, 2, 2]} />
          <meshStandardMaterial color="green" />
        </mesh>
        <Box>
          <meshStandardMaterial color="red" />
        </Box>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  )
}

export default App
