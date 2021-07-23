
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
![License](https://img.shields.io/badge/license-${data.License}-blue.svg)

# Title

## Table of Contents

1.[Explanation](##Explanation)

2.[Install](##Install)

3.[Usage](##Operate)

4.[Contributing](##Contributing)

5.[Testing](##Testing)

6.[License](##License)

7.[Questions](##Questions)

## Explanation
${data.Explanation}

## Install
To install you must run the command in your terminal or git bash!

${data.InstallCode}

## Usage
${data.Usage}

## Contributing
${data.Contribute}

## Testing
To test the install run this command on terminal or git bash!

${data.Testing}

## License
This was created using: ${data.License} License

## Questions
Any questions? Reach me at: [${data.Email}](mailto:${data.Email})

If you want to check my Repo out: [${data.Username}](https://github.com/${data.Username})

## Demo
![Demo Video](./images/REDAME gen demo.gif)

`;
}

module.exports = generateMarkdown;
