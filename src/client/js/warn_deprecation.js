/*
 * pwix:ui-layout/src/client/js/warn_deprecation.js
 *
 * To debug the origin of the warning, have to go to DevTools, and find the CSS file which has defined this property.
 */

import { Meteor } from 'meteor/meteor';

if( Meteor.isDevelopment ){
    Meteor.startup(() => {
        const v = getComputedStyle( document.documentElement )
            .getPropertyValue( '--pwix-ui-layout__deprecated_constants_breakpoints_less' )
            .trim();
        if( v ){
            console.warn(
                'pwix:ui-layout DEPRECATION WARNING: you are importing \'src/client/constants/breakpoints.less\' which is an OBSOLETE resource. '
                + 'Write \"@import \'{pwix:ui-layout}/src/client/stylesheets/index.less\';\" instead.'
            );
            // do not provide any relevant information
            //console.warn( new Error( "Import stack (approx)" ).stack );
        }
    });
}
