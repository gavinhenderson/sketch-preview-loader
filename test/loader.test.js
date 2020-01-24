import compiler from './compiler';

test('returns test when you pass it a sketch filese', async () => {
  const stats = await compiler('./assets/Example.sketch');
  const output = stats.toJson().modules[0].source;

  expect(output).toBe("export default 'test'");
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
