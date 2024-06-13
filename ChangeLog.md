# pwix:ui-layout

## ChangeLog

### 2.0.2-rc

    Release date: 

    - 

### 2.0.1

    Release date: 2024- 6-13

    - Now defaults to (not too) verbosely configure
    - Update README

### 2.0.0

    Release date: 2024- 6- 7

    - The obsoleted `pwix:layout` package is renamed to `pwix:ui-layout`, bumping the major candidate version number
    - Include responsive stylesheet (moved from pwix:core-app)
    - Add (missing) templating dependency
    - Rename globally exported object to UILayout to be consistent with the package renaming
    - Distinguish between to-be-explicitly-imported constants and stylesheets automatically included

### 1.3.2

    Release date: 2024- 6- 7

    - Obsolete pwix-layout

### 1.3.1

    Release date: 2024- 5-24

    - Meteor 3.0 ready

### 1.3.0

    Release date: 2023- 7- 4

    - Rename css/ui_constants.less to stylesheets/layout.less
    - Rename globaly exported uiUILayout to UILayout
    - Review constants organization to not pollute global space
    - Have (more standard) XS, SM, MD, LG and XL sizes

### 1.2.3

    Release date: 2023- 6-22

    - Fix UILayout client setup

### 1.2.2

    Release date: 2023- 6-20

    - Fix UILayout initialization
    - Install a minimal verbosity level to trace configuration actions

### 1.2.1

    Release date: 2023- 6-20

    - Replace merge dependency with lodash
    - Rename conf to _conf, making clearer this is a private variable
    - Merge defaults.js and config.js into configure.js
    - configure() now acts both as a getter and a setter

### 1.2.0

    Release date: 2023- 5-11

    - Full review of the breakpoints, changing names and sizes, according to statcounter Global stats
    - Rename exported ui_layout.css to ui_constants.css
    - README: fix dependencies

### 1.1.2

    Release date: 2023- 5- 1

    - Make sure successive calls to configure() override each other (do not add each other)
    - Add merge dependency

### 1.1.1

    Release date: 2023- 1-31

    - Fix missing updates

### 1.1.0

    Release date: 2023- 1-31

    - Replace hardcoded NPM dependencies with tmeasday:check-npm-versions (runtime, server-side, development environment only)

### 1.0.0

    Release date: 2023- 1-28

    - Initial release

---
P. Wieser
- Last updated on 2024, Jun. 13th
