/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, Html } from '@react-three/drei'

function Model_Shelves(props) {
  const { nodes, materials } = useGLTF('/models/shelves.glb')
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.Cube008.geometry} material={materials.wallShelfMatGrey} />
      <mesh castShadow receiveShadow geometry={nodes.Cube008_1.geometry} material={materials['chipboardMat.001']} />
      <Html position={[-2.2, 2, -1.3]}>
        <div className='object-html-marker' onClick={() => props.onClick('shelves')}>
          
        </div>
      </Html>
    </group>
  )
}

//useGLTF.preload('/models/shelves.glb')

export default Model_Shelves
