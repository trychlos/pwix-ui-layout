/*
 * pwix:layout/src/common/js/config.js
 */

//console.log( 'pwix:layout/src/common/js/config.js defining globally exported uiLayout object' );

uiLayout = {
    // client-specific data and functions
    client: {},

    conf: {
        hiddenClass: 'hidden',
        visibleClass: 'visible',
        cordovaClass: '',
        touchableClass: '',
        mobileClass: '',
        landscapeClass: '',
        portraitClass: ''
    },

    // should be *in same terms* called both by the client and the server
    configure: function( o ){
        console.log( 'pwix:layout configure() with', o );
        uiLayout.conf = { ...uiLayout.conf, ...o };
    },

    // server-specific data and functions
    server: {}
};
