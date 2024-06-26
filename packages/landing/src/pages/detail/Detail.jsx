import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { Fragment, useEffect, useRef, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@components/AppScreen'
import { CircleBackground } from '@components/CircleBackground'
import Container from '@components/Container'
import PhoneFrame from '@components/PhoneFrame'
import {
	DeviceNotificationIcon,
	DeviceTouchIcon,
	DeviceUserIcon
} from '@icons/DeviceIcon'

const MotionAppScreenBody = motion(AppScreen.Body)

const details = [
	{
		name: '系统信息 & 处理器',
		description: '获悉系统基本信息，侦测各个 CPU 使用状态。',
		icon: DeviceUserIcon,
		path: '/images/previews/detail-1.png'
	},
	{
		name: '内存 & 网络',
		description: '内存使用率一目了然，实时监控各网卡流量。',
		icon: DeviceNotificationIcon,
		path: '/images/previews/detail-2.png'
	},
	{
		name: '磁盘',
		description: '磁盘用量直观具体，了然于心。',
		icon: DeviceTouchIcon,
		path: '/images/previews/detail-3.png'
	}
]

const maxZIndex = 2147483647

const bodyVariantBackwards = {
	opacity: 0.4,
	scale: 0.8,
	zIndex: 0,
	filter: 'blur(4px)',
	transition: { duration: 0.4 }
}

const bodyVariantForwards = custom => ({
	y: '100%',
	zIndex: maxZIndex - custom.changeCount,
	transition: { duration: 0.4 }
})

const bodyAnimation = {
	initial: 'initial',
	animate: 'animate',
	exit: 'exit',
	variants: {
		initial: custom =>
			custom.isForwards
				? bodyVariantForwards(custom)
				: bodyVariantBackwards,
		animate: custom => ({
			y: '0%',
			opacity: 1,
			scale: 1,
			zIndex: maxZIndex / 2 - custom.changeCount,
			filter: 'blur(0px)',
			transition: { duration: 0.4 }
		}),
		exit: custom =>
			custom.isForwards
				? bodyVariantBackwards
				: bodyVariantForwards(custom)
	}
}

function DetailScreen({ custom, animated = false, path }) {
	return (
		<AppScreen className='w-full'>
			<MotionAppScreenBody
				{...(animated ? { ...bodyAnimation, custom } : {})}
			>
				<img
					className='rounded-t-3xl'
					src={path}
					alt='serverbee-detail'
				/>
			</MotionAppScreenBody>
		</AppScreen>
	)
}

function usePrevious(value) {
	let ref = useRef()

	useEffect(() => {
		ref.current = value
	}, [value])

	return ref.current
}

function DetailDesktop() {
	let [changeCount, setChangeCount] = useState(0)
	let [selectedIndex, setSelectedIndex] = useState(0)
	let prevIndex = usePrevious(selectedIndex)
	let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

	let onChange = useDebouncedCallback(
		selectedIndex => {
			setSelectedIndex(selectedIndex)
			setChangeCount(changeCount => changeCount + 1)
		},
		100,
		{ leading: true }
	)

	return (
		<Tab.Group
			as='div'
			className='grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24'
			selectedIndex={selectedIndex}
			onChange={onChange}
			vertical
		>
			<Tab.List className='relative z-10 order-last col-span-6 space-y-6'>
				{details.map((feature, featureIndex) => (
					<div
						key={feature.name}
						className='relative rounded-2xl transition-colors hover:bg-gray-800/30'
					>
						{featureIndex === selectedIndex && (
							<motion.div
								layoutId='activeBackground'
								className='absolute inset-0 bg-gray-800'
								initial={{ borderRadius: 16 }}
							/>
						)}
						<div className='relative z-10 p-8'>
							<feature.icon className='h-8 w-8' />
							<h3 className='mt-6 text-lg font-semibold text-white'>
								<Tab className='text-left outline-0'>
									<span className='absolute inset-0 rounded-2xl' />
									{feature.name}
								</Tab>
							</h3>
							<p className='mt-2 text-sm text-gray-400'>
								{feature.description}
							</p>
						</div>
					</div>
				))}
			</Tab.List>
			<div className='relative col-span-6'>
				<div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
					<CircleBackground
						color='#9333EA'
						className='animate-spin-slower'
					/>
				</div>
				<PhoneFrame className='z-10 mx-auto w-full max-w-[366px]'>
					<Tab.Panels as={Fragment}>
						<AnimatePresence
							initial={false}
							custom={{ isForwards, changeCount }}
						>
							{details.map((feature, featureIndex) =>
								selectedIndex === featureIndex ? (
									<Tab.Panel
										static
										key={feature.name + changeCount}
										className='col-start-1 row-start-1 flex focus:outline-offset-[32px] [&:not(:focus-visible)]:focus:outline-none'
									>
										<DetailScreen
											animated
											custom={{ isForwards, changeCount }}
											path={feature.path}
										/>
									</Tab.Panel>
								) : null
							)}
						</AnimatePresence>
					</Tab.Panels>
				</PhoneFrame>
			</div>
		</Tab.Group>
	)
}

function DetailMobile() {
	let [activeIndex, setActiveIndex] = useState(0)
	let slideContainerRef = useRef()
	let slideRefs = useRef([])

	useEffect(() => {
		let observer = new window.IntersectionObserver(
			entries => {
				for (let entry of entries) {
					if (entry.isIntersecting) {
						setActiveIndex(slideRefs.current.indexOf(entry.target))
						break
					}
				}
			},
			{
				root: slideContainerRef.current,
				threshold: 0.6
			}
		)

		for (let slide of slideRefs.current) {
			if (slide) {
				observer.observe(slide)
			}
		}

		return () => {
			observer.disconnect()
		}
	}, [slideContainerRef, slideRefs])

	return (
		<>
			<div
				ref={slideContainerRef}
				className='-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden'
			>
				{details.map((feature, featureIndex) => (
					<div
						key={featureIndex}
						ref={ref => (slideRefs.current[featureIndex] = ref)}
						className='w-full flex-none snap-center px-4 sm:px-6'
					>
						<div className='relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6'>
							<div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
								<CircleBackground
									color='#13B5C8'
									className={
										featureIndex % 2 === 1
											? 'rotate-180'
											: undefined
									}
								/>
							</div>
							<PhoneFrame className='relative mx-auto w-full max-w-[366px]'>
								<DetailScreen path={feature.path} />
							</PhoneFrame>
							<div className='absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10'>
								<feature.icon className='h-8 w-8' />
								<h3 className='mt-6 text-sm font-semibold text-white sm:text-lg'>
									{feature.name}
								</h3>
								<p className='mt-2 text-sm text-gray-400'>
									{feature.description}
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className='mt-6 flex justify-center gap-3'>
				{details.map((_, featureIndex) => (
					<button
						type='button'
						key={featureIndex}
						className={clsx(
							'relative h-0.5 w-4 rounded-full',
							featureIndex === activeIndex
								? 'bg-gray-300'
								: 'bg-gray-500'
						)}
						aria-label={`Go to slide ${featureIndex + 1}`}
						onClick={() => {
							slideRefs.current[featureIndex].scrollIntoView({
								block: 'nearest',
								inline: 'nearest'
							})
						}}
					>
						<span className='absolute -inset-x-1.5 -inset-y-3' />
					</button>
				))}
			</div>
		</>
	)
}

export function PrimaryFeatures() {
	return (
		<section
			id='Details'
			aria-label='details'
			className='bg-gray-900 py-20 sm:py-32'
		>
			<Container>
				<div className='mx-auto'>
					<div className='mb-12 max-w-[620px] lg:mb-20'>
						<h2 className='text-3xl font-medium tracking-tight text-white'>
							全方位监控，保障系统稳定
						</h2>
						<p className='mt-2 text-lg text-gray-400'>
							通过全方位监控服务器性能和资源使用情况，保障系统的稳定性和安全性
						</p>
					</div>
				</div>
			</Container>
			<div className='mt-16 md:hidden'>
				<DetailMobile />
			</div>
			<Container className='hidden md:mt-20 md:block'>
				<DetailDesktop />
			</Container>
		</section>
	)
}
