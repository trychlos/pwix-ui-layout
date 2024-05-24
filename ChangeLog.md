# pwix:layout

## ChangeLog

### 1.3.1-rc

    Release date: 

    - Meteor 3.0 ready

### 1.3.0

    Release date: 2023- 7- 4

    - Rename css/ui_constants.less to stylesheets/layout.less
    - Rename globaly exported uiLayout to Layout
    - Review constants organization to not pollute global space
    - Have (more standard) XS, SM, MD, LG and XL sizes

### 1.2.3

    Release date: 2023- 6-22

    - Fix Layout client setup

### 1.2.2

    Release date: 2023- 6-20

    - Fix Layout initialization
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
- Last updated on 2023, July, 4th
