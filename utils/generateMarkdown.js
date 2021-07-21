// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![GitHub License]()

# Title

## Table of Contents
1.[Explanations](##Explanation)
2.[Install](##Install)
3.[Operate](##Operate)
4.[Contributing](##Contributing)
5.[Testing](##Testing)
6.[License](##License)
7.[Questions](##Questions)

## Explanation
${data.explantion}

## Install
To install you must run the command in your terminal or git bash!

${data.installCode}

## Operate
${data.Operate}

## Contributing
${data.contributing}

## Testing
To test the install run this command on terminal or git bash!

${data.testing}

## License
This was created using: ${data.license} License

## Questions
Any questions? Reach me at: [${data.contact}](mailto:${data.contact})

If you want to check my Repo out: [${data.username}](github.com/${data.username})

`;
}

module.exports = generateMarkdown;
