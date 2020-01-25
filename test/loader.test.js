import fs from 'fs';
import path from 'path';

import compiler from './compiler';

const ASSET_PATH = path.join(__dirname, './assets/preview.png');

describe('When you give webpack a valid schema', () => {
  it('the preview matches expected', async () => {
    const { stats, fileSystem } = await compiler('./assets/Example.sketch');
    const output = stats.toJson().modules[0].source;

    const preview = fileSystem.readFileSync('./test/preview.png');
    const expectedPreview = fs.readFileSync(ASSET_PATH);

    expect(preview).toEqual(expectedPreview);
    expect(output).toBe("export default 'test'");
  });
});

describe('When you give webpack an invalid schema', () => {
  it('gives you a validation error', async () => {
    const options = {
      nonsenseKey: 'nonsenseValue',
    };

    let error = null;

    try {
      await compiler('./assets/Example.sketch', options);
    } catch (e) {
      error = e;
    }

    expect(error).toBeTruthy();
    expect(error.message.includes('ValidationError')).toBeTruthy();
  });
});
