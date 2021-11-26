import React, { FC, useState } from "react";
import { ActionSheet } from "@src/packages";

interface IThemeProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const Theme: FC<IThemeProps> = ({ visible, setVisible }) => {
  const [datas] = useState([
    {
      name: "默认",
      value: "default",
    },
    {
        name: "红色",
        value: "red",
      }
  ]);
  return (
    <ActionSheet
      visible={visible}
      datas={datas}
      onCancel={() => setVisible(false)}
      title="请选择主题"
      onOk = {(item) => console.log(item) }
    />
  );
};

export default Theme;
