/** @type {import("next").NextConfig} */
// module.exports = {
//   webpack: (config) => {
//     config.module.rules.push({
//       test: /\.svg$/i,
//       use: ['@svgr/webpack'],
//     });
//     return config;
//   },
// };

module.exports = {
	images: {
		domains: ['courses-top.ru']
	},
	webpack(config, options) {
		config.module.rules.push({
			loader: '@svgr/webpack',
      issuer: /\.[jt]sx&$/,
			options: {
				prettier: false,
				svgo: true,
				svgoConfig: {
					plugins: [{ removeViewBox: false }],
				},
				titleProp: true,
			},
			test: /\.svg$/,
		});

		return config;
	},
};