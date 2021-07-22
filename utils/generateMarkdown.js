// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseType = license.license;
  let yourLicense = ''
  if(licenseType ==='Github') {
    yourLicense = `![License: Git](https://img.shields.io/badge/license-PyPI-blue.svg)`;
  }else if (licenseType ==='PyPl') {
    yourLicense = `![PyPl license](https://img.shields.io.pypi/l/anicolortags.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !== 'None') {
    return `\n*[License](#license)\n`;
  }
  return ``;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'None') {
    return `##license
  ${license} license used.`;  
  }
  return ``;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
![GitHub License](https://img.shields.io/badge/license-${data.license}-blue.svg)

# Title

## Table of Contents
1.[Explanations](##Explanation)
2.[Install](##Install)
3.[Usage](##Operate)
4.[Contributing](##Contributing)
5.[Testing](##Testing)
6.[License](##License)
7.[Questions](##Questions)

## Explanation
${data.explantion}

## Install
To install you must run the command in your terminal or git bash!

${data.installCode}

## Usage
${data.usage}

## Contributing
${data.contribute}

## Testing
To test the install run this command on terminal or git bash!

${data.testing}

## License
This was created using: ${data.license} License

## Questions
Any questions? Reach me at: [${data.contact}](mailto:${data.contact})

If you want to check my Repo out: [${data.username}](github.com/${data.username})

## Demo


`;
}

module.exports = generateMarkdown;
