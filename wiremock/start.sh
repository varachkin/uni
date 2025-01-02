#!/bin/bash

DIR=$(dirname "$0")

wiremock --port 6005 --enable-stub-cors --root-dir $DIR
