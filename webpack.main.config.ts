import type { Configuration } from 'webpack';

import { rules } from './webpack.rules';
import { plugins } from './webpack.plugins';

export const mainConfig: Configuration = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/index.ts',
  // Put your normal webpack config below here
  module: {
    rules,
  },
  plugins,
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css', '.json'],
  },
  externals: [
    // sqlite3 precisa ser tratado como externo para o webpack não tentar bundlizar
    ({ request }, callback) => {
      if (request === 'sqlite3' || request?.startsWith('sqlite3/')) {
        return callback(null, `commonjs ${request}`);
      }
      callback();
    },
  ],
  node: {
    __dirname: false,
    __filename: false,
  },
  target: 'electron-main',
};
