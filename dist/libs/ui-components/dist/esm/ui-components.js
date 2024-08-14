import { p as promiseResolve, b as bootstrapLazy } from './index-5bb720a0.js';
export { s as setNonce } from './index-5bb720a0.js';

/*
 Stencil Client Patch Browser v2.22.3 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["assessment-component",[[1,"assessment-component",{"questions":[16],"resultsIntro":[1,"results-intro"],"showProgress":[4,"show-progress"],"currentPage":[32],"answers":[32],"validationErrors":[32],"completedPages":[32],"searchResults":[32],"searchLoading":[32]}]]],["my-component",[[1,"my-component",{"first":[1],"middle":[16],"last":[1]}]]]], options);
});
