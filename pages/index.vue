<script setup>
const props = defineProps({
	version: {
		type: String,
		default: '1.0.0'
	},
	title: {
		type: String,
		default: 'ServerBee'
	},
	subTitle: {
		type: String,
		default: '掌控你所有 PC、服务器的状态'
	},
	highPerformance: {
		type: String,
		default: '使用高性能框架 Actix-Web 提供服务, 由 Rust 强力驱动.'
	},
	starGitHub: {
		type: String,
		default: '服务器程序开源, 完全透明、公开、可定制化.'
	},
	crossPlatorm: {
		type: String,
		default: '支持 Windows、Linux、MacOS.'
	},
	featuresList: {
		type: String,
		default:
			'CPU 核心、 系统负载、 内存用量、 磁盘读写、 网卡 IO、 进程管理、SSH 终端.'
	}
})
const url = {
	github: 'https://github.com/ZingerLittleBee/server_bee-backend',
	appStore: 'https://apps.apple.com/us/app/serverbee/id6443553714'
}

const colorMode = useColorMode()
const isDark = computed(() => colorMode.value === 'dark')

const bgColor = computed(() =>
	colorMode.value === 'system'
		? 'text-black dark:text-white'
		: colorMode.value === 'dark'
		? 'text-white'
		: 'text-black'
)

const broderDivId = computed(() =>
	colorMode.value === 'system'
		? ''
		: colorMode.value === 'dark'
		? 'gradient-border-dark'
		: 'gradient-border-light'
)
</script>

<template>
	<div
		:class="`p-8 antialiased place-content-center flex flex-col items-center justify-center text-sm sm:text-base ${bgColor}`"
	>
		<div class="grid grid-cols-2 gap-4 md:gap-8 max-w-4xl w-full z-20">
			<div
				class="flex flex-col justify-center items-center col-span-2 sm:col-span-2"
			>
				<div
					class="flex items-center rounded-6 p-6 serverbee-logo spotlight-logo mb-6"
				>
					<img
						src="/img/serverbee.webp"
						class="w-80px h-80px"
						alt="serverbee logo"
						crossOrigin="anonymous"
					/>
				</div>
				<div class="spotlight-wrapper">
					<div class="fixed z-10 left-0 right-0 spotlight"></div>
				</div>
				<h1 class="xl:text-5xl font-800 text-4xl mt-4" v-text="title" />
				<p
					class="xl:text-2xl font-400 text-xl my-4"
					style="color: #6b7280"
					v-text="subTitle"
				/>
				<a :href="url.appStore" target="_blank">
					<div class="my-4">
						<img
							v-if="!isDark"
							src="~/assets/dl.svg"
							alt="Download on the App Store"
						/>
						<img
							v-if="isDark"
							src="~/assets/dl-dark.svg"
							alt="Download on the App Store"
						/>
						<p class="text-center text-sm" style="color: #9ca3af">
							{{ version }} 已发布
						</p>
					</div>
				</a>
			</div>
			<div
				:id="broderDivId"
				class="rounded p-4 flex flex-col gradient-border col-span-2 sm:col-span-1"
			>
				<div class="i-akar-icons:fire text-40px"></div>
				<h1 class="font-medium text-xl mt-4">特性</h1>
				<p class="mt-2" v-text="featuresList" />
			</div>
			<div
				:id="broderDivId"
				class="gradient-border col-span-2 sm:col-span-1 p-4 flex flex-col"
			>
				<div class="i-eos-icons:system-ok-outlined text-40px" />
				<h2 class="font-semibold text-xl mt-4">跨平台</h2>
				<p class="mt-2" v-text="crossPlatorm" />
			</div>
			<div
				:id="broderDivId"
				rel="noopener"
				class="gradient-border col-span-2 sm:col-span-1 p-4 flex flex-col"
			>
				<div class="i-charm:rocket text-40px"></div>
				<h2 class="font-semibold text-xl mt-4">高性能</h2>
				<p class="mt-2" v-text="highPerformance" />
			</div>
			<a
				:href="url.github"
				target="_blank"
				rel="noopener"
				:id="broderDivId"
				class="cursor-pointer gradient-border col-span-2 sm:col-span-1 p-4 flex flex-col"
			>
				<div class="i-carbon:logo-github text-40px"></div>
				<h2 class="font-semibold text-xl mt-4">开源</h2>
				<p class="mt-2" v-text="starGitHub" />
			</a>
		</div>
	</div>
</template>

<style scoped>
.spotlight {
	background: linear-gradient(45deg, #00dc82 0%, #36e4da 50%, #0047e1 100%);
	filter: blur(20vh);
	height: 60vh;
	bottom: -40vh;
}

.spotlight-logo {
	background: linear-gradient(45deg, #3ad0f5 0%, #e6d67c 50%, #0047e1 100%);
}

.spotlight-wrapper {
	opacity: 0.5;
	transition: opacity 0.4s ease-in;
}

.serverbee-logo:hover ~ .spotlight-wrapper {
	opacity: 0.95;
}

.gradient-border {
	position: relative;
	border-radius: 0.5rem;
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	width: 100%;
}

@media (prefers-color-scheme: light) {
	.gradient-border {
		background-color: rgba(255, 255, 255, 0.3);
	}

	.gradient-border::before {
		background: linear-gradient(
			90deg,
			#e2e2e2 0%,
			#e2e2e2 25%,
			#00dc82 50%,
			#36e4da 75%,
			#0047e1 100%
		);
	}
}

#gradient-border-light {
	background-color: rgba(255, 255, 255, 0.3);
}

#gradient-border-light .gradient-border::before {
	background: linear-gradient(
		90deg,
		#e2e2e2 0%,
		#e2e2e2 25%,
		#00dc82 50%,
		#36e4da 75%,
		#0047e1 100%
	);
}

@media (prefers-color-scheme: dark) {
	.gradient-border {
		background-color: rgba(20, 20, 20, 0.3);
	}

	.gradient-border::before {
		background: linear-gradient(
			90deg,
			#303030 0%,
			#303030 25%,
			#00dc82 50%,
			#36e4da 75%,
			#0047e1 100%
		);
	}
}

#gradient-border-dark {
	background-color: rgba(20, 20, 20, 0.3);
}

#gradient-border-dark .gradient-border::before {
	background: linear-gradient(
		90deg,
		#303030 0%,
		#303030 25%,
		#00dc82 50%,
		#36e4da 75%,
		#0047e1 100%
	);
}

.gradient-border::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	border-radius: 0.5rem;
	padding: 2px;
	width: 100%;
	opacity: 0.25;
	background-size: 400% auto;
	background-position: 0 0;
	transition: background-position 0.3s ease-in-out, opacity 0.2s ease-in-out;
	-webkit-mask: linear-gradient(#fff 0 0) content-box,
		linear-gradient(#fff 0 0);
	mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
	-webkit-mask-composite: xor;
	mask-composite: exclude;
}

.gradient-border:hover::before {
	background-position: -50% 0;
	opacity: 1;
}

.antialiased {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
