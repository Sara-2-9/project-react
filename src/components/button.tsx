import type { ButtonProps } from '../@types/components.d.ts';

export default function Button( props: ButtonProps) {
  return (
    <button 
      className="w-10 h-10 bg-neutral-900 border border-neutral-700 flex items-center justify-center p-2 rounded-xl cursor-pointer hover:border-neutral-500"
      onClick={props.onClick}  
    >
    {props.icon && <props.icon className="size-6 text-gray-100" />}
    </button>
  );
}
