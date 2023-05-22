
var licenseBadge = '';

function checkLicense(data) {
  console.log(data);
  if (data.license === 'IBM') {
    licenseBadge = '[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)';

    console.log('IBM');

  } else if (data.license === 'ISC') {
    licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';

    console.log('ISC');

  } else if (data.license === 'MIT') {
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

    console.log('MIT');

  } else {
    licenseBadge = '';

    console.log('None');
  }
}

function generateMarkdown(data) {

  checkLicense(data);

  return `# ${data.title}
  ${licenseBadge}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation

  ${data.install}

  ## Usage

  ${data.use}

  ## License

  ${data.license}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.github}

  https://github.com/${data.github}

  Email: ${data.email}`;

}

module.exports = generateMarkdown;
