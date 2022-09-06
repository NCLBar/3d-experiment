import React from 'react';
import { Stars } from "@react-three/drei";

export function StarsBackdrop(props){
 
  return (<Stars radius={300} depth={60} factor={4} count={5000}/>)
}