/*
 * pwix:layout/src/cient/js/startup.js
 */

Meteor.startup(() => {
    //console.log( 'pwix:layout/src/client/js/startup.js Layout=', Layout );
});

Meteor.startup(() => {
    window.addEventListener( 'resize', () => {
        Layout.resizeListener();
    });
});
