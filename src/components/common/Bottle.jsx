// src/components/common/Bottle.jsx
import React from 'react';
import { useGLTF } from '@react-three/drei';

export function Bottle(props) {
  const { scene } = useGLTF('/bottle.glb');
  return <primitive object={scene} scale={0.3} position={[0, -2.5, 0]} {...props} />;
}

useGLTF.preload('/bottle.glb');