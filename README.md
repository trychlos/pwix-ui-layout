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

     Differences come only from the available display size which may range
     from very small (smartphone) to very large (high-res tv). They are for
     now resolved through CSS media queries. Some menu-driven layout changes
     may be planned later depending of identified use cases.

- web browser on a desktop (+mouse) device

This package aims to provide all that is needed by an application in order to handle
all possible cases of running devices.

## Configuration

The package may be configured by calling at initialization time the `uiLayout.configure()`
function with an object containing the keys to be be configured.

Note that this object
only needs to embeds keys the application wants explicitely configure, as the corresponding
values will override the default ones.

<table>
<tr><td style="vertical-align:top;">
<code>hiddenClass</code>
</td><td style="vertical-align:top;">
The class to be returned by the package helpers to hide a DOM element.<br />
Defaut value is 'hidden'.
</td></tr>

<tr><td style="vertical-align:top;">
<code>visibleClass</code>
</td><td style="vertical-align:top;">
The class to be returned by the package helpers to show a DOM element.<br />
Defaut value is 'visible'.
</td></tr>

<tr><td style="vertical-align:top;">
<code>cordovaClass</code>
</td><td style="vertical-align:top;">
The class to be returned by the package helpers when running in a Cordova environment.<br />
Defaut value is ''.
</td></tr>

<tr><td style="vertical-align:top;">
<code>touchableClass</code>
</td><td style="vertical-align:top;">
The class to be returned by the package helpers when running on a device whose primary input is a touchpad.<br />
Defaut value is ''.
</td></tr>

<tr><td style="vertical-align:top;">
<code>mobileClass</code>
</td><td style="vertical-align:top;">
The class to be returned by the package helpers when the environment seems to be a mobile.<br />
Defaut value is ''.
</td></tr>

<tr><td style="vertical-align:top;">
<code>landscapeClass</code>
</td><td style="vertical-align:top;">
The class to be returned by the package helpers when running in landscape mode.<br />
Defaut value is ''.
</td></tr>

<tr><td style="vertical-align:top;">
<code>portraitClass</code>
</td><td style="vertical-align:top;">
The class to be returned by the package helpers when running in portrait mode.<br />
Defaut value is ''.
</td></tr>
</table>

## Breakpoints

The package defines two breakpoints, and two corresponding less constants:

- @ui-sm-width: 480px
- @ui-md-width: 768px

These constants are thought to be used in media queries, and can be imported in an
application less file as:

<code>
@import "{pwix:layout}/src/client/css/ui_layout.less";
</code>

## Provides

### A global object

- `uiLayout`

### The detectIt result

- `uiLayout.detectIt{ ... }`

The result of the detectIt analyse (see https://www.npmjs.com/package/detect-it)

### Methods

- `uiLayout.height()`

     The current document's viewport height<br />
     A reactive data source

- `uiLayout.width()`

     The browser viewport width<br />
     A reactive data source

- `uiLayout.cordova()`

     Whether we are running a mobile (Cordova) application

- `uiLayout.touchable()`

     Whether a touchable device is the primary input way (i.e. no keyboard nor mouse)

- `uiLayout.mobile()`

     Whether we are running on a mobile device

     Please note that, contrarily to other datas, whether we are running, or not, on a mobile device, say a phone,
     is only a hint, as we do not have any objective way to detect this type of environment.
     For now, we are tracking a touchable device with a small resolution, or a Cordova environment.

- `uiLayout.landscape()`

     Whether we are using a landscape layout<br />
     A reactive data source

- `uiLayout.resize()`

     The last resize event timestamp<br />
     A reactive data source

- `uiLayout.view()`

     Returns a UI_VIEW_N/MD/SM constant regarding the current size of the viewport<br />
     A reactive data source

### Constants

- UI_SM_WIDTH

     an integer constant with @ui-sm-width value

- UI_MD_WIDTH

     an integer constant with @ui-md-width value

- UI_VIEW_N

     A constant for a normal-size view, which may be tested againt the result of `uiLayout.view()`

- UI_VIEW_MD

     A constant for a medium-size view, which may be tested againt the result of `uiLayout.view()`

- UI_VIEW_SM

     A constant for a small-size view, which may be tested againt the result of `uiLayout.view()`

### Blaze helpers

The package defines some globally available Blaze helpers:

- Class-name helpers: return the configured class

     - uiCordovaClass
     - uiTouchableClass
     - uiMobileClass
     - uiLandscapeClass
     - uiPortraitClass

- Class-name helpers: return the 'hidden' or 'visible' class as configured

     - uiHiddenIfCordova
     - uiVisibleIfCordova
     - uiHiddenIfTouchable
     - uiVisibleIfTouchable
     - uiHiddenIfMobile
     - uiVisibleIfMobile
     - uiHiddenIfLandscape
     - uiVisibleIfLandscape
     - uiHiddenIfPortrait
     - uiVisibleIfPortrait

- Boolean helpers

     - uiCordova
     - uiTouchable
     - uiMobile
     - uiLandscape
     - uiPortrait

- Sizing helpers

     - uiView

          returns the current view size as a string constant

     - uiNView

          test for a normal-size view

     - uiMDView

          test for a medium-size view

     - uiSMView

          test for a small-size view

## Maintainer reminder - Test environments

As a reminder, we have tested this package on following devices:

- XPS13 HDPI:      ~2000x1000px
- Samsung Tab S:    1280x680px
- Samsung S8:       360x670

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`. 

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 1.1.0:
- printf, starting with v 4.0.

Each of these dependencies should be installed at application level:
```
    meteor npm install <package> --save
```

---
P. Wieser
- Last updated on 2023, Jan. 31st
