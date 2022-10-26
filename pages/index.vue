<script setup>
const props = defineProps({
	appName: {
		type: String,
		default: 'Nuxt'
	},
	version: {
		type: String,
		default: ''
	},
	title: {
		type: String,
		default: 'Welcome to Nuxt 3!'
	},
	highPerformance: {
		type: String,
		default:
			'使用高性能框架 Actix-Web 提供服务, 由 Rust 强力驱动.'
	},
	starGitHub: {
		type: String,
		default:
			'服务器程序开源, 完全透明、公开、可定制化.'
	}
})
useHead({
	title: `${props.title}`,
	script: [],
	style: [
		{
			children: `*,:before,:after{-webkit-box-sizing:border-box;box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}*{--tw-ring-inset:var(--tw-empty, );--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(14, 165, 233, .5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000}:root{-moz-tab-size:4;-o-tab-size:4;tab-size:4}a{color:inherit;text-decoration:inherit}body{margin:0;font-family:inherit;line-height:inherit}html{-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";line-height:1.5}h1,p,h2{margin:0}h1,h2{font-size:inherit;font-weight:inherit}svg{display:block;vertical-align:middle}`
		}
	]
})
</script>
<template>
	<div
		class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white min-h-screen place-content-center flex flex-col items-center justify-center p-8 text-sm sm:text-base"
	>
		<div class="grid grid-cols-2 gap-4 md:gap-8 max-w-5xl w-full z-20">
			<div class="flex flex-col justify-center items-center col-span-2">
				<div
					class="flex justify-center items-center p-6 rounded-6 serverbee-logo spotlight-logo my-6"
				>
					<img src="/img/serverbee.png" width="80" height="80" alt="serverbee logo" />
				</div>
				<div class="spotlight-wrapper">
					<div class="fixed z-10 left-0 right-0 spotlight"></div>
				</div>
				<h1 class="xl:text-5xl font-800 text-4xl mt-4">
					掌控你所有的 PC
				</h1>
				<p
					class="xl:text-2xl font-400 text-xl my-4"
					style="color: #6b7280"
				>
					跨平台、高性能、开源
				</p>
				<a href="https://apps.apple.com/us/app/serverbee/id6443553714" target="_blank">
          <div class="my-4">
            <img
              src="~/assets/dl.svg"
              alt="Download on the App Store"
            />
            <p class="text-center text-sm"
               style="color: #9ca3af"
            >1.0.0 已发布</p>
          </div>
				</a>
			</div>
			<div class="rounded p-4 flex flex-col gradient-border">
        <div class="i-akar-icons:fire text-40px"></div>
				<h1 class="font-medium text-xl my-4">特性</h1>
				<div class="flex flex-col col-span-1">
					<div>
						<p>CPU 核心</p>
						<p>系统负载</p>
						<p>内存用量</p>
						<p>磁盘读写</p>
						<p>网卡 IO</p>
						<p>进程管理</p>
					</div>
				</div>
			</div>
      <a
          href="https://github.com/ZingerLittleBee/server_bee-backend"
          target="_blank"
          rel="noopener"
          class="cursor-pointer gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col"
      >
        <div class="i-eos-icons:system-ok-outlined text-40px" />
        <h2 class="font-semibold text-xl mt-4">跨平台</h2>
        <p class="mt-2" v-text="starGitHub" />
      </a>
			<div
				rel="noopener"
				class="gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col"
			>
        <div class="i-charm:rocket text-40px"></div>
				<h2 class="font-semibold text-xl mt-4">高性能</h2>
				<p class="mt-2" v-text="highPerformance" /> </div
			><a
				href="https://github.com/ZingerLittleBee/server_bee-backend"
				target="_blank"
				rel="noopener"
				class="cursor-pointer gradient-border col-span-3 sm:col-span-1 p-4 flex flex-col"
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
	background-size: 400% auto;
	background-position: 0 0;
	opacity: 0.5;
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

.font-sans {
	font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont,
		Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif,
		'Apple Color Emoji', 'Segoe UI Emoji', Segoe UI Symbol,
		'Noto Color Emoji';
}

.antialiased {
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

@media (min-width: 640px) {
	.sm\:text-base {
		font-size: 1rem;
		line-height: 1.5rem;
	}

	.sm\:pb-2 {
		padding-bottom: 0.5rem;
	}

	.sm\:col-span-1 {
		-ms-grid-column-span: span 1 / span 1;
		grid-column: span 1 / span 1;
	}
}

@media (min-width: 768px) {
	.md\:gap-8 {
		grid-gap: 2rem;
		gap: 2rem;
	}
}

@media (prefers-color-scheme: dark) {
	.dark\:bg-black {
		--tw-bg-opacity: 1;
		background-color: rgba(0, 0, 0, var(--tw-bg-opacity));
	}

	.dark\:bg-white\/10 {
		--tw-bg-opacity: 0.1;
		background-color: rgba(255, 255, 255, var(--tw-bg-opacity));
	}

	.dark\:text-white {
		--tw-text-opacity: 1;
		color: rgba(255, 255, 255, var(--tw-text-opacity));
	}
}
</style>
