import path from 'path';

import webpack from 'webpack';
import { createFsFromVolume, Volume } from 'memfs';
import joinPath from 'memory-fs/lib/join';

export default (fixture) => {
  const compiler = webpack({
    context: __dirname,
    entry: `./${fixture}`,
    output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.txt$/,
          use: {
            loader: path.resolve(__dirname, '../_src/loader.js'),
            options: {
              name: 'Alice',
            },
          },
        },
      ],
    },
  });

  compiler.outputFileSystem = createFsFromVolume(new Volume());
  compiler.outputFileSystem.join = joinPath;

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) return reject(err);
      if (stats.hasErrors()) return reject(new Error(stats.toJson().errors));

      return resolve(stats);
    });
  });
};
