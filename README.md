dome
====

Another todo cli app

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dome.svg)](https://npmjs.org/package/dome)
[![Downloads/week](https://img.shields.io/npm/dw/dome.svg)](https://npmjs.org/package/dome)
[![License](https://img.shields.io/npm/l/dome.svg)](https://github.com/ezequielmiranda87/dome/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dome
$ dome COMMAND
running command...
$ dome (-v|--version|version)
dome/0.0.0 darwin-x64 node-v11.15.0
$ dome --help [COMMAND]
USAGE
  $ dome COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dome add [FILE]`](#dome-add-file)
* [`dome hello [FILE]`](#dome-hello-file)
* [`dome help [COMMAND]`](#dome-help-command)

## `dome add [FILE]`

describe the command here

```
USAGE
  $ dome add [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/add.ts](https://github.com/ezequielmiranda87/dome/blob/v0.0.0/src/commands/add.ts)_

## `dome hello [FILE]`

This is a cli application to manage a todo list

```
USAGE
  $ dome hello [FILE]

OPTIONS
  -a, --add        show CLI help
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ dome hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ezequielmiranda87/dome/blob/v0.0.0/src/commands/hello.ts)_

## `dome help [COMMAND]`

display help for dome

```
USAGE
  $ dome help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
