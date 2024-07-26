import { FC } from "react";
import "./style.css";
import { BgColor, TextColor } from "../../../../../core/types";

type Props = {
  onClick: () => void;
  text: string;
  color?: BgColor;
  textColor?: TextColor;
  fullWidth?: boolean;
};

const Basebutton: FC<Props> = ({
  onClick,
  text,
  color = "primary-bg",
  textColor = "white-text",
  fullWidth = true,
}) => {
  return (
    <button
      className={`flex center rounded baseButton ${color} ${textColor} ${
        fullWidth ? "full-width" : ""
      }`}
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
};

export default Basebutton;
