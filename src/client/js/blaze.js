/*
 * pwix:layout/src/client/js/blaze.js
 *
 *  Register global helpers.
 */
import { Template } from 'meteor/templating';

// class-name helper
//  let the application insert a predefined class
Template.registerHelper( 'uiCordovaClass', function(){
    return uiLayout.cordova() ? uiLayout._conf.cordovaClass : '';
});

// class-name helper
Template.registerHelper( 'uiTouchableClass', function(){
    return uiLayout.touchable() ? uiLayout._conf.touchableClass : '';
});

// class-name helper
Template.registerHelper( 'uiMobileClass', function(){
    return uiLayout.mobile() ? uiLayout._conf.mobileClass : '';
});

// class-name helper
Template.registerHelper( 'uiLandscapeClass', function(){
    return uiLayout.landscape() ? uiLayout._conf.landscapeClass : '';
});

// class-name helper
Template.registerHelper( 'uiPortraitClass', function(){
    return uiLayout.Portrait() ? uiLayout._conf.portraitClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfCordova', function(){
    return uiLayout.cordova() ? uiLayout._conf.hiddenClass :'';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfCordova', function(){
    return uiLayout.cordova() ? uiLayout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfTouchable', function(){
    return uiLayout.touchable() ? uiLayout._conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfTouchable', function(){
    return uiLayout.touchable() ? uiLayout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfMobile', function(){
    return uiLayout.mobile() ? uiLayout._conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfMobile', function(){
    return uiLayout.mobile() ? uiLayout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfLandscape', function(){
    return uiLayout.landscape() ? uiLayout._conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'uiVisibleIfLandscape', function(){
    return uiLayout.landscape() ? uiLayout._conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'uiHiddenIfPortrait', function(){
    return uiLayout.landscape() ? '' : uiLayout._conf.hiddenClass;
});

// class-name helper
Template.registerHelper( 'uiVisibleIfPortrait', function(){
    return uiLayout.landscape() ? '' : uiLayout._conf.visibleClass;
});

// boolean helper
Template.registerHelper( 'uiCordova', function(){
    return uiLayout.cordova();
});

// boolean helper
Template.registerHelper( 'uiTouchable', function(){
    return uiLayout.touchable();
});

// boolean helper
Template.registerHelper( 'uiMobile', function(){
    return uiLayout.mobile();
});

// boolean helper
Template.registerHelper( 'uiLandscape', function(){
    return uiLayout.landscape();
});

// boolean helper
Template.registerHelper( 'uiPortrait', function(){
    return !uiLayout.landscape();
});

// view helper
Template.registerHelper( 'uiView', function(){
    return uiLayout.view();
});

// view helper
Template.registerHelper( 'uiXSView', function(){
    return uiLayout.width() <= UI_XS_WIDTH;
});

// view helper
Template.registerHelper( 'uiSMView', function(){
    return uiLayout.width() <= UI_SM_WIDTH;
});

// view helper
Template.registerHelper( 'uiMDView', function(){
    return uiLayout.width() <= UI_MD_WIDTH;
});

// view helper
Template.registerHelper( 'uiSTView', function(){
    return uiLayout.width() <= UI_ST_WIDTH;
});

// view helper
Template.registerHelper( 'uiLGView', function(){
    return uiLayout.width() <= UI_LG_WIDTH;
});

// view helper
Template.registerHelper( 'uiXLView', function(){
    return uiLayout.width() > UI_LG_WIDTH;
});
