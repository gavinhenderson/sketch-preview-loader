import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

import schema from './options.json';

export default function loader(source) {
  const options = getOptions(this) || {};

  validateOptions(schema, options);

  // console.log(source);

  return `export default 'test'`;
}
