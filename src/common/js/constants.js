/*
 * pwix:ui-layout/src/common/js/constants.js
 */

UILayout.C = {
    // the size of the breakpoints as defined in /src/client/stylesheets/layout.less
    Breakpoints: {
        XS:  384,
        SM:  432,
        MD:  800,
        LG: 1024,
        XL: 1920
    },

    // verbosity levels
    Verbose: {
        NONE: 0,
        CONFIGURE:      0x01 << 0,
        VIEW_MODEL:     0x01 << 1
    },

    // the view model
    //  five breakpoints means six model views
    View: {
        XS: 'XS',
        SM: 'SM',
        MD: 'MD',
        LG: 'LG',
        XL: 'XL',
        XXL: 'XXL'
    }
};
