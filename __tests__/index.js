'use strict';

const Helpers = require('yeoman-test');
const Assert = require('yeoman-assert');

describe('ms-bot', () => {
    describe('creating a new bot', () => {
        it('scaffold a bot', () => {
            const answers = {
                author: 'test script',
                name: 'test-bot',
            };

            return Helpers
                .run(require.resolve('../generators/app/index.js'))
                .withPrompts(answers)
                .then(() => {
                    Assert.file([
                        'package.json',
                        'README.md',
                        'src/env.js',
                        'src/index.js',
                        'src/server.js',
                    ]);

                    Assert.fileContent('README.md', 'test-bot');
                    Assert.jsonFileContent('package.json', { name: 'test-bot', author: 'test script' });
                });
        });
    });
});
