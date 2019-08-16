include .env
export

NETWORK_NAME		:= kit-$(APP_NAME)
NODE_IMAGE			:= skypress/npx:latest
DOCKER_COMMAND	:= docker run -it --rm \
	--volume $(PWD):/app \
	--net $(NETWORK_NAME) \
	$(NODE_IMAGE)

default: lint test

.PHONY: lint test build debug start setup
lint: .node-lint
test: .node-test
build: .node-build
debug: .node-debug
start: .node-start
setup: .network-create .node-install

.network-create:
	@echo
	@echo "# Creating Network"
	@docker network inspect $(NETWORK_NAME) &>/dev/null || \
		docker network create $(NETWORK_NAME)
	@echo

.node-start:
	@echo
	@echo "# Running Local Environment"
	@docker run -it --rm \
		--volume $(PWD):/app \
		-p $(PORT):$(PORT) \
		--net $(NETWORK_NAME) \
		--name $(HOST) \
		$(NODE_IMAGE) \
			yarn start
	@echo

.node-%:
	@echo
	@echo "# Running $*"
	@$(DOCKER_COMMAND) yarn $*
	@echo
