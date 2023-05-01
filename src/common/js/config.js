/*
 * pwix:layout/src/common/js/config.js
 */

import merge from 'merge';

//console.log( 'pwix:layout/src/common/js/config.js defining globally exported uiLayout object' );

uiLayout = {
    // client-specific data and functions
    client: {},

    conf: {},

    // should be *in same terms* called both by the client and the server
    configure: function( o ){
        console.log( 'pwix:layout configure() with', o );
        uiLayout.conf = merge.recursive( true, uiLayout._defaults, o );
    },

    // server-specific data and functions
    server: {}
};
