import GithubIcon from '../icons/GithubIcon'
import HeartIcon from '../icons/HeartIcon'
import MagicIcon from '../icons/MagicIcon'
import RocketIcon from '../icons/RocketIcon'
import StarIcon from '../icons/StarIcon'

interface FeatureDate {
	icon: (props: any) => JSX.Element
	title: string
	description: string
}

const data: FeatureDate[] = [
	{
		icon: HeartIcon,
		title: '功能强大',
		description:
			'CPU 核心、系统负载、 内存用量、 磁盘读写、 网卡 IO、 进程管理、SSH 终端'
	},
	{
		icon: MagicIcon,
		title: '跨平台',
		description: '支持 Windows、Linux、macOS、nas，以及 Linux 衍生的系统'
	},
	{
		icon: RocketIcon,
		title: '高性能',
		description: '使用高性能框架 Actix-Web 提供服务, 由 Rust 强力驱动'
	},
	{
		icon: GithubIcon,
		title: '开源',
		description: '服务器程序完全开源，透明、公开、可定制化'
	}
]

function Feature() {
	return (
		<section className='pb-8 lg:pb-[70px]'>
			<div className='container'>
				<div className='-mx-4 flex flex-wrap'>
					<div className='w-full px-4'>
						<div className='mb-12 max-w-[620px] lg:mb-20'>
							<div className='flex'>
								<StarIcon />
								<span className='mb-2 block text-lg font-semibold text-primary'>
									特征
								</span>
							</div>
							<h2 className='mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[42px]'>
								我们的亮点
							</h2>
							<p className='text-lg leading-relaxed text-gray-500 sm:text-xl sm:leading-relaxed'>
								我们始终秉持着简洁、易用的原则,
								为用户提供最好的体验。
							</p>
						</div>
					</div>
				</div>
				<div className='-mx-4 flex flex-wrap'>
					{data.map((item, index) => {
						return (
							<div className='w-full px-4 md:w-1/2 lg:w-1/4'>
								<div
									className='wow fadeInUp group mb-12 bg-white'
									data-wow-delay='.1s'
								>
									<div className='relative z-10 mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-primary'>
										<span className='absolute top-0 left-0 z-[-1] mb-8 flex h-[70px] w-[70px] rotate-[25deg] items-center justify-center rounded-2xl bg-primary bg-opacity-20 duration-300 group-hover:rotate-45'></span>
										<item.icon
											width='35'
											height='35'
											className='fill-white'
										/>
									</div>
									<h4 className='mb-3 text-xl font-bold text-dark'>
										{item.title}
									</h4>
									<p className='mb-8 text-gray-500 lg:mb-11'>
										{item.description}
									</p>
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</section>
	)
}

export default Feature
