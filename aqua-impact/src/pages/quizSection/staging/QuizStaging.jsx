import { Environment } from "@react-three/drei";

const QuizStaging = () => {
  return (
    <>
      <Environment 
      ground={{
        height: 10,
        radius: 30,
        scale: 30,
      }}
      background
      files={"/hdris/quiz/quiz.hdr"}
      />
    </>
  );
};

export default QuizStaging;