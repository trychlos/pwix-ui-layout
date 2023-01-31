/*
 * pwix:layout/src/server/js/check_npms.js
 */

import { checkNpmVersions } from 'meteor/tmeasday:check-npm-versions';

checkNpmVersions({
    'detect-it': '^5.0.1'
}, 'pwix:layout' );
