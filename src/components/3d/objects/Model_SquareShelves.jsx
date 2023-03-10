/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'

function Model_SquareShelves(props) {
  const { nodes, materials } = useGLTF('/models/squareShelves.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube016.geometry} material={materials.squareShelvesMat} />
      <mesh castShadow receiveShadow geometry={nodes.Cube016_1.geometry} material={materials.backMat} />
      <Html position={[0.3, 2, -2]}>
        <div className='object-html-marker' onClick={() => props.onClick('squareShelves')}>
          
        </div>
      </Html>
    </group>
  )
}

//useGLTF.preload('/models/squareShelves.glb')

export default Model_SquareShelves