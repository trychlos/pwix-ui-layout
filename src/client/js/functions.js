/*
 * pwix:ui-layout/src/client/js/functions.js
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

import _ from 'lodash';

_runningUI = new ReactiveDict();

// a private function which acts as a getter/setter
//  returns the (get/set) value
const _runningDict = function( name, value ){
    if( value !== undefined ){
        _runningUI.set( name, value );
        return value;
    }
    return _runningUI.get( name );
};

_.merge( Layout, {
    // the result of the detectIt module
    //  https://www.npmjs.com/package/detect-it
    detectIt: detectIt,

    _resizeListener(){
        //console.log( 'pwix:ui-layout resizing' );
        Layout.resize( new Date());
        //Layout.height( window.innerHeight );
        //Layout.width( window.innerWidth );
        //Layout.height( window.screen.availHeight );
        //Layout.width( window.screen.availWidth );
        Layout.height( document.documentElement.clientHeight );
        Layout.width( document.documentElement.clientWidth );
        Layout.landscape( Layout.width() > Layout.height());
    },

    // reactive getters / setters
    cordova( cordova ){ return _runningDict( 'cordova', cordova ); },
    height( height ){ return _runningDict( 'height', height ); },
    landscape( landscape ){ return _runningDict( 'landscape', landscape ); },
    mobile( mobile ){ return _runningDict( 'mobile', mobile ); },
    resize( stamp ){ return _runningDict( 'resize', stamp ); },
    touchable( touchable ){ return _runningDict( 'touchable', touchable ); },
    width( width ){ return _runningDict( 'width', width ); },

    // functions
    isXS(){ return Layout.width() <= Layout.C.Breakpoints.XS },
    isSM(){ return Layout.width() <= Layout.C.Breakpoints.SM },
    isMD(){ return Layout.width() <= Layout.C.Breakpoints.MD },
    isLG(){ return Layout.width() <= Layout.C.Breakpoints.LG },
    isXL(){ return Layout.width() <= Layout.C.Breakpoints.XL },
    isXXL(){ return Layout.width() > Layout.C.Breakpoints.XL },

    view(){
        const w = Layout.width();
        //console.log( 'w='+w );
        //console.log( window );
        if( w > Layout.C.Breakpoints.XL ){
            return Layout.C.View.XXL;
        }
        if( w >= Layout.C.Breakpoints.LG ){
            return Layout.C.View.XL;
        }
        if( w >= Layout.C.Breakpoints.MD ){
            return Layout.C.View.LG;
        }
        if( w >= Layout.C.Breakpoints.SM ){
            return Layout.C.View.MD;
        }
        if( w >= Layout.C.Breakpoints.XS ){
            return Layout.C.View.SM;
        }
        return Layout.C.View.XS;
    }
});

Layout._resizeListener();
Layout.cordova( Meteor.isCordova );
Layout.touchable( detectIt.primaryInput !== 'mouse' );  // 'touch'

Tracker.autorun(() => {
    const min = Layout.landscape() ? Layout.height() : Layout.width();
    Layout.mobile( Layout.cordova() || min <= Layout.C.Breakpoints.SM );
});
