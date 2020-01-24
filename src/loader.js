import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

import schema from './options.json';
import getPreviewFile from './get-preview-file';

export default async function loader(source) {
  const options = getOptions(this) || {};

  validateOptions(schema, options);

  const previewFile = await getPreviewFile(source);

  console.log(previewFile);

  return `export default 'test'`;
}

module.exports.raw = true;
