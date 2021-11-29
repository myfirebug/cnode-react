import React, { FC, useState } from "react";
import { ActionSheet } from "@src/packages";

interface IThemeProps {
    visible: boolean;
    setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Theme: FC<IThemeProps> = ({
    visible,
    setVisible
}) => {
  const [datas] = useState([]);
  return <ActionSheet visible={visible} datas={datas} onCancel={setVisible(false)} />;
};

export default Theme;