import { useGLTF } from '@react-three/drei'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ScarEarth = (props) => {
  const { nodes, materials } = useGLTF('/models-3d/desert/scarEarth.glb')

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/scarScene");
  };

  const handlePointerOver = () => {
    document.body.style.cursor = 'pointer';
  };
  
  const handlePointerOut = () => {
    document.body.style.cursor = 'none';
  };

  return (
    <group {...props} dispose={null}>
      <group scale={1.128}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={materials['Scene_-_Root']}
          position={[0, 0, 0]}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desert.geometry}
        material={materials.Plane}
        position={[1.04, .4, 0]}
        rotation={[-0.137, -0.15, -1.18]}
        scale={.0001}
        onClick={handleButtonClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desert001.geometry}
        material={materials['Plane.001']}
        position={[0.207, 0.778, -0.777]}
        rotation={[0.087, 1.243, -0.826]}
        scale={.0001}
        onClick={handleButtonClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desert002.geometry}
        material={materials['Plane.002']}
        position={[0.357, -0.174, 1.04]}
        rotation={[-0.859, -0.879, -2.5]}
        scale={.0001}
        onClick={handleButtonClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desert003.geometry}
        material={materials['Plane.003']}
        position={[-0.7, -0.5, -0.71]}
        rotation={[-2.6, 0.6, 0.8]}
        scale={0.0001}
        onClick={handleButtonClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Desert004.geometry}
        material={materials['Plane.004']}
        position={[-0.325, 0.65, 0.845]}
        rotation={[1.15, -0.75, 0.3]}
        scale={.0001}
        onClick={handleButtonClick}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
      />
    </group>
  )
}

export default ScarEarth
useGLTF.preload('/models-3d/desert/scarEarth.glb')