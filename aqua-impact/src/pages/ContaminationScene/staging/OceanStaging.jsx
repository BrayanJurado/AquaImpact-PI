import { Environment } from "@react-three/drei";

const OceanStaging = () => {
  return (
    <>
      <Environment 
      ground={{
        height: 100,
        radius: 300,
        scale: 300,
      }}
      background
      files={"/hdris/ocean/ocean_2k.hdr"}
      />
    </>
  );
};

export default OceanStaging;