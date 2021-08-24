//Components
import { CommonContainer } from "../common/index";
import { Card } from "../../components/Card/Card";
const mockups = [{}, {}, {}, {}, {}, {}];

export const Index = () => {
  return (
    <>
      <CommonContainer>
        {mockups.map(() => (
          <Card />
        ))}
      </CommonContainer>
    </>
  );
};
