// indexPol.jsx
import React from "react";
import { Navbar } from "../components/Navbar";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";

const countries = {
  IN: 88, // India - Alta
  CN: 85, // China - Alta
  PK: 79, // Pakistán - Alta
  BD: 76, // Bangladesh - Alta
  EG: 100, // Egipto - Alta
  NG: 90, // Nigeria - Alta
  MX: 50, // México - Alta
  RU: 70, // Rusia - Alta
  ID: 77, // Indonesia - Alta
  BR: 82, // Brasil - Alta

  US: 40, // Estados Unidos - Moderada
  DE: 60, // Alemania - Moderada
  JP: 55, // Japón - Moderada
  FR: 45, // Francia - Moderada
  CA: 35, // Canadá - Moderada
  AU: 30, // Australia - Moderada
  AR: 50, // Argentina - Moderada
  ZA: 65, // Sudáfrica - Moderada
  KR: 50, // Corea del Sur - Moderada
  IT: 70, // Italia - Moderada

  SE: 10, // Suecia - Leve
  NO: 15, // Noruega - Leve
  FI: 20, // Finlandia - Leve
  NZ: 12, // Nueva Zelanda - Leve
  CH: 25, // Suiza - Leve
  DK: 18, // Dinamarca - Leve
  IE: 8,  // Irlanda - Leve
  AT: 22, // Austria - Leve
  BE: 14, // Bélgica - Leve
  PT: 16, // Portugal - Leve
};

