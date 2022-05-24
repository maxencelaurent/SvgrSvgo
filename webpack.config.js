module.exports = {
    entry: './src/App.tsx',
    module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
      },
    ]
    },
    resolve:{
        extensions: ['.tsx', '.ts',]
    }
};
