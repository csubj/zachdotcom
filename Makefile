.PHONY: help install dev build start lint clean preview

PNPM := pnpm

help: ## Show available commands
	@grep -E '^[a-zA-Z_-]+:.*##' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*## "}; {printf "  \033[36m%-12s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	$(PNPM) install

dev: ## Start the development server
	$(PNPM) dev

build: ## Create a static production build in out/
	$(PNPM) build

start: ## Start the production server (requires build)
	$(PNPM) start

lint: ## Run ESLint
	$(PNPM) lint

clean: ## Remove build artifacts and dependencies
	rm -rf .next out node_modules

preview: build ## Build and serve the static site locally
	$(PNPM) dlx serve out
