import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

import schema from './options.json';
import getPreviewFile from './get-preview-file';

const DEFAULT_OPTIONS = { withMeta: false };

async function asyncLoader(source) {
  const userOptions = this.query ? getOptions(this) : {};
  const options = { ...DEFAULT_OPTIONS, ...userOptions };

  validateOptions(schema, options);

  const previewFile = await getPreviewFile(source);

  return previewFile;
}

export default function loader(...args) {
  const callback = this.async();
  const bindedLoader = asyncLoader.bind(this);

  const promise = new Promise(async (res, rej) => {
    try {
      const loaderResult = await bindedLoader(...args);
      res(loaderResult);
    } catch (e) {
      rej(e);
    }
  });

  promise.then((content) => callback(null, content)).catch((e) => callback(e));
}

export const raw = true;
