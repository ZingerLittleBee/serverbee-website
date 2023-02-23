import GithubIcon from '../icons/GithubIcon'
import HeartIcon from '../icons/HeartIcon'
import MagicIcon from '../icons/MagicIcon'
import RocketIcon from '../icons/RocketIcon'

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
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='currentColor'
									className='w-6 h-6 text-secondary mr-2'
								>
									<path
										fill-rule='evenodd'
										d='M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5zM18 1.5a.75.75 0 01.728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 010 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 01-1.456 0l-.258-1.036a2.625 2.625 0 00-1.91-1.91l-1.036-.258a.75.75 0 010-1.456l1.036-.258a2.625 2.625 0 001.91-1.91l.258-1.036A.75.75 0 0118 1.5zM16.5 15a.75.75 0 01.712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 010 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 01-1.422 0l-.395-1.183a1.5 1.5 0 00-.948-.948l-1.183-.395a.75.75 0 010-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0116.5 15z'
										clip-rule='evenodd'
									></path>
								</svg>
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
