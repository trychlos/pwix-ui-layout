/*
 * pwix:layout/src/common/js/defaults.js
 */

import _ from 'lodash';

uiLayout._defaults = {
    hiddenClass: 'hidden',
    visibleClass: 'visible',
    cordovaClass: '',
    touchableClass: '',
    mobileClass: '',
    landscapeClass: '',
    portraitClass: ''
};

_.merge( uiLayout._conf, uiLayout._defaults );
