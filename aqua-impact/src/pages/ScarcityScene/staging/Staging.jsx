import { Environment } from "@react-three/drei";

const Staging = () => {
  return (
    <>
      <Environment 
      ground={{
        height: 60,
        radius: 200,
        scale: 200,
      }}
      background
      files={"/hdris/desert/desert_4k.hdr"}
      />
    </>
  );
};

export default Staging;
