# Kornucopia

<img src="assets/icon.png" alt="Icon" width="100">

An unofficial, single page, interactive website for the nu metal band Korn.

## Table of contents

* [Kornucopia](#kornucopia)
    * [Table of contents](#table-of-contents)
    * [Documentation](#documentation)
    * [Development dependencies](#development-dependencies)
    * [Building and running the development server](#building-and-running-the-development-server)
        * [Standalone](#standalone)
        * [VS Code](#vs-code)
    * [Production server](#production-server)
    * [Code structure](#code-structure)
    * [Debugging](#debugging)
        * [Additional dependencies](#additional-dependencies)
        * [VS Code](#vs-code-1)
    * [License](#license)
        * [Exceptions](#exceptions)

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

## Production server

Run the following shell command to build the client into `dist/`:

```shell
yarn build
```

To host a production server, serve `dist/` as the server root or in an
Apache-served directory.

## Code structure

* Written in HTML, CSS, and TypeScript.
* Built using [Yarn](https://yarnpkg.com/) and [Parcel](https://parceljs.org/).
* Lines are no longer than 80 characters, unless readability or paths are
  affected.
* Tab width is 4 spaces, excluding generated files such as `package.json` in
  which the default of a given tool is used.
* Source code is located in `src/`.
* TypeScript/JavaScript source code is written with [JSDoc](https://jsdoc.app/)
  comments.

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

### Exceptions

Website text content is Public Domain.

The Kornucopia icon is Public Domain and arranged by Natalie Wiggins
(`assets/icon.*`, `static/icons/favicon.*`).

The Korn logo is copyright (c) Korn (`static/images/korn_logo.png`).

The 'Kornucopia' font (origin unrelated to the Kornucopia website) is created by
Korn and is of unknown license, however is free for both personal and commercial
use (`static/fonts/kornucopia.ttf`). The style of this font was created by
Jonathan Davis and Korn.

Cover art for the albums *Korn* (1994), *Life is Peachy* (1996),
*Follow the Leader* (1998), *Issues* (1999), *Untouchables* (2002), and
*Take a Look in the Mirror* (2003) are copyright (c) Sony BMG Music
Entertainment, all rights reserved.

Cover art for the albums *See You on the Other Side* (2005), *\[Untitled\]*
(2007), and *The Paradigm Shift* (2013) are copyright (c) Universal Music Group,
all rights reserved.

Cover art for the albums *Korn III: Remember Who You Are* (2010),
*The Path of Totality* (2011), *The Serenity of Suffering* (2016), and
*The Nothing* (2019) are copyright (c) Roadrunner Records, all rights reserved.

Cover art for the album *Requiem* (2022) is copyright (c)
Loma Vista Recordings / Concord, all rights reserved.

Aformentioned cover art is located under `static/images/cover_art/`.

See `LICENSE` and `AUTHORS` for more information.
