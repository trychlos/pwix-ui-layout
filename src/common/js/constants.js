/*
 * pwix:layout/src/common/js/constants.js
 */

Layout.C = {
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
        CONFIGURE: 0x01 << 0
    },

    // the view model
    View: {
        XS: 'XS',
        SM: 'SM',
        MD: 'MD',
        LG: 'LG',
        XL: 'XL'
    }
};

Layout.C.Breakpoints.XS =  384;
Layout.C.Breakpoints.SM =  432;
Layout.C.Breakpoints.MD =  800;
Layout.C.Breakpoints.ST = 1024;
Layout.C.Breakpoints.LG = 1920;

// the view model
UI_VIEW_XS = 'UI_VIEW_XS';
UI_VIEW_SM = 'UI_VIEW_SM';
UI_VIEW_MD = 'UI_VIEW_MD';
UI_VIEW_ST = 'UI_VIEW_ST';
UI_VIEW_LG = 'UI_VIEW_LG';
UI_VIEW_XL = 'UI_VIEW_XL';

Layout.iBreakpoints = [
    Layout.C.Breakpoints.XS,
    Layout.C.Breakpoints.SM,
    Layout.C.Breakpoints.MD,
    Layout.C.Breakpoints.ST,
    Layout.C.Breakpoints.LG
];

Layout.cBreakpoints = [
    UI_VIEW_XS,
    UI_VIEW_SM,
    UI_VIEW_MD,
    UI_VIEW_ST,
    UI_VIEW_LG,
    UI_VIEW_XL
];
