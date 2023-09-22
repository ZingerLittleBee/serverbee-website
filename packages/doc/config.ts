const baseUrl = 'https://db.serverbee.app';

const desktopDir = 'desktop';
const cliDir = 'cli';

const desktopVersion = '2.0.0+14'
const cliVersion = '2.0.0+8'

export enum moduleEnum {
    web = 'serverbee-web',
    deploy = 'serverbee-deploy'
}

export enum archEnum {
    x86 = 'x86_64',
    arm = 'aarch64',
}

export enum osEnum {
    linux = 'unknown-linux-musl',
    mac = 'apple-darwin',
    windows = 'pc-windows-msvc'
}

const DESKTOP_BASE_URL = `${baseUrl}/${desktopDir}/v${desktopVersion}`;
const CLI_BASE_URL = `${baseUrl}/${cliDir}/v${cliVersion}`;

export const getDesktopDownloadUrl = (os: osEnum, arch?: archEnum) => {
    let fileName = ''
    switch (os) {
        case osEnum.linux:
            fileName = `server-milk_${desktopVersion}_amd64.AppImage.tar.gz`
            break;
        case osEnum.mac:
            fileName = arch === archEnum.arm ? 'ServerMilk_m1.app.tar.gz' : 'ServerMilk_x64.app.tar.gz'
            break;
        case osEnum.windows:
            fileName = `ServerMilk_${desktopVersion}_x64_en-US.msi.zip`
    }
    return `${DESKTOP_BASE_URL}/${fileName}`
}

export const getCliFileName = (module: moduleEnum) => module

export const getCliZipFileName = (os: osEnum,arch: archEnum, module: moduleEnum) => `${getCliFileName(module)}-${arch}-${os}.zip`
export const getCliDownloadUrl = (os: osEnum,arch: archEnum, module: moduleEnum) => `${CLI_BASE_URL}/${getCliZipFileName(os,arch,module)}`
