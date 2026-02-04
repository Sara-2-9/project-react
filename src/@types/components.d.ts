import React from "react";
import { type LucideIcon } from "lucide-react";

export type ButtonProps = {
  icon?: LucideIcon;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

export type TextareaProps = {
  value: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement> | undefined;
};

export type PromptProps = {
  setResponse: (value: string) => void;
}

export type MessageProps = {
  name: string;
  text: string;
  timeLabel?: string;
}

export type AvatarProps = {
  name: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}
