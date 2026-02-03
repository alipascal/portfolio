const markdown = require("markdown-wasm")

mdText = `

# hi👋 i'm alicia

i'm a data analyst and data engineer, who is searching for a 4-6 months internship to finish my 2nd year master degree.

i'm available now!


#### you can contact me here :
- email: [alicia.tchemo@gmail.com](mailto:alicia.tchemo@gmail.com)
- linkedin: [/alicia-tchemo](https://www.linkedin.com/in/alicia-tchemo-a998732b8)
- github: [@alipascal](https://github.com/alipascal)
- [curriculum vitae](mailto:alicia.tchemo@gmail.com?subject=CV&body=Bonjour%20! Avez-vous un CV à partager. Merci.)


#### here are all coding stacks skills:

###### Language
\`Python\`, \`SQL\`, \`Java\`, \`JavaScript\`, \`TypeScript\`, \`HTML\` / \`CSS\`
\`Django\`, \`FastAPI\`, \`Vue.js\`, \`Vuetify\`
\`SpaCy\`, \`Hugging Face\`, \`LangChain\`, \`OpenAI API\`

###### Data / Data Engineering / Data Visualization
\`pandas\`, \`NumPy\`, \`Spark\`, \`Kafka\`, \`SQLAlchemy\`, \`PostgreSQL\`, \`MySQL\`, \`SQLite\`, \`InfluxDB\`, \`ChromaDB\`
\`matplotlib\`, \`seaborn\`, \`Power BI (DAX)\`, \`Excel\`

###### Deploiement
\`GitHub\`, \`GitLab\`, \`Subversion\`, \`Docker\`

###### Autres
\`Confluence\`, \`Jira\`, \`RedShift\`, \`Notion\`, \`Obsidian\`, \`Figma\`, \`Overleaf\`

`

console.log(markdown.parse(mdText))