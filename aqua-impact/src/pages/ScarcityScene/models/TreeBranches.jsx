import { useGLTF } from "@react-three/drei";

 /*const TreeBranches = (props) => {
   const { nodes, materials } = useGLTF("/models-3d/desert/TreeBranches.glb");
   return (
     <group
       {...props}
       dispose={null}
       position={[0, -23, 0]}
       rotation={[0, 0, Math.PI / 2]}
     >
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Line001.geometry}
         material={materials._Sparrow_2Material__79}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Line002.geometry}
         material={materials._Sparrow_2Material__79}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Line003.geometry}
         material={materials._Sparrow_2Material__79}
       />
       <mesh
         castShadow
         receiveShadow
         geometry={nodes.Line004.geometry}
         material={materials._Sparrow_2Material__79}
       />
     </group>
   );
 };*/

    export const Branch1 = (props) => {
    const { nodes, materials } = useGLTF("/models-3d/desert/TreeBranches.glb");
    return (
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line001.geometry}
        material={materials._Sparrow_2Material__79}
        {...props}
        dispose={null}
        scale={.5}
        rotation={[0, 0, -Math.PI / 2 ]} 
        />
    );
    };

    export const Branch2 = (props) => {
    const { nodes, materials } = useGLTF("/models-3d/desert/TreeBranches.glb");
    return (
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line002.geometry}
        material={materials._Sparrow_2Material__79}
        {...props}
        dispose={null}
        scale={.5}
        rotation={[Math.PI / 2 , Math.PI/4, 0]} 
        />
    );
    };

    export const Branch3 = (props) => {
    const { nodes, materials } = useGLTF("/models-3d/desert/TreeBranches.glb");
    return (
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line003.geometry}
        material={materials._Sparrow_2Material__79}
        {...props}
        dispose={null}
        scale={.5}
        rotation={[Math.PI / 2, Math.PI/4, 0 ]} 
        />
    );
    };

    export const Branch4 = (props) => {
    const { nodes, materials } = useGLTF("/models-3d/desert/TreeBranches.glb");
    return (
        <mesh
        castShadow
        receiveShadow
        geometry={nodes.Line004.geometry}
        material={materials._Sparrow_2Material__79}
        {...props}
        dispose={null}
        scale={.5}
        rotation={[Math.PI/2, -Math.PI/4, 0]} 
        />
    );
    };

useGLTF.preload("/models-3d/desert/TreeBranches.glb");
// export default {Branch1, Branch2, Branch3, Branch4};
