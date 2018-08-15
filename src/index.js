import {version as VERSION} from '../package.json';

/**
 * Generate a URL to a Brightcove Player.
 *
 * @param  {Object}  params
 *         A set of parameters describing the player URL to create.
 *
 * @param  {string}  params.accountId
 *         A Brightcove account ID.
 *
 * @param  {string}  [params.playerId="default"]
 *         A Brightcove player ID.
 *
 * @param  {string}  [params.embedId="default"]
 *         A Brightcove player embed ID.
 *
 * @param  {boolean} [params.iframe=false]
 *         Whether to return a URL for an HTML document to be embedded in
 *         an iframe.
 *
 * @param  {boolean} [params.minified=true]
 *         When the `iframe` argument is `false`, this can be used to control
 *         whether the minified or unminified JavaScript URL is returned.
 *
 * @param  {string} [params.base="https://players.brightcove.net"]
 *         A base CDN protocol and hostname. Mainly used for testing.
 *
 * @return {string}
 *         A URL to a Brightcove Player.
 */
const brightcovePlayerUrl = ({
  accountId,
  base = 'https://players.brightcove.net',
  playerId = 'default',
  embedId = 'default',
  iframe = false,
  minified = true
}) => {
  let ext = '';

  if (iframe) {
    ext += 'html';
  } else {
    if (minified) {
      ext += 'min.';
    }
    ext += 'js';
  }

  if (base.charAt(base.length - 1) === '/') {
    base = base.substring(0, base.length - 1);
  }

  return `${base}/${accountId}/${playerId}_${embedId}/index.${ext}`;
};

/**
 * The version of this module.
 *
 * @type {string}
 */
brightcovePlayerUrl.VERSION = VERSION;

export default brightcovePlayerUrl;
