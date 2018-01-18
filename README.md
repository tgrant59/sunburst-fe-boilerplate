# fe-app-boilerplate
Top Hat's Frontend Boilerplate App

## How to use the Boilerplate

You'll need to perform a few steps to create a new project using this boilerplate:

1. Create the new repository
    - Create the repo on GitHub
    - Copy this entire repository into a new folder
    - Delete the `.git` folder
    - Run `git init`
    - Commit and push to your new repository

1. Configure your app
    - Modify your app's name in [package.json](./package.json)
    - Configure deployment details 
        - [Staging Config](./internals/deployment/staging-config.sh)
        - [Production Config](./internals/deployment/production-config.sh)
        - **Note** - You shouldn't have to create anything manually on AWS (like buckets, distributions, etc.). The CloudFormation template should take care of it.
        - **Note** - The first deployment may seem to take a really long time. This is because it waits for the CloudFront distribution to be totally (takes a while)

## Developing the Boilerplate

1. Install Project Dependencies
    
    ```bash
    make install
    ```

1. Start Developing!

    ```bash
    make start
    ```

1. Optional Dependencies

    [Watchman](https://facebook.github.io/watchman/) for using `make test-watch`
    
    ```bash
    brew install watchman
    ```


## Make Tasks
#### Useful Commands for Development

- `make help` - show this help message
- `make install` - install dependencies
- `make start` - builds and runs the project, autoreloading on file changes
- `make start-tunnel` - runs the project and provides a globally accessible proxy url for testing on other devices
- `make lint` - runs eslint and stylelint
- `make lint-fix` - attempts to autofix linting errors
- `make test` - runs the full test suite with jest
- `make test-watch` - re-runs tests on file changes - VERY useful
- `make test-snapshots` - updates the jest snapshots
- `make test-coverage` - creates a coverage report and opens it in your browser
- `make analyze` - analyzes your webpack bundling

#### Other Commands (for CI / Production)

- `PROD=1 make build` - build the project distribution
- `make install-no-clean` - installs without cleaning dependencies, for improved caching on CI
- `CI=1 make lint` - runs eslint,stylelint and generates a junit file containing any errors
- `CI=1 make test` - runs the jest test suite and outputs coverage and junit information
- `make install-deployment-deps` - installs dependencies needed for the deployment scripts
- `make deploy-staging` - deploys the staging environment
- `make deploy-production` - deploys the production environment

## How Do I Develop in this Repo?

Please read through the documentation, and ask questions if you can't find the answers within

- [General](docs/general)
  - [Introduction ](docs/general/introduction.md)
  - [FAQ](docs/general/faq.md)
  - [Debugging](docs/general/debugging.md)  
  - [Gotchas](docs/general/gotchas.md)
  - [Extracting components](docs/general/components.md)
- [Testing](docs/testing)
  - [Unit Testing](docs/testing/unit-testing.md)
  - [Component Testing](docs/testing/component-testing.md)
  - [Remote Testing](docs/testing/remote-testing.md)
  - [Saga Testing](docs/testing/saga-testing.md)
- [Styling (CSS)](docs/css)
  - [Next Generation CSS](docs/css/README.md#next-generation-css)
  - [styled-components](docs/css/README.md#styled-components)
- [JS](docs/js)
  - [Async Components](docs/js/async-components.md)
  - [Redux](docs/js/redux.md)
  - [ImmutableJS](docs/js/immutablejs.md)
  - [reselect](docs/js/reselect.md)
  - [redux-saga](docs/js/redux-saga.md)
  - [routing](docs/js/routing.md)
