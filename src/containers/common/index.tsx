//styles
import "./styles.scss";

import { FC, ReactNode } from "react";

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
