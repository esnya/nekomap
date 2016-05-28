module.exports = {
    devtool: 'source-map',
    entry: './src/browser/index.js',
    module: {
        loaders: [
            { loader: 'babel-loader' },
        ],
    },
    output: {
        filename: 'browser.js',
        path: './dist/js',
    },
};
