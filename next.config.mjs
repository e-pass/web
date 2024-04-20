/** @type {import("next").NextConfig} */
const nextConfig = {
    env: {
        API_URL: process.env.API_URL,
        TELEGRAM_URL: process.env.TELEGRAM_URL,
        CHAT_ID: process.env.CHAT_ID,
    },
    reactStrictMode: false
};
export default nextConfig;
