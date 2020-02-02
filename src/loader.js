import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import fileLoader from 'file-loader';
import imageLoader from 'image-webpack-loader';

import schema from './options.json';
import getPreviewFile from './get-preview-file';

const DEFAULT_OPTIONS = { withMeta: false };

export default async function loader(source) {
  const userOptions = this.query ? getOptions(this) : {};
  const options = { ...DEFAULT_OPTIONS, ...userOptions };

  validateOptions(schema, options);

  const previewFile = await getPreviewFile(source);

  // const fileLoaderOutput = fileLoader(previewFile);
  // const imageLoaderOutput = imageLoader(fileLoaderOutput).bind(this);

  console.log('GOT THIS FAR');

  return 'export default "Hey Alice!\\n"';
}

export const raw = true;
