# Dev env

Research into the basics of a repeatable dev env, to be formed with a stackfile


## Setup

     curl https://mise.run | sh
     mise activate
     mise install


### TODO

- [x] Hot-reload
- [x] Multi-instance service
- [ ] Is it possible to use the container for all the tooling?
- [x] Evaluate devcontainer for vscode
  - Answer is No. There's no smooth way to have multiple containers running: https://code.visualstudio.com/remote/advancedcontainers/connect-multiple-containers
- [x] versioning of non-devcontainer local tools
  - using mise