const countryInfo = {
  IN: "India enfrenta una crisis significativa de contaminación del agua, exacerbada por la industrialización y el crecimiento urbano rápido. Los ríos, como el Ganges, están severamente contaminados por desechos industriales y aguas residuales. El gobierno ha iniciado iniciativas para limpiar estos cuerpos de agua, pero la implementación y el control siguen siendo un desafío.",
  CN: "China tiene problemas graves de contaminación del agua debido a la rápida industrialización y el uso intensivo de carbón. Muchos ríos y lagos están contaminados por desechos industriales y agrícolas. En respuesta, el gobierno ha introducido regulaciones más estrictas y programas de restauración de ecosistemas para proteger los recursos hídricos.",
  PK: "Pakistán enfrenta serios problemas de contaminación del agua, principalmente por el escaso tratamiento de aguas residuales y la escorrentía agrícola. Ríos como el Indus sufren contaminación severa, lo que plantea riesgos para la salud pública. Se están implementando proyectos de saneamiento y conservación del agua para abordar esta crisis.",  
  BD: "En Bangladés, la contaminación del agua es un problema crítico, especialmente en áreas urbanas. Los ríos están contaminados por desechos industriales y falta de infraestructura de saneamiento. El gobierno y diversas organizaciones están trabajando en iniciativas para limpiar los ríos y mejorar el acceso al agua potable.",  
  EG: "Egipto experimenta alta contaminación del agua, particularmente en el Nilo, debido al vertido de desechos industriales y la falta de gestión de residuos. Las autoridades están implementando proyectos para mejorar la calidad del agua, pero la creciente población y la urbanización complican los esfuerzos.",
  NG: "Nigeria enfrenta una grave contaminación del agua, especialmente en áreas urbanas y en la región del delta del Níger, donde las actividades petroleras han devastado el ecosistema. El acceso a agua potable es un desafío significativo, y se están llevando a cabo esfuerzos para limpiar las fuentes de agua y mejorar la infraestructura.",
  MX: "México lidia con problemas de contaminación del agua en sus grandes ciudades debido a la escorrentía industrial y el mal manejo de residuos. Los ríos y lagos han sido afectados, y aunque existen programas para restaurar estos cuerpos de agua, la situación sigue siendo crítica.",
  RU: "Rusia enfrenta problemas de contaminación del agua en regiones industriales, donde el vertido de desechos afecta la calidad de ríos y lagos. Se están desarrollando políticas para mejorar la gestión del agua y reducir la contaminación, pero la implementación es desigual.",
  ID: "Indonesia sufre una grave contaminación del agua, especialmente en áreas urbanas y rurales, debido a la deforestación y el uso de carbón. La calidad del agua es afectada por residuos industriales y el uso inadecuado de recursos. Las iniciativas para restaurar ríos y mejorar el acceso al agua potable están en marcha.",
  BR: "Brasil enfrenta problemas de contaminación del agua, especialmente en áreas urbanas y en la Amazonía, donde la deforestación y la minería han afectado los ecosistemas acuáticos. Se están llevando a cabo esfuerzos para preservar las cuencas hidrográficas y restaurar la calidad del agua en ríos y lagos.",
  US: "Estados Unidos tiene un nivel de contaminación del agua moderado, con algunas regiones enfrentando problemas graves debido a desechos industriales y escorrentía agrícola. Las regulaciones federales han mejorado la calidad del agua, pero ciertos ríos y lagos aún necesitan atención.",
  DE: "Alemania tiene un nivel moderado de contaminación del agua, pero ha implementado estrictas regulaciones para proteger sus recursos hídricos. La calidad del agua en general es buena, aunque hay áreas donde la contaminación por nitratos y productos químicos es preocupante.",
  JP: "Japón ha logrado mantener un nivel de contaminación del agua moderado, gracias a regulaciones ambientales efectivas. Sin embargo, aún enfrenta desafíos relacionados con la gestión de residuos y la contaminación en áreas industriales. Las iniciativas para restaurar ecosistemas acuáticos son fundamentales.",
  FR: "Francia trabaja activamente para reducir la contaminación del agua, especialmente en áreas agrícolas donde el uso de pesticidas y fertilizantes puede afectar la calidad del agua. Se están implementando medidas de conservación y restauración para proteger los recursos hídricos.",
  CA: "Canadá es conocido por su compromiso con la sostenibilidad y la conservación del agua. Aunque los niveles de contaminación son moderados, algunas áreas enfrentan desafíos relacionados con la extracción de recursos y el tratamiento de aguas residuales.",
  AU: "Australia enfrenta problemas de contaminación del agua, especialmente en áreas urbanas y rurales afectadas por sequías y mala gestión de recursos. Las iniciativas para restaurar ecosistemas acuáticos y mejorar la calidad del agua están en desarrollo.",
  AR: "Argentina lidia con contaminación del agua en sus principales ríos y cuerpos de agua, exacerbada por la agricultura intensiva y la falta de gestión de residuos. Las políticas para mejorar la calidad del agua y la conservación de recursos son fundamentales para abordar este problema.",
  ZA: "Sudáfrica enfrenta problemas de contaminación del agua, especialmente en áreas urbanas donde la escasez de agua y la gestión deficiente de residuos afectan la calidad. Las iniciativas para restaurar fuentes de agua y mejorar la infraestructura son cruciales.",
  KR: "Corea del Sur enfrenta problemas de calidad del agua en ciudades densamente pobladas, donde la contaminación industrial y la urbanización han afectado los recursos hídricos. Se están tomando medidas para proteger las fuentes de agua y mejorar la gestión de residuos.",
  IT: "Italia lidia con la contaminación del agua, particularmente en el transporte marítimo y en áreas agrícolas donde el uso de productos químicos es un problema. Las políticas para mejorar la calidad del agua y proteger los ecosistemas acuáticos son esenciales.",
  SE: "Suecia es conocida por su calidad del agua y sus políticas ambientales avanzadas. Aunque la contaminación es leve, el país sigue trabajando para conservar y proteger sus recursos hídricos a través de iniciativas de sostenibilidad.",
  NO: "Noruega tiene un nivel de contaminación del agua bajo, gracias a su enfoque en la sostenibilidad y la gestión de recursos hídricos. El país busca seguir protegiendo su ambiente acuático a través de regulaciones estrictas.",
  FI: "Finlandia disfruta de una excelente calidad del agua, conocida por su aire limpio y políticas ecológicas. Los esfuerzos para conservar los recursos hídricos son prioritarios, manteniendo la calidad del agua en niveles altos.",
  NZ: "Nueva Zelanda es famosa por su calidad del agua y su entorno natural. Aunque los niveles de contaminación son bajos, el país continúa implementando políticas para proteger sus recursos hídricos y restaurar ecosistemas dañados.",
  CH: "Suiza se destaca por su excelente calidad del agua, con estrictas regulaciones que protegen sus recursos hídricos. El país sigue trabajando para mantener y mejorar la calidad del agua en ríos y lagos.",
  DK: "Dinamarca tiene un nivel bajo de contaminación del agua, gracias a su enfoque en la sostenibilidad y energías limpias. Las políticas ambientales avanzadas aseguran la protección de sus recursos hídricos.",
  IE: "Irlanda disfruta de un aire y agua generalmente limpios, con un fuerte enfoque en la sostenibilidad y la conservación de recursos hídricos. El país sigue trabajando para mantener su calidad del agua.",
  AT: "Austria tiene un fuerte enfoque en la calidad del agua y la sostenibilidad. Aunque los niveles de contaminación son bajos, se implementan políticas para proteger los recursos hídricos y mejorar la gestión de aguas.",
  BE: "Bélgica enfrenta algunos problemas de contaminación del agua en áreas urbanas, pero está trabajando para abordar estos desafíos mediante regulaciones ambientales más estrictas y políticas sostenibles.",
  PT: "Portugal tiene una calidad del agua generalmente buena, aunque enfrenta desafíos en áreas urbanas y rurales. Las iniciativas para reducir la contaminación y proteger los recursos hídricos están en marcha."
};

