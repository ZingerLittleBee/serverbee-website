import {archEnum, getCliDownloadUrl, getCliFileName, getCliZipFileName, moduleEnum, osEnum} from "@/config";

export const install = (os: osEnum, arch: archEnum, module: moduleEnum) => {
    const url = getCliDownloadUrl(os, arch, module);
    const zipFileName = getCliZipFileName(os, arch, module);
    const fileName = getCliFileName(module)

    return `mkdir serverbee
cd serverbee
wget ${url}
unzip ${zipFileName}
./${fileName}`
}
