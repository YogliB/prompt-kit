prompt-kit
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/prompt-kit.svg)](https://npmjs.org/package/prompt-kit)
[![Downloads/week](https://img.shields.io/npm/dw/prompt-kit.svg)](https://npmjs.org/package/prompt-kit)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g prompt-kit
$ prompt-kit COMMAND
running command...
$ prompt-kit (--version)
prompt-kit/0.0.0 darwin-arm64 node-v24.9.0
$ prompt-kit --help [COMMAND]
USAGE
  $ prompt-kit COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`prompt-kit hello PERSON`](#prompt-kit-hello-person)
* [`prompt-kit hello world`](#prompt-kit-hello-world)
* [`prompt-kit help [COMMAND]`](#prompt-kit-help-command)
* [`prompt-kit plugins`](#prompt-kit-plugins)
* [`prompt-kit plugins add PLUGIN`](#prompt-kit-plugins-add-plugin)
* [`prompt-kit plugins:inspect PLUGIN...`](#prompt-kit-pluginsinspect-plugin)
* [`prompt-kit plugins install PLUGIN`](#prompt-kit-plugins-install-plugin)
* [`prompt-kit plugins link PATH`](#prompt-kit-plugins-link-path)
* [`prompt-kit plugins remove [PLUGIN]`](#prompt-kit-plugins-remove-plugin)
* [`prompt-kit plugins reset`](#prompt-kit-plugins-reset)
* [`prompt-kit plugins uninstall [PLUGIN]`](#prompt-kit-plugins-uninstall-plugin)
* [`prompt-kit plugins unlink [PLUGIN]`](#prompt-kit-plugins-unlink-plugin)
* [`prompt-kit plugins update`](#prompt-kit-plugins-update)

## `prompt-kit hello PERSON`

Say hello

```
USAGE
  $ prompt-kit hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ prompt-kit hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/oss/prompt-kit/blob/v0.0.0/src/commands/hello/index.ts)_

## `prompt-kit hello world`

Say hello world

```
USAGE
  $ prompt-kit hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ prompt-kit hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/oss/prompt-kit/blob/v0.0.0/src/commands/hello/world.ts)_

## `prompt-kit help [COMMAND]`

Display help for prompt-kit.

```
USAGE
  $ prompt-kit help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for prompt-kit.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.33/src/commands/help.ts)_

## `prompt-kit plugins`

List installed plugins.

```
USAGE
  $ prompt-kit plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ prompt-kit plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.48/src/commands/plugins/index.ts)_

## `prompt-kit plugins add PLUGIN`

Installs a plugin into prompt-kit.

```
USAGE
  $ prompt-kit plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into prompt-kit.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PROMPT_KIT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PROMPT_KIT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ prompt-kit plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ prompt-kit plugins add myplugin

  Install a plugin from a github url.

    $ prompt-kit plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ prompt-kit plugins add someuser/someplugin
```

## `prompt-kit plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ prompt-kit plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ prompt-kit plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.48/src/commands/plugins/inspect.ts)_

## `prompt-kit plugins install PLUGIN`

Installs a plugin into prompt-kit.

```
USAGE
  $ prompt-kit plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into prompt-kit.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the PROMPT_KIT_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the PROMPT_KIT_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ prompt-kit plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ prompt-kit plugins install myplugin

  Install a plugin from a github url.

    $ prompt-kit plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ prompt-kit plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.48/src/commands/plugins/install.ts)_

## `prompt-kit plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ prompt-kit plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ prompt-kit plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.48/src/commands/plugins/link.ts)_

## `prompt-kit plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ prompt-kit plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ prompt-kit plugins unlink
  $ prompt-kit plugins remove

EXAMPLES
  $ prompt-kit plugins remove myplugin
```

## `prompt-kit plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ prompt-kit plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.48/src/commands/plugins/reset.ts)_

## `prompt-kit plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ prompt-kit plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ prompt-kit plugins unlink
  $ prompt-kit plugins remove

EXAMPLES
  $ prompt-kit plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.48/src/commands/plugins/uninstall.ts)_

## `prompt-kit plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ prompt-kit plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ prompt-kit plugins unlink
  $ prompt-kit plugins remove

EXAMPLES
  $ prompt-kit plugins unlink myplugin
```

## `prompt-kit plugins update`

Update installed plugins.

```
USAGE
  $ prompt-kit plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.48/src/commands/plugins/update.ts)_
<!-- commandsstop -->
