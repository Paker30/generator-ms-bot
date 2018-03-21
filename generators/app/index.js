const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  constructor(args, opts) {
    // Calling the super constructor is important so our generator is correctly set up
    super(args, opts);

    this.writingBot = (answers) => {
      const BotFileTree = [
        {
          origin: 'package.json',
          destination: 'package.json',
          variables: {
            author: answers.author,
            name: answers.name,
          },
        },
        { origin: 'README.md', destination: 'README.md', variables: { name: answers.name } },
        { origin: 'src/env.js', destination: 'src/env.js', variables: {} },
        { origin: 'src/index.js', destination: 'src/index.js', variables: {} },
        { origin: 'src/server.js', destination: 'src/server.js', variables: {} },
      ];
      return BotFileTree;
    };
  }

  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'The name of your new bot',
      default: this.appname, // Default to current folder name
    },
    {
      type: 'input',
      name: 'author',
      message: 'Who is the author of this awesome bot?',
    }])
      .then((answers) => { this.answers = answers; });
  }

  writing() {
    return this.writingBot(this.answers).map((file) => {
      return this.fs.copyTpl(
        this.templatePath(file.origin),
        this.destinationPath(file.destination),
        file.variables,
      );
    });
  }

  install() {
    this.installDependencies({ npm: true, bower: false, yarn: false });
  }
};
