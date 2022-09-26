import React,{useRef, useState } from 'react';
import { useLoader, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import EarthNightMap from "../assets/textures/8k_earth_nightmap.jpg";
import SpecularMap from "../assets/textures/8k_earth_clouds.jpg";
import { OrbitControls } from "@react-three/drei";

export function Earth(props) {
  const [map,  specMap] = useLoader(TextureLoader, [EarthNightMap, SpecularMap])
  const ref = useRef()
  const [followX, setFollowX] = useState(0);
  const [followY, setFollowY] = useState(0);
  // eslint-disable-next-line no-restricted-globals
  const width = screen.width;
  // eslint-disable-next-line no-restricted-globals
  const height = screen.height;
  document.onmousemove = trackMouseMove;

  function trackMouseMove(event) {
    var positionX = event.screenX;
    var positionY = event.pageY;
    setFollowX(positionX);
    setFollowY(positionY);
  }

  useFrame((state, delta) => 
    {ref.current.rotation.y += 
      followX === 0 ? -0.001 : (followX - (width/2))/70000;
     ref.current.rotation.z +=   
       followY === 0 ? 0 : ((height/2) - followY)/250000;
    })  
    
    return <>
    <ambientLight intensity={5}/>
      <mesh ref={ref} >
        <sphereGeometry args={[2.5, 32, 32]} />
        <meshPhongMaterial specMap={specMap}/>
        <meshStandardMaterial map={map}/>
        <OrbitControls />
      </mesh>
    </>;
}