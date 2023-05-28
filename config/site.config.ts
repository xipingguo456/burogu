const SITE_CONFIG = {
	siteName: "Blog",
	siteLanguage: "zh-Hans",
	description: "个人博客，notion同步",
	avatarPath: "/hyoban.png",
	faviconPath: "/favicon.svg",
	links: [
		{
			type: "GitHub",
			url: "https://github.com/hyoban",
		},
		{
			type: "Twitter",
			url: "https://twitter.com/0xhyoban",
		},
		{
			type: "Email",
			url: "mailto:hi@hyoban.cc",
		},
	],
	codeTheme: {
		light: "nord",
		dark: "nord",
	},
	siteUrl: "https://hyoban.cc",
	//authorName: "Hyoban",
	//authorLink: "https://hyoban.cc",
	//authorEmail: "hi@hyoban.cc",
	timeZone: "Asia/Beijing",
	source: "notion",
} as const

export default SITE_CONFIG
