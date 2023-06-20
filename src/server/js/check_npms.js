/*
 * pwix:layout/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

if( false ){
    require( 'detect-it/package.json' );    // whitelisting required
}

checkNpmVersions({
    'detect-it': '^4.0.1',
    'lodash': '^4.17.0'
},
    'pwix:layout'
);
