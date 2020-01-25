import unzipper from 'unzipper';

const PREVIEWS_FOLDER_NAME = 'previews';

const getPreviewFile = async (source) => {
  const directory = await unzipper.Open.buffer(source);

  const preview = directory.files.find((file) =>
    file.path.includes(PREVIEWS_FOLDER_NAME)
  );

  return preview.buffer();
};

export default getPreviewFile;
