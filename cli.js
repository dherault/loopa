#!/usr/bin/env node
const { execSync } = require('child_process')

const [,, ...args] = process.argv
const firstArg = args.shift()
const command = args.join(' ')
const nTimes = parseInt(firstArg)

if (nTimes !== nTimes) {
  console.error(`First arg must be an integer, found "${firstArg}" instead.`)

  process.exit(1)
}

for (let i = 0; i < nTimes; i++) {
  try {
    execSync(command, {
      stdio: 'inherit',
      shell: true,
      env: Object.assign({
        I: i,
      }, process.env)
    })
  }
  catch (error) {
    // nothing
  }
}
