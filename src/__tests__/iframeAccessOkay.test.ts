import rewire from 'rewire';

const indexRewire = rewire('../../lib/index');
const iframeAccessOkay = indexRewire.__get__('iframeAccessOkay');

test('iframeAccessOkay returns false if argument is null', () => {
  const element = null;

  expect(iframeAccessOkay(element)).toBe(false);
});


test('iframeAccessOkay returns false if exception', () => {
  const element = {
    get contentDocument(): Document {
      throw new DOMException('The operation is insecure', 'SECURITY_ERR');
    },
  } as HTMLIFrameElement;

  expect(iframeAccessOkay(element)).toBe(false);
});


test('iframeAccessOkay returns true if document is returned', () => {
  const element = {
    get contentDocument(): Document {
      return new Document();
    },
  } as HTMLIFrameElement;

  expect(iframeAccessOkay(element)).toBe(true);
});
