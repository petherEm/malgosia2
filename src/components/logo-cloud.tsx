import { clsx } from 'clsx'

export function LogoCloud({
  className,
}: React.ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={clsx(
        className,
        'flex justify-between max-sm:mx-auto max-sm:max-w-md max-sm:flex-wrap max-sm:justify-evenly max-sm:gap-x-4 max-sm:gap-y-4',
      )}
    >
      <img
        alt="Iveco"
        src="./logo-cloud/iveco.png"
        className="h-16 max-sm:mx-auto sm:h-8 lg:h-20"
      />
      <img
        alt="CNH Industrial"
        src="./logo-cloud/cnh.png"
        className="h-16 max-sm:mx-auto sm:h-8 lg:h-20"
      />
      <img
        alt="Mercedes-Benz"
        src="./logo-cloud/mb.png"
        className="h-16 max-sm:mx-auto sm:h-8 lg:h-20"
      />
    </div>
  )
}
