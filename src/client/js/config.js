/*
 * pwix:layout/src/client/js/config.js
 */

import { ReactiveDict } from 'meteor/reactive-dict';
import { Tracker } from 'meteor/tracker';

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
        uiLayout.runningUI.set( name, value );
        return value;
    }
    return uiLayout.runningUI.get( name );
};

uiLayout = {
    ...uiLayout,
    ...{
        // the result of the detectIt module
        //  https://www.npmjs.com/package/detect-it
        detectIt: detectIt,

        runningUI: new ReactiveDict(),

        resizeListener(){
            console.log( 'pwix:layout resizing' );
            uiLayout.resize( new Date());
            uiLayout.height( window.innerHeight );
            uiLayout.width( window.innerWidth );
            uiLayout.landscape( uiLayout.width() > uiLayout.height());
        },

        // reactive getters / setters
        cordova( mobile ){ return _runningDict( 'mobile', mobile ); },
        height( height ){ return _runningDict( 'height', height ); },
        landscape( landscape ){ return _runningDict( 'landscape', landscape ); },
        mobile( mobile ){ return _runningDict( 'mobile', mobile ); },
        resize( stamp ){ return _runningDict( 'resize', stamp ); },
        touchable( touchable ){ return _runningDict( 'touchable', touchable ); },
        width( width ){ return _runningDict( 'width', width ); },
        view(){
            const w = uiLayout.width();
            if( w >= UI_MD_WIDTH ){
                return UI_VIEW_N;
            }
            if( w >= UI_SM_WIDTH ){
                return UI_VIEW_MD;
            }
            return UI_VIEW_SM;
        }
    }
}

uiLayout.resizeListener();
uiLayout.cordova( Meteor.isCordova );
uiLayout.touchable( detectIt.primaryInput !== 'mouse' );  // 'touch'

Tracker.autorun(() => {
    let mobile = uiLayout.cordova();
    const min = uiLayout.height();
    const width = uiLayout.width();
    if( width < min ){
        min = width;
    }
    uiLayout.mobile( mobile || min < UI_SM_WIDTH );
});
