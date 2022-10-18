# Kornucopia

An unofficial, single page, interactive website for the nu metal band Korn.

## Table of contents

* [Kornucopia](#kornucopia)
    * [Table of contents](#table-of-contents)
    * [Documentation](#documentation)
    * [Development dependencies](#development-dependencies)
    * [Building and running the development server](#building-and-running-the-development-server)
        * [Standalone](#standalone)
        * [VS Code](#vs-code)
    * [Code structure](#code-structure)
    * [Production server](#production-server)
    * [Debugging](#debugging)
        * [Additional dependencies](#additional-dependencies)
        * [VS Code](#vs-code-1)
    * [License](#license)

## Documentation

* POSIX shell commands to be run as user are denoted by shell code blocks.
* 'Visual Studio Code' and 'Code - OSS' are abbreviated to VS Code.
* Documentation and code symbols are written in United States English for
  integration with different programs and frameworks.

## Development dependencies

- `yarn`

## Building and running the development server

The local server runs on http://localhost:8080. Supported browsers are
[Chromium](https://www.chromium.org/Home/) (version 100 and newer) and
[Mozilla Firefox](https://www.mozilla.org/en-GB/firefox/)
(version 100 and newer).

### Standalone

```shell
yarn install && yarn serve
```

### VS Code

* Run Build Task (`Start development environment`)
    * Default keybind: `shift + ctrl/cmd + b`

## Code structure

* Written in HTML, CSS, and TypeScript.
* Built using [Yarn](https://yarnpkg.com/) and [Parcel](https://parceljs.org/).
* Lines are no longer than 80 characters, unless readability is affected.
* Tab width is 4 spaces, excluding generated files such as `package.json` in
  which the default of a given tool is used.
* Source code is located in `src/`.
* Uses [JSDoc](https://jsdoc.app/) comments.

## Production server

TODO

## Debugging

### Additional dependencies

* `chromium` >= 100

### VS Code

* Run the default launch task (`Launch Chrome against localhost`)
    * Default keybind: `F5`

## License

Copyright (c) 2022 Natalie Wiggins.

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <https://www.gnu.org/licenses/>.

Written by Natalie Wiggins.

Assets under `static` may be held under licenses which differ from the source
code for the project and website. In this case, see the corresponding `LICENSE`
and `NOTICE` files in asset subdirectories for details.

See `LICENSE` and `AUTHORS` for more information.
