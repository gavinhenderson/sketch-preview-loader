import compiler from './compiler';

test('returns test when you pass it a sketch filese', async () => {
  const stats = await compiler('./assets/Example.sketch');
  const output = stats.toJson().modules[0].source;

  expect(output).toBe("export default 'test'");
});
