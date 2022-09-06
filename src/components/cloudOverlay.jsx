import React,{useRef, useState } from 'react';
import { useLoader, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { TextureLoader } from "three";
import CloudTexture from "../assets/textures/8k_earth_clouds.jpg";

export function CloudOverlay(props) {
  const [cloudMap] = useLoader(TextureLoader, [CloudTexture])
  const ref = useRef()
  const [followX, setFollowX] = useState(0);
  const [followY, setFollowY] = useState(0);
// eslint-disable-next-line no-restricted-globals
const width = screen.width;
// eslint-disable-next-line no-restricted-globals
const height = screen.height;
document.onmousemove = trackMouseMove;

function trackMouseMove(event) {
  var positionX = event.pageX;
  var positionY = event.pageY;
  setFollowX(positionX);
  setFollowY(positionY);
  console.log(positionX);
}

useFrame((state, delta) => 
  {ref.current.rotation.y += 
    followX === 0 ? -0.001 : (followX-(width/2))/100000;
   ref.current.rotation.z +=   
   followY === 0 ? 0 : (followY-(height/2))/100000;})  
      
    return <>
    <ambientLight intensity={0.5}/>
      <mesh ref={ref}>
        <sphereGeometry  args={[2.55, 32, 32]}/>
        <meshPhongMaterial map={cloudMap} opacity={0.07} depthWrite={true} transparent={true} side={THREE.DoubleSide}/>
      </mesh>
    </>;
}