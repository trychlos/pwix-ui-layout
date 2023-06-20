/*
 * pwix:layout/src/common/js/config.js
 */

import _ from 'lodash';

//console.log( 'pwix:layout/src/common/js/config.js defining globally exported uiLayout object' );

uiLayout = {
    _conf: {},

    // should be *in same terms* called both by the client and the server
    configure: function( o ){
        console.log( 'pwix:layout configure() with', o );
        _.merge( uiLayout._conf, uiLayout._defaults, o );
    }
};
