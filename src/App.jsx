import { Canvas, useLoader } from '@react-three/fiber'
import { useGLTF, OrbitControls} from '@react-three/drei'
function App() {
  const { scene } = useGLTF('./scene.gltf')

  return (
    <Canvas style={{height: window.innerHeight, width: window.innerWidth}}
      camera={{position: [10, 10, 10]}}
    >
      <OrbitControls/>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <primitive 
        object={scene}
      />
    </Canvas>
  )
}

export default App
