/*
 * pwix:layout/src/client/js/blaze.js
 *
 *  Register global helpers.
 */
import { Template } from 'meteor/templating';

// class-name helper
//  let the application insert a predefined class
Template.registerHelper( 'uiCordovaClass', function(){
    return Layout.cordova() ? Layout._conf.cordovaClass : '';
});

// class-name helper
Template.registerHelper( 'uiTouchableClass', function(){
    return Layout.touchable() ? Layout._conf.touchableClass : '';
});

// class-name helper
Template.registerHelper( 'uiMobileClass', function(){
    return Layout.mobile() ? Layout._conf.mobileClass : '';
});

// class-name helper
Template.registerHelper( 'uiLandscapeClass', function(){
    return Layout.landscape() ? Layout._conf.landscapeClass : '';
});

// class-name helper
Template.registerHelper( 'uiPortraitClass', function(){
    return Layout.Portrait() ? Layout._conf.portraitClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfCordova', function(){
    return Layout.cordova() ? Layout._conf.hiddenClass :'';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfCordova', function(){
    return Layout.cordova() ? Layout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfTouchable', function(){
    return Layout.touchable() ? Layout._conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfTouchable', function(){
    return Layout.touchable() ? Layout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfMobile', function(){
    return Layout.mobile() ? Layout._conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfMobile', function(){
    return Layout.mobile() ? Layout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfLandscape', function(){
    return Layout.landscape() ? Layout._conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfLandscape', function(){
    return Layout.landscape() ? Layout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfPortrait', function(){
    return Layout.landscape() ? '' : Layout._conf.hiddenClass;
});

// class-name helper
Template.registerHelper( 'uiVisibleIfPortrait', function(){
    return Layout.landscape() ? '' : Layout._conf.visibleClass;
});

// boolean helper
Template.registerHelper( 'uiCordova', function(){
    return Layout.cordova();
});

// boolean helper
Template.registerHelper( 'uiTouchable', function(){
    return Layout.touchable();
});

// boolean helper
Template.registerHelper( 'uiMobile', function(){
    return Layout.mobile();
});

// boolean helper
Template.registerHelper( 'uiLandscape', function(){
    return Layout.landscape();
});

// boolean helper
Template.registerHelper( 'uiPortrait', function(){
    return !Layout.landscape();
});

// view helper
Template.registerHelper( 'uiView', function(){
    return Layout.view();
});

// view helper
Template.registerHelper( 'uiXSView', function(){
    return Layout.width() <= Layout.C.Breakpoints.XS;
});

// view helper
Template.registerHelper( 'uiSMView', function(){
    return Layout.width() <= Layout.C.Breakpoints.SM;
});

// view helper
Template.registerHelper( 'uiMDView', function(){
    return Layout.width() <= Layout.C.Breakpoints.MD;
});

// view helper
Template.registerHelper( 'uiSTView', function(){
    return Layout.width() <= Layout.C.Breakpoints.ST;
});

// view helper
Template.registerHelper( 'uiLGView', function(){
    return Layout.width() <= Layout.C.Breakpoints.LG;
});

// view helper
Template.registerHelper( 'uiXLView', function(){
    return Layout.width() > Layout.C.Breakpoints.LG;
});
