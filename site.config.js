const CONFIG = {
    // profile setting (required)
    profile: {
        name: "Lam Kha Tuan",
        image: "/avatar.svg", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
        role: "Software Developer",
        bio: "I love to develop new thing in IT sector.",
        email: "lamkhatuan@gmail.com",
        linkedin: "kha-tuấn-lâm-9a59a0235",
        github: "khatuanlam",
        instagram: "",
    },
    projects: [{
        name: `khatuanlam-log`,
        href: "https://github.com/khatuanlam/morethan-log",
    }, ],
    // blog setting (required)
    blog: {
        title: "khatuanlam-log",
        description: "welcome to morethan-log!",
        scheme: "dark", // 'light' | 'dark' | 'system'
    },

    // CONFIG configration (required)
    link: "https://khatuanlam-blog.vercel.app",
    since: 2022, // If leave this empty, current year will be used.
    lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
    ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

    // notion configuration (required)
    notionConfig: {
        pageId: process.env.NOTION_PAGE_ID,
    },

    // plugin configuration (optional)
    googleAnalytics: {
        enable: false,
        config: {
            measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
        },
    },
    googleSearchConsole: {
        enable: false,
        config: {
            siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
        },
    },
    naverSearchAdvisor: {
        enable: false,
        config: {
            siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
        },
    },
    utterances: {
        enable: true,
        config: {
            repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
            "issue-term": "og:title",
            label: "💬 Utterances",
        },
    },
    cusdis: {
        enable: false,
        config: {
            host: "https://cusdis.com",
            appid: "", // Embed Code -> data-app-id value
        },
    },
    isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
    revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }