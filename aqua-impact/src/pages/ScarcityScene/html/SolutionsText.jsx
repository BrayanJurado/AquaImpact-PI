import { Text3D } from "@react-three/drei";

const SolutionsText = () => {
  return (
    <>
      <mesh position={[31, 45.6, 11]}>
        <boxGeometry args={[35, 15, 1]} />
        <meshStandardMaterial />
      </mesh>
      <Text3D
        position={[47, 50, 10]}
        rotation={[0, Math.PI, 0]}
        font="/fonts/Montserrat.json"
        bevelEnabled
        bevelSize={.1}
        bevelThickness={.1}
        height={.2}
        lineHeight={0.75}
        letterSpacing={0.05}
        size={1.2}
      >
        {`Tratar y reutilizar el agua usada \n en actividades domésticas \n como lavar ropa o platos para riego \n de jardines y limpieza.\n Es una medida accesible que reduce \n el desperdicio de agua potable.`}
        <meshStandardMaterial color="#3f92dd" />
      </Text3D>

      <mesh position={[33, 23, 11]}>
        <boxGeometry args={[36, 19, 1]} />
        <meshStandardMaterial />
      </mesh>
      <Text3D
        position={[49, 30, 10]}
        rotation={[0, Math.PI, 0]}
        font="/fonts/Montserrat.json"
        bevelEnabled
        bevelSize={.1}
        bevelThickness={.1}
        height={.2}
        lineHeight={0.75}
        letterSpacing={0.05}
        size={1.2}
      >
        {`Implementar plantas de desalación \n para convertir agua de mar \n en agua potable puede ser \n una solución eficaz en regiones \n costeras con escasez de agua dulce. \n Aunque requiere energía, el avance \n en tecnologías de energía renovable \n está haciendo que este método \n sea más accesible y sostenible.`}
        <meshStandardMaterial color="#3f92dd" />
      </Text3D>

      <mesh position={[-30.4, 47.5, 11]}>
        <boxGeometry args={[42, 10, 1]} />
        <meshStandardMaterial />
      </mesh>
      <Text3D
        position={[-10.5, 50, 10]}
        rotation={[0, Math.PI, 0]}
        font="/fonts/Montserrat.json"
        bevelEnabled
        bevelSize={.1}
        bevelThickness={.1}
        height={.2}
        lineHeight={0.75}
        letterSpacing={0.05}
        size={1.2}
      >
        {`Usar técnicas como el riego por \n goteo y la captación de agua de lluvia. \n Estas prácticas maximizan el uso \n del agua en cultivos y minimizan las pérdidas.`}
        <meshStandardMaterial color="#3f92dd" />
      </Text3D>

      <mesh position={[-34, 26.5, 11]}>
        <boxGeometry args={[35, 12, 1]} />
        <meshStandardMaterial />
      </mesh>

      <Text3D
        position={[-18, 30, 10]}
        rotation={[0, Math.PI, 0]}
        font="/fonts/Montserrat.json"
        bevelEnabled
        bevelSize={.1}
        bevelThickness={.1}
        height={.2}
        lineHeight={0.75}
        letterSpacing={0.05}
        size={1.2}
      >
        {`Invertir en infraestructura para \n reparar fugas en redes \n de distribución de agua. \n Implementar sistemas inteligentes \n para detectar y prevenir pérdidas.`}
        <meshStandardMaterial color="#3f92dd" />
      </Text3D>

    </>
  );
};

export default SolutionsText;
