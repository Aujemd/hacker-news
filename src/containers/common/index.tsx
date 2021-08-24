//styles
import "./styles.scss";

import { FC, ReactNode } from "react";

type CommonContainerProps = {
  children: ReactNode;
};

export const CommonContainer: FC<CommonContainerProps> = ({ children }) => {
  return <section className="commonContainer">{children}</section>;
};
