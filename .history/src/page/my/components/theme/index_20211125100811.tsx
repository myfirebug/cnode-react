import React, { FC, useState } from "react";
import { ActionSheet } from "@src/packages";

interface IThemeProps {
    visible: boolean;
    setVisible: () => void
}

const Theme: FC<IThemeProps> = ({
    visible,
    setVisible
}) => {
  const [datas] = useState([]);
  return <ActionSheet visible={visible} datas={datas} />;
};

export default Theme;
