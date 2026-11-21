# qbrt-flash-example
A public domain template repository for use of [qbrt-flash](https://github.com/SNBeast/qbrt-flash/).

## index.js
An example driver for qbrt-flash builds, which feeds qbrt-flash the app directory (`app`) and the target platform (`win32`, `darwin`, `darwinLegacy`).

## app
The directory for configuring the output app. A custom driver may specify any valid name for this directory.

### mac_icon.icns, win_icon.ico
Required for building.

Icons for the output executables.

### mac_readme.rtf
Required for building, without a modification described for `.github/workflows/build.yml`

A readme which is included in the Mac installer, which is likely to be used for instructing the user to remove the `com.apple.quarantine` xattr.

## app/app.json
Settings for the built app.

### `name`
Required for building.

The product name used in various places, like the name of the executable. Shall consist of letters, numbers, and hyphens, with neither the end nor beginning being a hyphen.

### `longName`
A product name used as the title of the app window.

### `version`
Required for building.

A [semantic version](https://semver.org/) for your application. Must additionally have each number be between 0 and 65535 inclusive.

### `identifier`
Optional to specify for building, defaults to `com.qbrt-flash.<author>.<name>` lowercased.

A reverse domain-styled identifier for the app.

### `author.name`
Required for building if `identifier` is unspecified.

If `identifier` is unspecified, then this shall consist of letters, numbers, and hyphens, with neither the end nor beginning being a hyphen.

### `appUrlStart`
The URL that the app will load on startup.

### `appUrlPattern`
A regex for URLs that the app is permitted to navigate to. URLs which do not match this pattern are instead loaded in the operating system's default handler, such as the default browser for HTTP and HTTPS links. Only applies to the top-level browser, not any embedded iframes or the like.

### Other fields
`app/app.json` is permitted to contain any unspecified field.

## app/shell
Optional folder containing a Gecko XUL application. If included, then it will be used instead of the [default shell app](https://github.com/SNBeast/qbrt-flash/tree/master/shell).

The entrypoint will be a `main.js` directly within this folder. If included, then any `app/app.json` field which is not marked as being for building, as well as any unspecified field, may be freely used.

Most people will not need this.

## installer.nsi, .github/workflows/build.yml
Infrastructure for building installers via Github Actions.

Most people will not need to alter these. If you do get codesigning certificates, though, there are modifications you would likely want to make to these files, one of which would be to remove the `--add-file "readme.rtf" "app/mac_readme.rtf" 330 260 \` lines in `.github/workflows/build.yml`.
