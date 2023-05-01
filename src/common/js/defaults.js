/*
 * pwix:layout/src/common/js/defaults.js
 */

import merge from 'merge';

uiLayout._defaults = {
    hiddenClass: 'hidden',
    visibleClass: 'visible',
    cordovaClass: '',
    touchableClass: '',
    mobileClass: '',
    landscapeClass: '',
    portraitClass: ''
};

uiLayout.conf = merge.recursive( true, uiLayout.conf, uiLayout._defaults );
