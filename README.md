# Express Starter Kit
Express + WebPack + Babel + Docker starter kit

## Local Development

### Prerequisites
- [Docker](https://docs.docker.com/install/)

### Useful Aliases
Add these aliases to your `~/.bash_profile` for faster development
```bash
alias npx="docker run -it --rm -v \$(pwd):/app skypress/npx npx"
alias yarn="docker run -it --rm -v \$(pwd):/app skypress/npx yarn"
```

_Remember to source the file after adding the aliases: `source ~/.bash_profile`_

### Makefile
- `make`: Default command will run the linter and tests
- `make lint`: Run the linter
- `make test`: Run all tests
- `make build`: Manually run the webpack build
- `make debug`: Start a node debug session
- `make start`: Start the local development environment
- `make setup`: Create a docker network and install all `node_modules`

### Initial Setup
- Setup the project
```bash
make setup
```
- Create a `.env` file using this template:
```
APP_NAME=express-start
NODE_ENV=development
HOST=kit-server
PORT=3000
```

## Documentation
Documentation is generated using the [jsdoc](https://devdocs.io/jsdoc/) module. [Use this cheatsheet as a quick reference](https://devhints.io/jsdoc).
