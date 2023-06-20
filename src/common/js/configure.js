/*
 * pwix:layout/src/common/js/configure.js
 */

import _ from 'lodash';

uiLayout._conf = {};

uiLayout._defaults = {
    hiddenClass: 'hidden',
    visibleClass: 'visible',
    cordovaClass: '',
    touchableClass: '',
    mobileClass: '',
    landscapeClass: '',
    portraitClass: ''
};

/**
 * @summary Get/set the package configuration
 *  Should be called *in same terms* both by the client and the server
 * @param {Object} o configuration options
 * @returns {Object} the package configuration
 */
uiLayout.configure = function( o ){
    if( o && _.isObject( o )){
        _.merge( uiLayout._conf, uiLayout._defaults, o );
        console.log( 'pwix:layout configure() with', o, 'building', uiLayout._conf );
    }
    return uiLayout._conf;
};

_.merge( uiLayout._conf, uiLayout._defaults );
