# workflow_ca

This is a fork of https://github.com/NoroffFEU/social-media-client
The purpose of this branch is to improve the quality of a package by establishing helpful workflows that make the development process more efficient.

This branch is configured with eslint, prettier and commithooks.
Github actions to deploy static content to pages, and run e2e and unit tests on pull requests.
It's configured with cypress for e2e-tests and jest for unit-tests and it has implemented tests for login/logout functionality


[![Deploy static content to Pages](https://github.com/mbr90/workflow_ca/actions/workflows/pages.yml/badge.svg?branch=master)](https://github.com/mbr90/workflow_ca/actions/workflows/pages.yml)

[![Automated E2E Testing](https://github.com/mbr90/workflow_ca/actions/workflows/e2e-test.yml/badge.svg)](https://github.com/mbr90/workflow_ca/actions/workflows/e2e-test.yml)

[![Automated Unit Testing](https://github.com/mbr90/workflow_ca/actions/workflows/unit-test.yml/badge.svg)](https://github.com/mbr90/workflow_ca/actions/workflows/unit-test.yml)
