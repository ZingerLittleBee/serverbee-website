import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'
import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { AppScreen } from '../../components/AppScreen.jsx'
import PhoneFrame from '../../components/PhoneFrame.jsx'
import { AngleLeft, AngleRight } from '../../icons/Arrow'
import './index.css'

const images = [
	'/images/previews/process-list.png',
	'/images/previews/process-1.png',
	'/images/previews/process-2.png'
]

const variants = {
	enter: () => {
		return {
			y: '100%',
			opacity: 1
		}
	},
	center: {
		y: '0%',
		opacity: 1,
		transition: { duration: 0.6 }
	},
	exit: () => {
		return {
			opacity: 0.4,
			scale: 0.8,
			filter: 'blur(4px)',
			transition: { duration: 0.2 }
		}
	}
}

const Process = () => {
	const [[page, direction], setPage] = useState([0, 0])
	const imageIndex = wrap(0, images.length, page)

	const paginate = newDirection => {
		setPage([page + newDirection, newDirection])
	}

	let arrowClickLeft = useDebouncedCallback(
		() => {
			paginate(-1)
		},
		200,
		{ leading: true }
	)

	let arrowClickRight = useDebouncedCallback(
		() => {
			paginate(1)
		},
		200,
		{ leading: true }
	)

	return (
		<div className='flex flex-row justify-center items-center w-full'>
			<div
				className='next hover:transform
						hover:bg-primary  dark:hover:bg-primary-dark hover:fill-white
						'
				onClick={arrowClickLeft}
			>
				<AngleLeft height='30' className='dark:fill-white' />
			</div>
			<PhoneFrame className='z-10 w-full max-w-[300px]'>
				<AppScreen className='w-full'>
					<AnimatePresence initial={false} custom={direction}>
						<motion.img
							key={page}
							src={images[imageIndex]}
							custom={direction}
							variants={variants}
							initial='enter'
							animate='center'
							exit='exit'
						/>
					</AnimatePresence>
				</AppScreen>
			</PhoneFrame>
			<div
				className='prev hover:transform
						hover:bg-primary dark:hover:bg-primary-dark hover:fill-white'
				onClick={arrowClickRight}
			>
				<AngleRight height='30' className='dark:fill-white' />
			</div>
		</div>
	)
}
export default Process
