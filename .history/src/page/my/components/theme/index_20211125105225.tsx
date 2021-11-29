import React, { FC, useState } from "react";
import { ActionSheet } from "@src/packages";
import { THEME_STATE } from "@store/type";

interface IThemeProps {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setTheme:(theme: THEME_STATE) => void;
}

const Theme: FC<IThemeProps> = ({ visible, setVisible, setTheme }) => {
  const [datas] = useState([
    {
      name: "默认",
      value: "default",
    },
    {
      name: "红色",
      value: "red",
    },
    {
      name: "黄色",
      value: "yellow",
    },
    {
      name: "紫色",
      value: "purple",
    },
    {
      name: "橙色",
      value: "orange",
    },
  ]);
  return (
    <ActionSheet
      visible={visible}
      datas={datas}
      onCancel={() => setVisible(false)}
      title="请选择主题"
      onOk={(item) => setTheme({
        name: item.name,
        value: item.value
      })}
    />
  );
};

export default Theme;