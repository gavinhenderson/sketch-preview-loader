import { getOptions } from 'loader-utils';

export default function loader(source) {
  const options = getOptions(this);

  // console.log(options);
  // console.log(source);

  return `export default 'test'`;
}
