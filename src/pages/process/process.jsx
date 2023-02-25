import { AnimatePresence, motion } from 'framer-motion'
import { wrap } from 'popmotion'
import React, { useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { AppScreen } from '../../components/AppScreen.jsx'
import { PhoneFrame } from '../../components/PhoneFrame.jsx'
import { AngleLeft, AngleRight } from '../../icons/Arrow'
import './index.css'

const data = [
	{
		title: '进程列表',
		description: '进程列表',
		path: '/images/previews/process-list.png'
	},
	{
		title: '进程详情',
		description: '进程详情',
		path: '/images/previews/process-1.png'
	}
]

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
		<div className='w-full'>
			<div className='items-center justify-around overflow-hidden lg:flex'>
				<div className='w-full py-12 px-7 sm:px-12 md:p-16 lg:max-w-[565px] lg:py-9 lg:px-16 xl:max-w-[640px] xl:p-[70px]'>
					<span className='mb-5 rounded-full inline-block bg-primary py-2 px-5 text-sm font-medium text-white'>
						进程管理
					</span>
					<h2 className='mb-6 text-3xl font-bold text-dark sm:text-4xl sm:leading-snug 2xl:text-[40px]'>
						Brilliant Toolkit to Build Nextgen Website Faster.
					</h2>
					<p className='mb-9 text-base leading-relaxed text-body-color'>
						The main ‘thrust' is to focus on educating attendees on
						how to best protect highly vulnerable business
						applications with interactive panel discussions and
						roundtables led by subject matter experts.
					</p>
					<p className='mb-9 text-base leading-relaxed text-body-color'>
						The main ‘thrust' is to focus on educating attendees on
						how to best protect highly vulnerable business
						applications with interactive panel.
					</p>
				</div>
				<div className='flex flex-row justify-center items-center w-full'>
					<div
						className='next hover:transform
						hover:bg-primary hover:fill-white
						'
						onClick={arrowClickLeft}
					>
						<AngleLeft height='30' />
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
						hover:bg-primary hover:fill-white'
						onClick={arrowClickRight}
					>
						<AngleRight height='30' />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Process
