/** @type {import("next").NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    env: {
        API_URL: process.env.API_URL,
        TELEGRAM_URL: process.env.TELEGRAM_URL,
        CHAT_ID: process.env.CHAT_ID,
    },
    reactStrictMode: false
};
export default nextConfig;
