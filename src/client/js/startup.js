/*
 * pwix:ui-layout/src/cient/js/startup.js
 */

// install the resize listener at startup
Meteor.startup(() => {
    window.addEventListener( 'resize', () => {
        UILayout._resizeListener();
    });
});
