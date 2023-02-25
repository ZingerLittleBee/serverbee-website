import clsx from 'clsx'

import frame from '/images/phone-frame.webp'

export function PhoneFrame({
  className,
  children,
  ...props
}) {
  return (
    <div className={clsx('relative aspect-[366/729]', className)} {...props}>
      <div className="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden rounded-3xl">
        {children}
      </div>
      <img
        src={frame}
        className="pointer-events-none absolute inset-0 h-full w-full"
      />
    </div>
  )
}
