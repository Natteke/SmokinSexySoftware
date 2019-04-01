const path = require('path');

module.exports = (config) => {
    const stage = config.production ? 'dist' : 'dev';
    const pefix = config.production ? '' : '.test';
    const name = config.packageName;
    return {
        entry: {
            [name]: `./packages/${name}/src/index.js`,
        },
        output: {
            path: path.resolve('packages', name, stage),
            filename: `${name}${pefix}.js`,
            libraryTarget: 'umd',
            libraryExport: 'default',
            umdNamedDefine: true,
            library: '[name]',
        },
    };
};
