const tap = require('tap');
const tsml = require('tsml');
const bcpUrl = require('../dist/brightcove-player-url.cjs.js');

tap.test('minimal params', (t) => {
  const first = bcpUrl({accountId: '1'});

  t.equal(first, 'https://players.brightcove.net/1/default_default/index.min.js');
  t.end();
});

tap.test('param: base', (t) => {
  const first = bcpUrl({accountId: '1', base: 'foo'});
  const second = bcpUrl({accountId: '1', base: 'bar/'});

  t.equal(first, 'foo/1/default_default/index.min.js');
  t.equal(second, 'bar/1/default_default/index.min.js');
  t.end();
});

tap.test('param: playerId', (t) => {
  const first = bcpUrl({accountId: '1', playerId: 'foo'});

  t.equal(first, 'https://players.brightcove.net/1/foo_default/index.min.js');
  t.end();
});

tap.test('param: embedId', (t) => {
  const first = bcpUrl({accountId: '1', embedId: 'foo'});

  t.equal(first, 'https://players.brightcove.net/1/default_foo/index.min.js');
  t.end();
});

tap.test('param: minified', (t) => {
  const first = bcpUrl({accountId: '1', minified: false});
  const second = bcpUrl({accountId: '1', minified: true});

  t.equal(first, 'https://players.brightcove.net/1/default_default/index.js');
  t.equal(second, 'https://players.brightcove.net/1/default_default/index.min.js');
  t.end();
});

tap.test('param: iframe', (t) => {
  const first = bcpUrl({accountId: '1', iframe: true});
  const second = bcpUrl({accountId: '1', iframe: true, minified: false});
  const third = bcpUrl({accountId: '1', iframe: true, minified: true});

  t.equal(first, 'https://players.brightcove.net/1/default_default/index.html');
  t.equal(second, 'https://players.brightcove.net/1/default_default/index.html');
  t.equal(third, 'https://players.brightcove.net/1/default_default/index.html');
  t.end();
});

tap.test('param: queryParams', (t) => {
  const empty = bcpUrl({accountId: '1', iframe: true, queryParams: {}});
  const unknown = bcpUrl({accountId: '1', iframe: true, queryParams: {foo: 'bar'}});
  const inPage = bcpUrl({accountId: '1', iframe: false, queryParams: {videoId: '123'}});

  const all = bcpUrl({
    accountId: '1',
    iframe: true,
    queryParams: {
      applicationId: 'a a',
      catalogSearch: 'b',
      catalogSequence: 'c',
      playlistId: 'd',
      playlistVideoId: 'e',
      videoId: 'f',
      ignored: 'NOPE'
    }
  });

  const json = bcpUrl({
    accountId: '1',
    iframe: true,
    queryParams: {
      applicationId: {a: 1},
      catalogSearch: {b: 2},
      catalogSequence: {c: 3},
      playlistId: {d: 4},
      playlistVideoId: {e: 5},
      videoId: {f: 6}
    }
  });

  t.equal(empty, 'https://players.brightcove.net/1/default_default/index.html');
  t.equal(unknown, 'https://players.brightcove.net/1/default_default/index.html');
  t.equal(inPage, 'https://players.brightcove.net/1/default_default/index.min.js');

  t.equal(all, tsml`
    https://players.brightcove.net/1/default_default/index.html
      ?applicationId=a%20a
      &catalogSearch=b
      &catalogSequence=c
      &playlistId=d
      &playlistVideoId=e
      &videoId=f`);

  t.equal(json, tsml`
    https://players.brightcove.net/1/default_default/index.html
      ?applicationId=%5Bobject%20Object%5D
      &catalogSearch=%7B%22b%22%3A2%7D
      &catalogSequence=%7B%22c%22%3A3%7D
      &playlistId=%5Bobject%20Object%5D
      &playlistVideoId=%5Bobject%20Object%5D
      &videoId=%5Bobject%20Object%5D`);

  t.done();
});
