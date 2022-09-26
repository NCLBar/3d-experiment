import './App.css';
import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { Earth } from './components';
import { CloudOverlay } from './components/cloudOverlay';
import { StarsBackdrop } from './components/stars';
import { PerspectiveCamera } from '@react-three/drei';
import DrawerAppBar from './components/Menu';

function App() {
  return (
    <>
      <DrawerAppBar/>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[6,3.5,0]} />
          <StarsBackdrop/>
          <Earth/>
        </Suspense>
      </Canvas>
    </>
  );
}

export default App;
