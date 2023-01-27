/*
 * pwix:layout/src/client/js/config.js
 */
import { ReactiveDict } from 'meteor/reactive-dict';
import detectIt from 'detect-it';

/*
 * From https://stackoverflow.com/questions/3437786/get-the-size-of-the-screen-current-web-page-and-browser-window
 *
 *  document.body.clientHeight  // Inner height of the HTML document body, including padding 
 *                              // but not the horizontal scrollbar height, border, or margin
 *
 *  screen.height               // Device screen height (i.e. all physically visible stuff)
 *  screen.availHeight          // Device screen height minus the operating system taskbar (if present)
 *  window.innerHeight          // The current document's viewport height, minus taskbars, etc.
 *  window.outerHeight          // Height the current window visibly takes up on screen 
 *                              // (including taskbars, menus, etc.)
 * 
 *  document.body.clientWidth   // Full width of the HTML page as coded, minus the vertical scroll bar
 *  screen.width                // Device screen width (i.e. all physically visible stuff)
 *  screen.availWidth           // Device screen width, minus the operating system taskbar (if present)
 *  window.innerWidth           // The browser viewport width (including vertical scroll bar, includes padding but not border or margin)
 *  window.outerWidth           // The outer window width (including vertical scroll bar,
                                // toolbars, etc., includes padding and border but not margin)
 */

// a private function which acts as a getter/setter
//  returns the (get/set) value
const _runningDict = function( name, value ){
    if( value ){
        pwiLayout.runningUI.set( name, value );
        return value;
    }
    return pwiLayout.runningUI.get( name );
};

pwiLayout = {
    ...pwiLayout,
    ...{
        // the result of the detectIt module
        //  https://www.npmjs.com/package/detect-it
        detectIt: detectIt,

        runningUI: new ReactiveDict(),

        resizeListener(){
            console.log( 'pwix:layout resizing' );
            pwiLayout.Resize( new Date());
            pwiLayout.Height( window.innerHeight );
            pwiLayout.Width( window.innerWidth );
            pwiLayout.Landscape( pwiLayout.Width() > pwiLayout.Height());
        },

        // reactive getters / setters
        uiHeight( height ){ return _runningDict( 'height', height ); },
        uiLandscape( landscape ){ return _runningDict( 'landscape', landscape ); },
        uiCordova( mobile ){ return _runningDict( 'mobile', mobile ); },
        uiResize( stamp ){ return _runningDict( 'resize', stamp ); },
        uiTouchable( touchable ){ return _runningDict( 'touchable', touchable ); },
        uiWidth( width ){ return _runningDict( 'width', width ); },

        // the size of the breakpoints as defined in /src/client/css/ui_layout.less
        SM_WIDTH: 480,
        MD_WIDTH: 768,

        // some string constants
        VIEW_N: 'VIEW_N',
        VIEW_MD: 'VIEW_MD',
        VIEW_SM: 'VIEW_SM',
        uiView(){
            const w = pwiLayout.Width();
            if( w >= pwiLayout.MD_WIDTH ){
                return pwiLayout.VIEW_N;
            }
            if( w >= pwiLayout.SM_WIDTH ){
                return pwiLayout.VIEW_MD;
            }
            return pwiLayout.VIEW_SM;
        }
    }
}

pwiLayout.resizeListener();
pwiLayout.Cordova( Meteor.isCordova );
pwiLayout.Touchable( detectIt.primaryInput !== 'mouse' );  // 'touch'
