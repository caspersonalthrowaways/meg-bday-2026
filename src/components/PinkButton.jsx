// Pink gradient button with a thick rose border and a flat drop shadow.
export default function PinkButton({ className = '', children, ...props }) {
  return (
    <button
      type="button"
      className={`flex cursor-pointer items-center justify-center overflow-clip border-5 border-rose bg-[linear-gradient(180deg,rgba(229,125,157,0)_0%,rgba(229,125,157,0.8)_100%),linear-gradient(var(--color-rose-light),var(--color-rose-light))] shadow-[0px_4px_0px_0px_rgba(0,0,0,0.25)] transition active:translate-y-[2px] active:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.25)] ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
