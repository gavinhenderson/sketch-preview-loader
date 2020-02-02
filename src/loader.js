import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';
import fileLoader from 'file-loader';
import imageLoader from 'image-webpack-loader';

import schema from './options.json';
import getPreviewFile from './get-preview-file';

export default async function loader(source) {
  const options = getOptions(this) || {};

  validateOptions(schema, options);

  const previewFile = await getPreviewFile(source);

  const fileLoaderOutput = fileLoader(previewFile);
  const imageLoaderOutput = imageLoader(fileLoaderOutput).bind(this);

  return imageLoaderOutput;
}

export const raw = true;
