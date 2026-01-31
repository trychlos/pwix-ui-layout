# pwix:ui-layout

## What is it ?

A Meteor helper package to detect at runtime the nature of the user interface to be displayed:

- either in portrait or paysage mode
- either for a large screen (desktop) or a small one (mobile)
- with or without a keyboard/mouse
- with or without a touchable device.

## Rationale

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

The package defines some breakpoints, along with corresponding `less` constants. These breakpoints have been carefully chosen to best suit the majority of the display resolution seen on the web, as provided by [statcounter Global stats](https://gs.statcounter.com/screen-resolution-stats) as of January 2023. The rationale has been:

- first, consider only known display resolutions so that percents sum to 100%, thus ignoring the `other` category
- starting from that, breakpoints are chosen to roughly cover equivalent parts of the population, and as multiples of 16px which is the standard default size for `1em`:

     - a `xs` extra small display, until 384px, which covers about 29%
     - a `sm` small display, until 432px, which covers additional 32%
     - a `md` medium display, until 800px, which covers still 16%
     - a `lg` large display, until 1024px, which covers (only) 10%
     - a `xl` extra large display, until 1920px, which covers remaining 14%
     - categorizing larger display as extra large `xl`.

This eventually leads to following importable constants:

- `@ui-xs-width` is 384px
- `@ui-sm-width` is 432px
- `@ui-md-width` is 800px
- `@ui-lg-width` is 1024px
- `@ui-xl-width` is 1920px

### Early 2026 note

At early 2026, I have reviewed the 2.0 breakpoints, against Bootstrap choices, and have asked too propositions to ChatGPT and Claude given them the same rules as defined above. Below the results:

```
               ui-layout v2.0  Bootstrap v5  ChatGPT  Claude
               --------------  ------------  -------  ------
     xs <=          384            576         384      360
     sm <=          432            768         432      432
     md <=          800            992         816      768
     lg <=         1024           1200        1440     1024
     xl <=         1920           1400        1920     1920
```

Please note that, whatever be the chosen breakpoints, what is important is how you use them in your application, which itself depends of the population and the devices of your users.

## Provides

### `UILayout`

The exported `UILayout` global object provides following items:

#### `UILayout.detectIt{ ... }`

The result of the detectIt analyse (see https://www.npmjs.com/package/detect-it).

#### Functions

##### `UILayout.cordova()`

Whether we are running a mobile (Cordova) application.

##### `UILayout.height()`

The current document's viewport height.

A reactive data source.

##### `UILayout.isXS()`
##### `UILayout.isSM()`
##### `UILayout.isMD()`
##### `UILayout.isLG()`
##### `UILayout.isXL()`

Returns `true` if the width of the display is less than or equal to the corresponding breakpoint.

Reactive data sources.

##### `UILayout.isXXL()`

Returns `true` if the display is wider than extra large, _i.e._ greater than the `@ui-xl-width` breakpoint.

A reactive data source.

##### `UILayout.landscape()`

Whether we are using a landscape layout.

A reactive data source.

##### `UILayout.mobile()`

Whether we are running on a mobile device.

Please note that, contrarily to other datas, whether we are running, or not, on a mobile device, say a phone,
is only a hint, as we do not have any objective way to detect this type of environment.

For now, we are tracking a touchable device with a small resolution, or a Cordova environment.

##### `UILayout.resize()`

The last resize event timestamp.

A reactive data source.

##### `UILayout.touchable()`

Whether a touchable device is the primary input way (i.e. no keyboard nor mouse).

##### `UILayout.view()`

Returns a `UILayout.C.View.XS/SM/MD/LG/XL/XXL` constant which corresponds to the current size of the viewport.

A reactive data source.

##### `UILayout.width()`

The browser viewport width.

A reactive data source.

#### Constants

- `UILayout.C.Breakpoints.XS`

     an integer constant with `@ui-xs-width` value

- `UILayout.C.Breakpoints.SM`

     an integer constant with `@ui-sm-width` value

- `UILayout.C.Breakpoints.MD`

     an integer constant with `@ui-md-width` value

- `UILayout.C.Breakpoints.LG`

     an integer constant with `@ui-lg-width` value

- `UILayout.C.Breakpoints.XL`

     an integer constant with `@ui-xl-width` value

- `UILayout.C.View.XS`

     A constant for an extra small width view, which may be tested againt the result of `UILayout.view()`

- `UILayout.C.View.SM`

     A constant for a small width view, which may be tested againt the result of `UILayout.view()`

- `UILayout.C.View.MD`

     A constant for a medium width view, which may be tested againt the result of `UILayout.view()`

- `UILayout.C.View.LG`

     A constant for a large width view, which may be tested againt the result of `UILayout.view()`

- `UILayout.C.View.XL`

     A constant for an extra large width view, which may be tested againt the result of `UILayout.view()`

- `UILayout.C.View.XXL`

     A constant for anything wider than an extra large width view, which may be tested againt the result of `UILayout.view()`

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
     - `uiLGView`
     - `uiXLView`

          Returns `true` if the width of the display is less than or equal to the corresponding breakpoint.

     - `uiXXLView`

          Returns `true` if the width of the display is more than extra large, _i.e._ greater than the `@ui-xl-breakpoint` breakpoint.

### LESS Stylesheets

The package provides a stylesheet to be imported in your application's `main.less` as:

```less
    @import "{pwix:ui-layout}/src/client/stylesheets/index.less";
```

#### LESS variables

- `@ui-xs-width`
- `@ui-sm-width`
- `@ui-md-width`
- `@ui-lg-width`
- `@ui-xl-width`

## Test environments

This package has been tested on following devices:

- XPS13 HDPI: 3200x1800px
     XL in landscape mode

- Samsung Tab S: 1280x680px
     MD in portrait mode
     LG in landscape mode

- Samsung Galaxy S8: 360x670
     XS in portrait mode
     MD in landscape mode

## Configuration

The package's behavior can be configured through a call to the `UILayout.configure()` method, with just a single javascript object argument, which itself should only contains the options you want override.

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

- `verbosity`

     The verbosity level.

     May be `UILayout.C.Verbose.NONE`, or a or-ed value of following:

     - `UILayout.C.Verbose.CONFIGURE`

          Trace the configuration actions.

     - `UILayout.C.Verbose.VIEW_MODEL`

          Log the current view model on the (client) console.

     Defaut value is `UILayout.C.Verbose.CONFIGURE`.

Please note, as an explicit reminder, that, because the Meteor packages are instanciated at application level, they can be configured once at most, and only once at most. Each addtionnal call to `UILayout.configure()` will just override the previous one. You have been warned: **only the application should configure a package**.

## NPM peer dependencies

Starting with v 1.1.0, and in accordance with advices from [the Meteor Guide](https://guide.meteor.com/writing-atmosphere-packages.html#peer-npm-dependencies), we no more hardcode NPM dependencies in the `Npm.depends` clause of the `package.js`.

Instead we check npm versions of installed packages at runtime, on server startup, in development environment.

Dependencies as of v 2.0.0:

```js
    'detect-it': '^4.0.1',
    'lodash': '^4.17.0'
```

Each of these dependencies should be installed at application level:

```sh
    meteor npm install <package> --save
```

## Translations

None at the moment.

## Cookies and comparable technologies

None at the moment.

## Issues & help

In case of support or error, please report your issue request to our [Issues tracker](https://github.com/trychlos/pwix-ui-layout/issues).

---
P. Wieser
- Last updated on 2024, Jun. 13th
