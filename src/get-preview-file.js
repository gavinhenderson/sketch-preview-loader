import { Readable } from 'stream';

import unzipper from 'unzipper';

const PREVIEWS_FOLDER_NAME = 'previews';

const getPreviewFile = async (source) => {
  const stream = new Readable();
  stream.push(source);
  stream.push(null);

  const previewFile = await new Promise((resolve, reject) => {
    let previewFilePath = null;

    stream
      .pipe(unzipper.Parse())
      .on('entry', (entry) => {
        const { type, path } = entry;

        if (type === 'File' && path.includes(PREVIEWS_FOLDER_NAME)) {
          previewFilePath = path;
          entry.autodrain();
        } else {
          entry.autodrain();
        }
      })
      .on('finish', () => {
        if (previewFilePath) resolve(previewFilePath);
        else reject();
      })
      .on('error', reject);
  });

  return previewFile;
};

export default getPreviewFile;
