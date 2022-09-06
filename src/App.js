import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './components';
import { CloudOverlay } from './components/cloudOverlay';
import { StarsBackdrop } from './components/stars';
import { PerspectiveCamera } from '@react-three/drei';


function App() {
  return (
    <>
      <div >Hello</div>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[6,3.5,0]} />
          <StarsBackdrop/>
          <CloudOverlay/>
          <Earth/>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
