/*
 * pwix:layout/src/common/js/constants.js
 */

// verbosity levels

UI_VERBOSE_NONE = 0;
UI_VERBOSE_CONFIGURE = 0x01 << 0;

// the size of the breakpoints as defined in /src/client/css/ui_constants.less
UI_XS_WIDTH =  384;
UI_SM_WIDTH =  432;
UI_MD_WIDTH =  800;
UI_ST_WIDTH = 1024;
UI_LG_WIDTH = 1920;

// the view model
UI_VIEW_XS = 'UI_VIEW_XS';
UI_VIEW_SM = 'UI_VIEW_SM';
UI_VIEW_MD = 'UI_VIEW_MD';
UI_VIEW_ST = 'UI_VIEW_ST';
UI_VIEW_LG = 'UI_VIEW_LG';
UI_VIEW_XL = 'UI_VIEW_XL';

uiLayout.iBreakpoints = [
    UI_XS_WIDTH,
    UI_SM_WIDTH,
    UI_MD_WIDTH,
    UI_ST_WIDTH,
    UI_LG_WIDTH
];

uiLayout.cBreakpoints = [
    UI_VIEW_XS,
    UI_VIEW_SM,
    UI_VIEW_MD,
    UI_VIEW_ST,
    UI_VIEW_LG,
    UI_VIEW_XL
];
