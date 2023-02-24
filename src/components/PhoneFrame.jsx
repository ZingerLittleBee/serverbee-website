import clsx from 'clsx'

import frame from '/images/phone-frame.svg'

export function PhoneFrame({
  className,
  children,
  ...props
}) {
  return (
    <div className={clsx('relative aspect-[366/729]', className)} {...props}>
      <div className="absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl" />
      <div className="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden">
        {children}
      </div>
      <img
        src={frame}
        alt=""
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  )
}
