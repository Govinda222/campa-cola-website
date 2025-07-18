// src/App.jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center } from '@react-three/drei';
import { Bottle } from './components/common/Bottle';
import Navbar from './components/layout/Navbar';

function App() {
  return (
    <main className="relative w-full h-screen bg-black">
      <Navbar />
      <Canvas camera={{ position: [0, 0, 15], fov: 75 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={1.5} position={[10, 10, 5]} />
          <Center>
            <Bottle />
          </Center>
          <OrbitControls />
        </Suspense>
      </Canvas>
    </main>
  );
}

export default App;