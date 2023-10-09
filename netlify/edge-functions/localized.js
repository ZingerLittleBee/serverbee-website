export default async (request, context) => {
    const url = request.url

    if (!url.includes('docs.serverbee.app')) {
        return undefined
    }

    const countryCode = context.geo?.country?.code || "UNKNOWN";

    const zh = ['CN', 'TW', 'HK', 'MO', 'SG']

    if (zh.includes(countryCode)) {
        return undefined
    } else {
        if (url.includes('docs.serverbee.app/en')) {
            return undefined
        } else {
            const requestUrl = new URL(request.url);
            const newPath = `/en${requestUrl.pathname}`;
            const newUrl = new URL(newPath, requestUrl);
            return Response.redirect(newUrl)
        }
    }
};

export const config = { path: "/*" };
