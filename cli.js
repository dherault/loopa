#!/usr/bin/env node
const { execSync } = require('child_process')

const [,, ...args] = process.argv
const firstArg = args.shift()
const secondArg = args.shift()
let delay = parseInt(secondArg)

if (delay !== delay) {
  args.unshift(secondArg)

  delay = 0
}

const command = args.join(' ')
const nTimes = firstArg === 'infinity' ? Number.MAX_SAFE_INTEGER : parseInt(firstArg)

if (nTimes !== nTimes) {
  console.error(`First arg must be an integer, found "${firstArg}" instead.`)

  process.exit(1)
}

let i = 0

execCommand()

function execCommand() {
  if (i === nTimes) return

  i++

  try {
    execSync(command, {
      stdio: 'inherit',
      shell: true,
      // eslint-disable-next-line prefer-object-spread
      env: Object.assign({ I: i }, process.env),
    })
  }
  catch (error) {
    // nothing
  }
  finally {
    if (delay !== 0) {
      // eslint-disable-next-line no-unsafe-finally
      if (i === nTimes) return

      setTimeout(execCommand, delay)
    }
    else {
      execCommand()
    }
  }
}
