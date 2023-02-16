import Detail from "../Detail";
import { FontIntegerNormal } from "../../style/fonts";
import { ContainerCardComment, ContainerDetailAndCreation, CreationTime } from "./style";

const CardComment = ({ ...props }) => {
  const creatioTime = (): string => {
    return "testando";
  };

  return (
    <ContainerCardComment>
      <ContainerDetailAndCreation>
        <Detail name={props.name} colorFont="--grey1" />
        <CreationTime>- {creatioTime()}</CreationTime>
      </ContainerDetailAndCreation>
      <FontIntegerNormal>{props.description}</FontIntegerNormal>
    </ContainerCardComment>
  );
};

export default CardComment;
