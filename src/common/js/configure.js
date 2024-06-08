/*
 * pwix:ui-layout/src/common/js/configure.js
 */

import _ from 'lodash';

UILayout._conf = {};

UILayout._defaults = {
    hiddenClass: 'hidden',
    visibleClass: 'visible',
    cordovaClass: '',
    touchableClass: '',
    mobileClass: '',
    landscapeClass: '',
    portraitClass: '',
    verbosity: UILayout.C.Verbose.CONFIGURE
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
UILayout.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( UILayout._conf, UILayout._defaults, o );
        // be verbose if asked for
        if( UILayout._conf.verbosity & UILayout.C.Verbose.CONFIGURE ){
            //console.log( 'pwix:ui-layout configure() with', o, 'building', UILayout._conf );
            console.log( 'pwix:ui-layout configure() with', o );
        }
    }
    // also acts as a getter
    return UILayout._conf;
};

_.merge( UILayout._conf, UILayout._defaults );
