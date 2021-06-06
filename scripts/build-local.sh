#!/usr/bin/env bash

# shellcheck disable=SC2046
export $(xargs <.env) && gatsby build
