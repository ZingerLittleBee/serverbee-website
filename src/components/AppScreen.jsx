import clsx from 'clsx'
import { forwardRef } from 'react'

export function AppScreen({ children, className, ...props }) {
  return (
    <div className={clsx('flex flex-col', className)} {...props}>
      {children}
    </div>
  )
}

AppScreen.Body = forwardRef(function AppScreenBody(
  { children, className },
  ref
) {
  return (
    <div
      ref={ref}
      className={clsx('flex-auto rounded-t-2xl', className)}
    >
      {children}
    </div>
  )
})