const colorScale = ["#008000", "#FFA500", "#A0000"];
function PollutionLevels() {
  return (
    <div style={styles.pollutionContainer}>
      <h3 style={styles.title}>Niveles de contaminación</h3>
      <div style={styles.level}>
        <div style={{ ...styles.circle, backgroundColor: '#A00' }}></div>
        <span style={styles.label}>Contaminación Alta</span>
      </div>
      <div style={styles.level}>
        <div style={{ ...styles.circle, backgroundColor: '#FFA500' }}></div>
        <span style={styles.label}>Contaminación Moderada</span>
      </div>
      <div style={styles.level}>
        <div style={{ ...styles.circle, backgroundColor: '#008000' }}></div>
        <span style={styles.label}>Contaminación Leve</span>
      </div>
    </div>
  );
}

function IndexPol() {
  return (
    <div style={styles.page}>
      <Navbar />
      <div style={styles.mapContainer}>
        <VectorMap
          map={worldMill}
          containerStyle={{
            width: "50%",
            height: "50%",
          }}
          backgroundColor="transparent"
          series={{
            regions: [
              {
                scale: colorScale,
                values: countries,
                min: 0,
                max: 100,
              },
            ],
          }}
          onRegionTipShow={(event, label, code) => {
            label.html(`
              <div style="background-color: #3889D7; border-radius: 6px; min-height: 100px; width: 200px; color: white; padding: 10px; z-index: 2000; display: flex; flex-direction: column; align-items: flex-start;">
                <p style="margin: 0;"><b>${label.html()}</b></p>
                <p style="margin: 0;">${countryInfo[code] || "Información no disponible."}</p>
              </div>`);
            label.css("border", "none");
          }}
        />
      </div>
      <PollutionLevels />
    </div>
  );
}

const styles = {
  page: {
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
    margin: 0,
    padding: 0,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  mapContainer: {
    width: "80vw", 
    height: "80vh", 
    overflow: "hidden",
  },
  pollutionContainer: {
    position: 'absolute', 
    bottom: '20px',
    left: '20px',
    backgroundColor: '#16284A', 
    padding: '15px', 
    borderRadius: '8px',
    zIndex: 2000,
  },
  title: {
    color: 'white',
    margin: '0 0 10px 0',
    fontSize: '18px',
  },
  level: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  circle: {
    width: '20px',
    height: '20px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  label: {
    fontSize: '16px',
    color: 'white',
  }
};

export default IndexPol;
