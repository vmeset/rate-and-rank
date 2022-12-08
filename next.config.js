/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
		domains: ['courses-top.ru']
	},
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{
						name: 'preset-default',
						params: {
						  overrides: {
							// disable plugins
							removeViewBox: false,
							}
						}
					}]
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	}
}

module.exports = nextConfig