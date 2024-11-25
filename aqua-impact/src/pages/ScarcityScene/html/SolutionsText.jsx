import { Text3D } from "@react-three/drei";

const SolutionsText = () => {
  return (
    <>
      <Text3D
        position={[15, 50, -100]}
        font="/fonts/Montserrat.json"
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={.1}
        height={0.1}
        lineHeight={.75}
        letterSpacing={0.05}
        size={1.2}
      >
        {`Tratar y reutilizar el agua usada \n en actividades domésticas \n como lavar ropa o platos para riego \n de jardines y limpieza.\n Es una medida accesible que reduce \n el desperdicio de agua potable.`}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        position={[-50, 50, -100]}
        font="/fonts/Montserrat.json"
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.1}
        height={.1}
        lineHeight={0.75}
        letterSpacing={0.05}
        size={1.2}
      >
        {`Usar técnicas como el riego por goteo y la captación \n de agua de lluvia. Estas prácticas maximizan el uso \n del agua en cultivos y minimizan las pérdidas.`}
        <meshStandardMaterial color="white" />
      </Text3D>

      <Text3D
        position={[-50, 30, -100]}
        font="/fonts/Montserrat.json"
        bevelEnabled
        bevelSize={0.1}
        bevelThickness={0.1}
        height={.1}
        lineHeight={0.75}
        letterSpacing={0.05}
        size={1.2}
      >
        {`Invertir en infraestructura para reparar fugas \n en redes  de distribución de agua. Implementar sistemas \n inteligentes para detectar y prevenir pérdidas.`}
        <meshStandardMaterial color="white"/>
      </Text3D>

    </>
  );
};

export default SolutionsText;
