module.exports = {
    plugins: {
        'postcss-import': {},
        'cssnano': {},
        'doiuse': {},
        'css-mqpacker': {},
        'precss': {},
        'postcss-colorblind': { method: 'achromatopsia'},
        'postcss-data-packer': {},
        'postcss-cssnext': {
            browsers: ['last 2 versions', '> 5%'],
        },
    },
};