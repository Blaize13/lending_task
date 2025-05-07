import React from "react";
import styles from "./styles.module.scss";

interface IButton {
  text: string;
  variant?: "black" | "white" | "transparent";
  paddingY?: number;
  paddingX?: number;
  onClick?: () => void;
}

const Button: React.FC<IButton> = ({
  text,
  variant = "black",
  paddingY = 15,
  paddingX = 80,
  onClick,
}) => {
  const style = { padding: `${paddingY}px ${paddingX}px` };
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      style={style}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
