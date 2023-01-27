/*
 * pwix:layout/src/cient/js/startup.js
 */

Meteor.startup(() => {
    console.log( 'pwix:layout/src/client/js/startup.js Meteor.startup() pwiLayout=', pwiLayout );
});

Meteor.startup(() => {
    window.addEventListener( 'resize', () => {
        pwiLayout.resizeListener();
    });
});
