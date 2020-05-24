# loopa

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
(some-scripts executed 10 times)
```

## Usage with environment variables

Environment varaibles should be escaped:

`FOO=foo loopa 100 \$FOO`

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
    "loop": "loopa 12 npm run echo-foo",
    "echo-foo": "FOO=foo echo $FOO"
  }
}
```

## Accessing the iteration variable

The iteration varaible is available under the `$I` (or `\$I`) env variable:

`loopa 4 echo \$I`

```
0
1
2
3
```

## License

MIT
