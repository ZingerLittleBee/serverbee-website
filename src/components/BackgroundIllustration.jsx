import { useId } from 'react'

const BackgroundIllustration = props => {
	const id = useId()

	return (
		<div {...props}>
			<svg
				viewBox='0 0 1026 1026'
				fill='none'
				aria-hidden='true'
				className='absolute inset-0 h-full w-full animate-spin-slow'
			>
				<path
					d='M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z'
					strokeOpacity='0.3'
				/>
				<path
					d='M513 1025C230.23 1025 1 795.77 1 513'
					stroke={`url(#${id}-gradient-1)`}
					strokeLinecap='round'
				/>
				<defs>
					<linearGradient
						id={`${id}-gradient-1`}
						x1='1'
						y1='513'
						x2='1'
						y2='1025'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#9333EA' />
						<stop offset='1' stopColor='#9333EA' stopOpacity='0' />
					</linearGradient>
				</defs>
			</svg>
			<svg
				viewBox='0 0 1026 1026'
				fill='none'
				aria-hidden='true'
				className='absolute inset-0 h-full w-full animate-spin-reverse-slow'
			>
				<path
					d='M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z'
					strokeOpacity='0.3'
				/>
				<path
					d='M913 513c0 220.914-179.086 400-400 400'
					stroke={`url(#${id}-gradient-2)`}
					strokeLinecap='round'
				/>
				<defs>
					<linearGradient
						id={`${id}-gradient-2`}
						x1='913'
						y1='513'
						x2='913'
						y2='913'
						gradientUnits='userSpaceOnUse'
					>
						<stop stopColor='#9333EA' />
						<stop offset='1' stopColor='#9333EA' stopOpacity='0' />
					</linearGradient>
				</defs>
			</svg>
		</div>
	)
}

export default BackgroundIllustration
