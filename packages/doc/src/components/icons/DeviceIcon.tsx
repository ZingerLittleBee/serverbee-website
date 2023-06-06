import { useId } from 'react'

export function DeviceUserIcon(props) {
	return (
		<svg viewBox='0 0 32 32' aria-hidden='true' {...props}>
			<circle cx={16} cy={16} r={16} fill='#A3A3A3' fillOpacity={0.2} />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z'
				fill='#737373'
			/>
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z'
				fill='#A3A3A3'
			/>
		</svg>
	)
}

export function DeviceNotificationIcon(props) {
	return (
		<svg viewBox='0 0 32 32' aria-hidden='true' {...props}>
			<circle cx={16} cy={16} r={16} fill='#A3A3A3' fillOpacity={0.2} />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z'
				fill='#A3A3A3'
			/>
			<path
				d='M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z'
				fill='#737373'
			/>
		</svg>
	)
}

export function DeviceTouchIcon(props) {
	let id = useId()

	return (
		<svg viewBox='0 0 32 32' fill='none' aria-hidden='true' {...props}>
			<defs>
				<linearGradient
					id={`${id}-gradient`}
					x1={14}
					y1={14.5}
					x2={7}
					y2={17}
					gradientUnits='userSpaceOnUse'
				>
					<stop stopColor='#737373' />
					<stop offset={1} stopColor='#D4D4D4' stopOpacity={0} />
				</linearGradient>
			</defs>
			<circle cx={16} cy={16} r={16} fill='#A3A3A3' fillOpacity={0.2} />
			<path
				fillRule='evenodd'
				clipRule='evenodd'
				d='M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z'
				fill='#A3A3A3'
			/>
			<path
				d='M7 22c0-4.694 3.5-8 8-8'
				stroke={`url(#${id}-gradient)`}
				strokeWidth={2}
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<path
				d='M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z'
				fill='#A3A3A3'
			/>
		</svg>
	)
}
