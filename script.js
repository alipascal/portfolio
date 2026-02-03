const markdown = require("markdown-wasm")

mdText = `

# hello world

`

console.log(markdown.parse(mdText))