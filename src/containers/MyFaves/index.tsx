//Components
import { CommonContainer } from "../common/index";
import { Card } from "../../components/Card/Card";

//styles
import "./styles.scss";

const mockups = [{}, {}, {}, {}, {}, {}];

export const Index = () => {
  return (
    <>
      <CommonContainer className="commonContainer myFaves__container">
        {mockups.map(() => (
          <Card />
        ))}
      </CommonContainer>
    </>
  );
};
