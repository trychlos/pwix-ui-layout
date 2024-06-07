/*
 * pwix:ui-layout/src/common/js/configure.js
 */

import _ from 'lodash';

Layout._conf = {};

Layout._defaults = {
    hiddenClass: 'hidden',
    visibleClass: 'visible',
    cordovaClass: '',
    touchableClass: '',
    mobileClass: '',
    landscapeClass: '',
    portraitClass: '',
    verbosity: Layout.C.Verbose.NONE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
Layout.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( Layout._conf, Layout._defaults, o );
        // be verbose if asked for
        if( Layout._conf.verbosity & Layout.C.Verbose.CONFIGURE ){
            console.log( 'pwix:ui-layout configure() with', o, 'building', Layout._conf );
        }
    }
    // also acts as a getter
    return Layout._conf;
};

_.merge( Layout._conf, Layout._defaults );
