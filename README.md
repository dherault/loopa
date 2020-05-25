# loopa

<p>
  <a href="https://www.npmjs.com/package/loopa">
    <img src="https://img.shields.io/npm/v/loopa.svg?style=flat-square">
  </a>
  <img src="https://img.shields.io/npm/l/loopa.svg?style=flat-square">
  <a href="#contributing">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square">
  </a>
</p>

Loopa is a for loop for scripts. It will execute a command n times before exiting.

## Installation

`npm install --dev loopa` or `npx loopa`

## Usage

`loopa 3 echo "a loop"`

```
a loop
a loop
a loop
```

`loopa 10 npm run some-script`

```
(some-script executed 10 times)
```

`loopa infinity echo "an infinite loop"`

```
an infinite loop
an infinite loop
an infinite loop
...
```

`loopa 3 1000 echo "one second interval"`

```
one second interval
one second interval
one second interval
```


## Usage with environment variables

Environment variables should be escaped:

`FOO=foo loopa 100 echo \$FOO`

```
foo
foo
foo
...
```

If you do not like escaping your environment variables you can do the following in your package.json file:

```json
{
  "scripts": {
    "loop": "loopa 100 npm run echo-foo",
    "echo-foo": "FOO=foo echo $FOO"
  }
}
```

## Accessing the iteration variable

The iteration variable is available under the `$I` (or `\$I`) env variable:

`loopa 4 echo \$I`

```
0
1
2
3
```

## License

MIT
