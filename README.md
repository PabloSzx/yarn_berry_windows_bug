# yarn_berry_windows_bug

There are several options of running code (TypeScript) on this repository

This error only happens on windows when yarn v2 is installed **globally**

- **yarn start** (works fine)
- **yarn start_start** (executing a yarn script that executes "node index.js") (**Error**)
- **yarn start_yarn** (doing "yarn node index.js") (**Error**)
- **yarn run_s** (using npm_run_all) (**Error**)
- **yarn concurrent** (using concurrently) (**Error**)
- **yarn ts_node** (using ts-node) (works fine)
- **yarn watch** (using tsc-watch) (works fine)
