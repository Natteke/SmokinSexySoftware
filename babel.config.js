module.exports = (api) => {
    api.cache(true);
    const presets = [
        '@babel/preset-env',
    ];
    const plugins = [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-transform-object-assign',
        '@babel/plugin-proposal-export-default-from',
    ];

    return {
        presets,
        plugins,
    };
};
