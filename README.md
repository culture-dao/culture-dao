# Culture DAO

The official website for Culture DAO.

<br />

## Requirements
 - [nvm](https://github.com/nvm-sh/nvm)
 - [NodeJS](https://nodejs.org/en)
 - [docker](https://www.docker.com/) (optional)
 - [docker-compose](https://docs.docker.com/compose/) (optional)

<br />

## Getting Started

First, ensure your using the currect version of NodeJS:

```bash
nvm use
```

Next, run the development server:

```bash
yarn dev
```

<br />

## Code Quality

We use a variety of tools and techniques to ensure code quality while developing the app, some of these include linting, husky git hooks, automated testing, CI/CD pipelines, etc...

### Linting

Linting is the process of running a program that will analyse code for potential errors, for our purposes we are using [ESLint](https://eslint.org/) and extend the `next/core-web-vitals` preset.

Execute the linter by running the following command:

```bash
yarn lint
```

### Husky

todo

### Automated Testing

todo

### CI/CD Pipelines

todo

<br />

## Conventional Commits

Convetional Commits are a specification for adding human and machine readable meaning to commit messages.

The first line of a commit message should always consist of the following strings:

```bash
<type>(scope): <description>
```

The `scope` is optional, but preferred. A correct commit message would be:

```bash
feat(website): created new notification banner
```

The available types are:

```
build: Changes that affect the build system or external dependencies
chore: Updating a script, task, location of a file, or something that's a nuisance
ci: Changes to our CI configuration files and scripts
docs: Documentation only changes
feat: A new feature
fix: A bug fix
perf: A code change that improves performance
refactor: A code change that neither fixes a bug nor adds a feature
style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
test: Adding missing tests or correcting existing tests
```

The available scopes are:

```
client
server
gha
workspace
```

These can be configured in the `commitlint.config.js` file in the root of the workspace.