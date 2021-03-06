module.exports = {
  presets: [
    [
      '@babel/preset-env', {
        targets: {
          browsers: ['last 2 versions'],
        },
        useBuiltIns: 'usage',
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
};
