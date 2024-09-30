/** @type {import("next").NextConfig} */
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  images: {
		// domains: ['courses-top.ru', 'old-images.hb.ru-msk.vkcs.cloud']
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'old-images.hb.ru-msk.vkcs.cloud',
            pathname: '**',
        },
      ]
	},
};
