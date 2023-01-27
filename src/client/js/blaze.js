/*
 * pwix:layout/src/client/js/blaze.js
 *
 *  Register global helpers.
 */
import { Template } from 'meteor/templating';

// class-name helper
//  let the application insert a predefined class
Template.registerHelper( 'plCordovaClass', function(){
    return pwiLayout.Cordova() ? pwiLayout.conf.cordovaClass : '';
});

// class-name helper
Template.registerHelper( 'plTouchableClass', function(){
    return pwiLayout.Touchable() ? pwiLayout.conf.touchableClass : '';
});

// class-name helper
Template.registerHelper( 'plMobileClass', function(){
    return pwiLayout.Mobile() ? pwiLayout.conf.mobileClass : '';
});

// class-name helper
Template.registerHelper( 'plLandscapeClass', function(){
    return pwiLayout.Landscape() ? pwiLayout.conf.landscapeClass : '';
});

// class-name helper
Template.registerHelper( 'plPortraitClass', function(){
    return pwiLayout.Portrait() ? pwiLayout.conf.portraitClass : '';
});

// class-name helper
Template.registerHelper( 'plHiddenIfCordova', function(){
    return pwiLayout.Cordova() ? pwiLayout.conf.hiddenClass :'';
});

// class-name helper
Template.registerHelper( 'plVisibleIfCordova', function(){
    return pwiLayout.Cordova() ? pwiLayout.conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'plHiddenIfTouchable', function(){
    return pwiLayout.Touchable() ? pwiLayout.conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'plVisibleIfTouchable', function(){
    return pwiLayout.Touchable() ? pwiLayout.conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'plHiddenIfMobile', function(){
    return pwiLayout.Mobile() ? pwiLayout.conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'plVisibleIfMobile', function(){
    return pwiLayout.Mobile() ? pwiLayout.conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'plHiddenIfLandscape', function(){
    return pwiLayout.Landscape() ? pwiLayout.conf.hiddenClass : '';
});

// class-name helper
Template.registerHelper( 'plVisibleIfLandscape', function(){
    return pwiLayout.Landscape() ? pwiLayout.conf.visibleClass : '';
});

// class-name helper
Template.registerHelper( 'plHiddenIfPortrait', function(){
    return pwiLayout.Landscape() ? '' : pwiLayout.conf.hiddenClass;
});

// class-name helper
Template.registerHelper( 'plVisibleIfPortrait', function(){
    return pwiLayout.Landscape() ? '' : pwiLayout.conf.visibleClass;
});

// boolean helper
Template.registerHelper( 'plCordova', function(){
    return pwiLayout.Cordova();
});

// boolean helper
Template.registerHelper( 'plTouchable', function(){
    return pwiLayout.Touchable();
});

// boolean helper
Template.registerHelper( 'plMobile', function(){
    return pwiLayout.Mobile();
});

// boolean helper
Template.registerHelper( 'plLandscape', function(){
    return pwiLayout.Landscape();
});

// boolean helper
Template.registerHelper( 'plPortrait', function(){
    return !pwiLayout.Landscape();
});

// view helper
Template.registerHelper( 'plView', function(){
    return pwiLayout.View();
});

// view helper
Template.registerHelper( 'plNView', function(){
    return pwiLayout.View() === pwiLayout.VIEW_N;
});

// view helper
Template.registerHelper( 'plMDView', function(){
    return pwiLayout.View() === pwiLayout.VIEW_MD;
});

// view helper
Template.registerHelper( 'plSMView', function(){
    return pwiLayout.View() === pwiLayout.VIEW_SM;
});
