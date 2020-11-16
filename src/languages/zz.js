/*
Language: ZetZ
Category: common, system
Website: https://github.com/zetzit/zz
*/

import cLike from './c-like.js';

/** @type LanguageFn */
export default function(hljs) {
  const lang = cLike(hljs);

  // lang.disableAutodetect = false;
  lang.keywords.keyword += ' fn';
  lang.name = 'ZetZ';
  lang.aliases = ['zz', 'zetz'];
  return lang;
}
