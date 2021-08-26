//React
import { FC, ReactNode } from "react";

//styles
import "./styles.scss";

//Types
type CommonContainerProps = {
  children: ReactNode;
  className: string;
};

export const CommonContainer: FC<CommonContainerProps> = ({
  children,
  className,
}) => {
  return <section className={className}>{children}</section>;
};
