/*
 * pwix:layout/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
    'detect-it': '^4.0.1'
}, 'pwix:layout' );
