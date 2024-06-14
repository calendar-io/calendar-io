'use strict';

const { releasePublish } = require('nx/release');
const yargs = require('yargs');

(async () => {
  const options = await yargs
    .option('dryRun', {
      alias: 'd',
      description:
        'Whether or not to perform a dry-run of the release process, defaults to true',
      type: 'boolean',
      default: false,
    })
    .option('verbose', {
      description:
        'Whether or not to enable verbose logging, defaults to false',
      type: 'boolean',
      default: false,
    })
    .parseAsync();

    try {
      // The returned number value from releasePublish will be zero if all projects are published successfully, non-zero if not
      const publishStatus = await releasePublish({
        dryRun: options.dryRun,
        verbose: options.verbose,
        firstRelease: true
      });

      console.info(`Release publish job exit with status code: ${publishStatus}`);
      process.exit(publishStatus);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
})();