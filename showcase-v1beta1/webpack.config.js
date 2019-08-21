const path = require('path');

module.exports = {
  mode: 'development',
  entry: './grpc_web_example.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: path.resolve(__dirname, 'node_modules/@grpc/grpc-js/build/src/channel.js'),
        use: 'null-loader',
      },
      {
        test: path.resolve(__dirname, 'node_modules/@grpc/grpc-js/build/src/channel-credentials.js'),
        use: 'null-loader',
      },
      {
        test: path.resolve(__dirname, '../node_modules/@grpc/proto-loader/build/src/index.js'),
        use: 'null-loader',
      },
      {
        test: path.resolve(__dirname, '../node_modules/@grpc/grpc-js/build/src/channel.js'),
        use: 'null-loader',
      },
      {
        test: path.resolve(__dirname, '../node_modules/@grpc/grpc-js/build/src/channel-credentials.js'),
        use: 'null-loader',
      },
      {
        test: path.resolve(__dirname, '../node_modules/retry-request/index.js'),
        use: 'null-loader',
      },
      {
        test: path.resolve(__dirname, '../node_modules/google-auth-library/build/src/index.js'),
        use: 'null-loader',
      },
    ],
  },
  node: {
    process: 'mock',
  },
};
