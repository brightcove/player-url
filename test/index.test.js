const tap = require('tap');
const bcpUrl = require('../dist/brightcove-player-url.cjs.js');

tap.test('minimal arguments', (t) => {
  const first = bcpUrl({accountId: '1'});

  t.equal(first, 'https://players.brightcove.net/1/default_default/index.min.js');
  t.end();
});

tap.test('argument: base', (t) => {
  const first = bcpUrl({accountId: '1', base: 'foo'});
  const second = bcpUrl({accountId: '1', base: 'bar/'});

  t.equal(first, 'foo/1/default_default/index.min.js');
  t.equal(second, 'bar/1/default_default/index.min.js');
  t.end();
});

tap.test('argument: playerId', (t) => {
  const first = bcpUrl({accountId: '1', playerId: 'foo'});

  t.equal(first, 'https://players.brightcove.net/1/foo_default/index.min.js');
  t.end();
});

tap.test('argument: embedId', (t) => {
  const first = bcpUrl({accountId: '1', embedId: 'foo'});

  t.equal(first, 'https://players.brightcove.net/1/default_foo/index.min.js');
  t.end();
});

tap.test('argument: minified', (t) => {
  const first = bcpUrl({accountId: '1', minified: false});
  const second = bcpUrl({accountId: '1', minified: true});

  t.equal(first, 'https://players.brightcove.net/1/default_default/index.js');
  t.equal(second, 'https://players.brightcove.net/1/default_default/index.min.js');
  t.end();
});

tap.test('argument: iframe', (t) => {
  const first = bcpUrl({accountId: '1', iframe: true});
  const second = bcpUrl({accountId: '1', iframe: true, minified: false});
  const third = bcpUrl({accountId: '1', iframe: true, minified: true});

  t.equal(first, 'https://players.brightcove.net/1/default_default/index.html');
  t.equal(second, 'https://players.brightcove.net/1/default_default/index.html');
  t.equal(third, 'https://players.brightcove.net/1/default_default/index.html');
  t.end();
});
