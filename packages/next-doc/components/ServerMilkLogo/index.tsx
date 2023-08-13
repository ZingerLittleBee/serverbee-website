import React from 'react'
import GithubIcon from "@site/src/components/icons/GithubIcon";

export default function ServerMilkLogo() {
    return (
        <div className='flex items-center'>
            <img
                src={require('@site/static/img/serverbee-desktop.png').default}
                alt='Index'
                width='100'
                height='100'
            />
            <div className='flex flex-col space-y-1'>
                <span className='flex items-center text-2xl font-semibold'>
                    ServerMilk
                    <a
                        href='https://github.com/ZingerLittleBee/ServerMilk'
                        target='_blank'
                        className='flex ml-2 hover:opacity-60'><GithubIcon width='25px' className='fill-gray-600 dark:fill-gray-300'/>
                    </a>
                </span>
                <span className='text-md font-medium text-[#999]'>ServerBee 服务端桌面程序</span>
            </div>
        </div>
    )
}
