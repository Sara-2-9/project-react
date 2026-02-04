import type { MessageProps } from '../@types/components.d.ts';

export default function Message( props: MessageProps ) {
    return (
        <div className="flex items-end gap-3 mt-6 px-4">
            <div className="relative max-w-[75%]">
                <div className="border border-neutral-700 rounded-2xl rounded-bl-sm px-4 py-3 shadow-md">
                <p className="text-white text-sm leading-relaxed">{props.text}</p>
                {props.timeLabel && (
                    <span className="text-neutral-400 text-xs mt-1 block text-right">
                        {props.name} - {props.timeLabel}
                    </span>
                )}
                </div>
            </div>
        </div>
    )
}