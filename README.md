# brightcove-player-url

A module for getting a URL to a [Brightcove Player](https://support.brightcove.com/brightcove-player).

## Installation

```sh
npm install --save @brightcove/player-url
```

## Usage

To include brightcove-player-url on your website or web application, use any of the following methods.

### ES Modules

When using in an ES modules-compatible environment or bundler like Rollup or webpack, install brightcove-player-url via npm and `import` the plugin as you would any other module.

```js
import brightcovePlayerUrl from '@brightcove/player-url';

const myPlayerUrl = brightcovePlayerUrl({
  accountId: '1234567890',
  playerId: 'abc123xyz'
});

console.log(myPlayerUrl); // https://players.brightcove.net/1234567890/abc123xyz_default/index.min.js
```

### Browserify/CommonJS

When using with Browserify, install brightcove-player-url via npm and `require` the plugin as you would any other module.

```js
var brightcovePlayerUrl = require('@brightcove/player-url');

var myPlayerUrl = brightcovePlayerUrl({
  accountId: '1234567890',
  playerId: 'abc123xyz'
});

console.log(myPlayerUrl); // https://players.brightcove.net/1234567890/abc123xyz_default/index.min.js
```

### RequireJS/AMD

When using with RequireJS (or another AMD library), get the script in whatever way you prefer and `require` the plugin as you normally would:

```js
require(['@brightcove/player-url'], function(brightcovePlayerUrl) {
  var myPlayerUrl = brightcovePlayerUrl({
    accountId: '1234567890',
    playerId: 'abc123xyz'
  });

  console.log(myPlayerUrl); // https://players.brightcove.net/1234567890/abc123xyz_default/index.min.js
});
```

### `<script>` Tag

This is the simplest case and least recommended. We expect most will bundle this module into an application or another module.

```html
<script src="//path/to/brightcove-player-url.min.js"></script>
<script>
  var myPlayerUrl = brightcovePlayerUrl({
    accountId: '1234567890',
    playerId: 'abc123xyz'
  });

  console.log(myPlayerUrl); // https://players.brightcove.net/1234567890/abc123xyz_default/index.min.js
</script>
```

## Arguments
This module takes the following arguments.

### `accountId` **REQUIRED**
Type: `string`

A Brightcove account ID.

### `playerId`
Type: `string`
Default: `"default"`

A Brightcove player ID.

### `embedId`
Type: `string`
Default: `"default"`

A Brightcove player embed ID.

### `iframe`
Type: `boolean`
Default: `false`

Whether to return a URL for an HTML document to be embedded in an iframe.

### `minified`
Type: `boolean`
Default: `true`

When the `iframe` argument is `false`, this can be used to control whether the minified or unminified JavaScript URL is returned.

### `embedId`
Type: `string`
Default: `"https://players.brightcove.net"`

A base CDN protocol and hostname. Mainly used for testing. Can have a trailing slash or not.

## License

Apache-2.0. Copyright (c) Brightcove, Inc.
