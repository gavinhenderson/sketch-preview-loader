import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

import schema from './options.json';
import getPreviewFile from './get-preview-file';

export default async function loader(source) {
  const options = getOptions(this) || {};

  validateOptions(schema, options);

  const previewFile = await getPreviewFile(source);
  this.emitFile('./preview.png', previewFile);

  return `export default 'test'`;
}

export const raw = true;
