import type { TextareaProps } from "../@types/components.d.ts";

export default function Textarea(props: TextareaProps) {
  return (
    <textarea
      className="w-full h-full p-2 resize-none outline-none text-gray-100"
      value={props.value}
      onChange={props.onChange}
    />
  );
}
