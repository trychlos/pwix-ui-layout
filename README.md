# pwix:layout

## Rationale

A client-only Meteor helper package to detect at runtime the nature of the user interface to be displayed:

- either in portrait or paysage mode
- either for a large screen (desktop) or a small one (mobile)
- with or without a keyboard/mouse
- with or without a touchable device.

In a mobile (Cordova) application, routes are not displayed as they are in a web browser, but even if routes
are not directly available to the user, they are still handled under the hood.

So, we must deal with three runtime environments

- Cordova emulation of a mobile application
- web browser on a touch device

     These two runtime environments are quite similar in that they are both
     restrictives in the amount of displayable informations.

     Differences come mainly from the available display size which may range
     from very small (smartphone) to very large (high-res tv). They are for
     now resolved through CSS media queries. Some menu-driven layout changes
     may be planned later depending of identified use cases.

- web browser on a desktop (+mouse) device

This package aims to provide all that is needed by an application in order to handle
all possible cases of running devices.

## Breakpoints

The package defines some breakpoints, along with corresponding `less` constants. These breakpoints have been carefully chosen to best suit the majority of the display resolution seen on the web, as provided by [statcounter Global stats](https://gs.statcounter.com/screen-resolution-stats). The rationale has been:

- first, consider only known display resolutions so that percents sum to 100%, thus ignoring the `other` category
- starting from that, breakpoints are chosen to roughly cover equivalent parts of the population, and as multiples of 16px which is the standard default size for `1em`:

     - a `xs` extra small display, until 384px, which covers about 29%
     - a `sm` small display, until 432px, which covers additional 32%
     - a `md` medium display, until 800px, which covers still 16%
     - a `st` standard display, until 1024px, which covers (only) 10%
     - a `lg` large display, until 1920px, which covers remaining 14%
     - categorizing larger display as extra large `xl`.

This eventually leads to following importable constants:

- `@ui-xs-width` is 384px
- `@ui-sm-width` is 432px
- `@ui-md-width` is 800px
- `@ui-st-width` is 1024px
- `@ui-lg-width` is 1920px

These constants are thought to be used in media queries, and can be imported in an
application `less` file as:
```
    @import "{pwix:layout}/src/client/css/ui_constants.less";
```

## Configuration

The package's behavior can be configured through a call to the `uiLayout.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

Known configuration options are:

- `hiddenClass`

    The class to be returned by the package helpers to hide a DOM element.

     Defaut value is `hidden`.

- `visibleClass`

     The class to be returned by the package helpers to show a DOM element.

     Defaut value is `visible`.

- `cordovaClass`

     The class to be returned by the package helpers when running in a Cordova environment.

     Defaut value is empty.

- `touchableClass`

     The class to be returned by the package helpers when running on a device whose primary input is a touchpad.

     Defaut value is empty.

- `mobileClass`

     The class to be returned by the package helpers when the environment seems to be a mobile.

     Defaut value is empty.

- `landscapeClass`

     The class to be returned by the package helpers when running in landscape mode.

     Defaut value is empty.

- `portraitClass`

     The class to be returned by the package helpers when running in portrait mode.

     Defaut value is empty.

Please note, as an explicit reminder for the fools, that, because the Meteor packages are instanciated at application level, they can be configured once at most, and only once at most. Each addtionnal call to `uiLayout.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## Provides

### A global object

- `uiLayout`

### The detectIt result

- `uiLayout.detectIt{ ... }`

The result of the detectIt analyse (see https://www.npmjs.com/package/detect-it).

### Methods

- `uiLayout.cordova()`

     Whether we are running a mobile (Cordova) application.

- `uiLayout.height()`

     The current document's viewport height.

     A reactive data source.

- `uiLayout.isXS()`
- `uiLayout.isSM()`
- `uiLayout.isMD()`
- `uiLayout.isST()`
- `uiLayout.isLG()`

     Returns `true` if the width of the display is less than or equal to the corresponding breakpoint.

     A reactive data source.

- `uiLayout.isXL()`

     Returns `true` if the width of the display is extra large, _i.e._ greater than the `@ui-lg-width` breakpoint.

     A reactive data source.

- `uiLayout.landscape()`

     Whether we are using a landscape layout.

     A reactive data source.

- `uiLayout.mobile()`

     Whether we are running on a mobile device.

     Please note that, contrarily to other datas, whether we are running, or not, on a mobile device, say a phone,
     is only a hint, as we do not have any objective way to detect this type of environment.

     For now, we are tracking a touchable device with a small resolution, or a Cordova environment.

- `uiLayout.resize()`

     The last resize event timestamp.

     A reactive data source.

- `uiLayout.touchable()`

     Whether a touchable device is the primary input way (i.e. no keyboard nor mouse).

- `uiLayout.view()`

     Returns a `UI_VIEW_XS/SM/MD/ST/LG/XL` constant which corresponds to the current size of the viewport.

     A reactive data source.

- `uiLayout.width()`

     The browser viewport width.

     A reactive data source.

### Constants

- `UI_XS_WIDTH`

     an integer constant with `@ui-xs-width` value

- `UI_SM_WIDTH`

     an integer constant with `@ui-sm-width` value

- `UI_MD_WIDTH`

     an integer constant with `@ui-md-width` value

- `UI_ST_WIDTH`

     an integer constant with `@ui-st-width` value

- `UI_LG_WIDTH`

     an integer constant with `@ui-lg-width` value

- `UI_VIEW_XS`

     A constant for an extra small width view, which may be tested againt the result of `uiLayout.view()`

- `UI_VIEW_SM`

     A constant for a small width view, which may be tested againt the result of `uiLayout.view()`

- `UI_VIEW_MD`

     A constant for a medium width view, which may be tested againt the result of `uiLayout.view()`

- `UI_VIEW_ST`

     A constant for a standard width view, which may be tested againt the result of `uiLayout.view()`

- `UI_VIEW_LG`

     A constant for a large width view, which may be tested againt the result of `uiLayout.view()`

- `UI_VIEW_XL`

     A constant for an extra large width view, which may be tested againt the result of `uiLayout.view()`

### References

#### `uiLayout.iBreakpoints`

The array of defined (integer values) breakpoints.

#### `uiLayout.cBreakpoints`

The array of defined (string constants) breakpoints.

### Blaze helpers

The package defines some globally available Blaze helpers:

- Class-name helpers: return the configured class

     - `uiCordovaClass`
     - `uiTouchableClass`
     - `uiMobileClass`
     - `uiLandscapeClass`
     - `uiPortraitClass`

- Class-name helpers: return the 'hidden' or 'visible' class as configured

     - `uiHiddenIfCordova`
     - `uiVisibleIfCordova`
     - `uiHiddenIfTouchable`
     - `uiVisibleIfTouchable`
     - `uiHiddenIfMobile`
     - `uiVisibleIfMobile`
     - `uiHiddenIfLandscape`
     - `uiVisibleIfLandscape`
     - `uiHiddenIfPortrait`
     - `uiVisibleIfPortrait`

- Boolean helpers

     - `uiCordova`
     - `uiTouchable`
     - `uiMobile`
     - `uiLandscape`
     - `uiPortrait`

- Sizing helpers

     - `uiView`

          Returns the current view size as a string constant.

     - `uiXSView`
     - `uiSMView`
     - `uiMDView`
     - `uiSTView`
     - `uiLGView`

          Returns `true` if the width of the display is less than or equal to the corresponding breakpoint.

     - `uiXLView`

          Returns `true` if the width of the display is extra large, _i.e._ greater than the `@ui-lg-breakpoint` breakpoint.

## Maintainer reminder - Test environments

As a reminder, we have tested this package on following devices:

- XPS13 HDPI: 3200x1800px
- Samsung Tab S: 1280x680px
- Samsung S8: 360x670

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.2.1:
```
    'detect-it': '^4.0.1',
    'lodash': '^4.17.0'
```

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

---
P. Wieser
- Last updated on 2023, June 20th
