/*
 * pwix:ui-layout/src/client/js/blaze.js
 *
 *  Register global helpers.
 */
import { Template } from 'meteor/templating';

// class-name helper
//  let the application insert a predefined class
Template.registerHelper( 'uiCordovaClass', function(){
    return UILayout.cordova() ? UILayout._conf.cordovaClass : '';
});

// class-name helper
Template.registerHelper( 'uiTouchableClass', function(){
    return UILayout.touchable() ? UILayout._conf.touchableClass : '';
});

// class-name helper
Template.registerHelper( 'uiMobileClass', function(){
    return UILayout.mobile() ? UILayout._conf.mobileClass : '';
});

// class-name helper
Template.registerHelper( 'uiLandscapeClass', function(){
    return UILayout.landscape() ? UILayout._conf.landscapeClass : '';
});

// class-name helper
Template.registerHelper( 'uiPortraitClass', function(){
    return UILayout.Portrait() ? UILayout._conf.portraitClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfCordova', function(){
    return UILayout.cordova() ? UILayout._conf.hiddenClass :'';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfCordova', function(){
    return UILayout.cordova() ? UILayout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfTouchable', function(){
    return UILayout.touchable() ? UILayout._conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfTouchable', function(){
    return UILayout.touchable() ? UILayout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfMobile', function(){
    return UILayout.mobile() ? UILayout._conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfMobile', function(){
    return UILayout.mobile() ? UILayout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfLandscape', function(){
    return UILayout.landscape() ? UILayout._conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfLandscape', function(){
    return UILayout.landscape() ? UILayout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfPortrait', function(){
    return UILayout.landscape() ? '' : UILayout._conf.hiddenClass;
});

// class-name helper
Template.registerHelper( 'uiVisibleIfPortrait', function(){
    return UILayout.landscape() ? '' : UILayout._conf.visibleClass;
});

// boolean helper
Template.registerHelper( 'uiCordova', function(){
    return UILayout.cordova();
});

// boolean helper
Template.registerHelper( 'uiTouchable', function(){
    return UILayout.touchable();
});

// boolean helper
Template.registerHelper( 'uiMobile', function(){
    return UILayout.mobile();
});

// boolean helper
Template.registerHelper( 'uiLandscape', function(){
    return UILayout.landscape();
});

// boolean helper
Template.registerHelper( 'uiPortrait', function(){
    return !UILayout.landscape();
});

// view helper
Template.registerHelper( 'uiView', function(){
    return UILayout.view();
});

// view helper
Template.registerHelper( 'uiXSView', function(){
    return UILayout.width() <= UILayout.C.Breakpoints.XS;
});

// view helper
Template.registerHelper( 'uiSMView', function(){
    return UILayout.width() <= UILayout.C.Breakpoints.SM;
});

// view helper
Template.registerHelper( 'uiMDView', function(){
    return UILayout.width() <= UILayout.C.Breakpoints.MD;
});

// view helper
Template.registerHelper( 'uiLGView', function(){
    return UILayout.width() <= UILayout.C.Breakpoints.LG;
});

// view helper
Template.registerHelper( 'uiXLView', function(){
    return UILayout.width() <= UILayout.C.Breakpoints.XL;
});

// view helper
Template.registerHelper( 'uiXXLView', function(){
    return UILayout.width() > UILayout.C.Breakpoints.XL;
});
