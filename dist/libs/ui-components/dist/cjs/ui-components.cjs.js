'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-0af484e5.js');

/*
 Stencil Client Patch Browser v2.22.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('ui-components.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["assessment-component.cjs",[[1,"assessment-component",{"questions":[16],"resultsIntro":[1,"results-intro"],"showProgress":[4,"show-progress"],"currentPage":[32],"answers":[32],"validationErrors":[32],"completedPages":[32],"searchResults":[32],"searchLoading":[32]}]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[16],"last":[1]}]]]], options);
});

exports.setNonce = index.setNonce;
