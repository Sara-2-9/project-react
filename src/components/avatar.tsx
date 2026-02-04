import type { AvatarProps } from '../@types/components.d.ts';

export default function Avatar( props: AvatarProps ) {
    return (
        <div
      className={`rounded-full bg-linear-to-br from-fuchsia-500 to-purple-600 flex items-center justify-center shrink-0 shadow-lg overflow-hidden ${props.size} ${props.className}`}
    >
      {props.src ? (
        <img src={props.src} alt={props.name} className="w-full h-full object-cover" />
      ) : (
        <span className="text-white font-bold">{props.name}</span>
      )}
    </div>
    )
}