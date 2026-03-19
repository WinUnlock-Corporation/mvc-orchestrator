# MVC TS Orchestrator
Orchestrator is a lightweight TypeScript framework designed to manage application flow through centralized orchestration of pages and components


## Dev commands:
npx esbuild orc.all.ts \
  --bundle \
  --format=iife \
  --global-name=Orchestrator \
  --minify \
  --outfile=../dist/orc.all.js