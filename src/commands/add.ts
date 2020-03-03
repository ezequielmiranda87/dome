import { Command, flags } from "@oclif/command";
const chalk = require('chalk')

export default class Add extends Command {
  static description = 'Add new task to the list'

  static flags = {};

  static args = [{ name: "todo" }]

  async run() {
    const { args, flags } = this.parse(Add)

    const todo = args.todo

    if (todo) {
      this.log(` ${chalk.green(['Success'])} added new task - ${todo}`)
    } else {
      this.error('Specify the new todo')
      this.log(` ${chalk.yellow(['Error'])} - the task couldn't be added`)
    }
  }
}
