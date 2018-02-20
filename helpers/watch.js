const watch = require('watch')

const options = {
  'ignoreDotFiles': true,
  'interval': 0.01,
  'ignoreUnreadableDir': true,
  'ignoreNotPermitted': true,
  'ignoreDirectoryPattern': /node_modules/
}

watch.watchTree('./', options, function (f, curr, prev) {
  if (typeof f === 'object' && prev === null && curr === null) start()
  else if (prev === null) add(f)
  else if (curr.nlink === 0) remove(f)
  else change(f)
})

const start = () => console.log(`
Watching files...
Press ctrl-c for skip.
`)

const add = (f) => {
  console.log(`New file: ${f}`)
}

const remove = (f) => {
  console.log(`Removed: ${f}`)
}

const change = (f) => {
  console.log(`Changed: ${f}`)
}
