#!/bin/bash

DIR=$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )
source "$DIR/helpers/shell-helpers.sh"

if [[ -n $CI ]]; then
    exit 0
fi

source "/usr/local/opt/nvm/nvm.sh"

function version { echo "$@" | awk -F. '{ printf("%03d%03d%03d\n", $1,$2,$3); }'; }

DESIRED_NODE_VERSION="$(cat $DIR/../../.nvmrc)"
DESIRED_YARN_VERSION="1.0.2"

NODE_VERSION=$(node --version)
YARN_VERSION=$(yarn --version)

if [ "$NODE_VERSION" != "$DESIRED_NODE_VERSION" ];
then
    nvm install &> /dev/null
    if [ $? -ne 0 ]; then
         echo -e "${RED}Error switching node version${NC}"
         exit 1
    fi
    echo -e "${GREEN}** Using Node ${DESIRED_NODE_VERSION} **${NC}"
fi

if [ "$(version "$YARN_VERSION")" -lt  "$(version "$DESIRED_YARN_VERSION")" ];
then
    echo -e "${RED}Yarn version is ${YARN_VERSION}. Please use version ${DESIRED_YARN_VERSION} or greater${NC}"
    echo -e "$YELLOW>>> brew upgrade yarn${NC}"
    exit 2
fi
