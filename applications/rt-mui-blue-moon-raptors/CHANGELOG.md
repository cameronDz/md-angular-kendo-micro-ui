# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [0.5.0] - 2020-03-19
### Changed
- Updated minor/patch versions of dependencies

### Fixed
- Added proptypes in bird card
- Update major versions of dependencies with vulnerabilities

## [0.4.1] - 2019-10-28
### Fixed
- Issue with canvas package causing node-gyp not to install

## [0.4.0] - 2019-10-28
### Added
- Deploy script to ship bundle/index to S3 bucket

### Changed
- Webpack configurtaion for dev and prod environments

### Fixed
- Added required peer dependencies
- Updated deprecated and vulnerable dependencies

## [0.3.0] - 2019-09-15
### Added
- First tests, with dependencies, for components with ESlint setup to scan test as well

## [0.2.1] - 2019-09-15
### Changed
- Styling suggestions from linter

### Fixed
- Security issue with mixin-deep and set-value packages

## [0.2.0] - 2019-09-15
### Added
- PropType declarations on components recieving props
- ESLint with linter command and standard/react plugins/extensions
- CHANGELOG and LICENSE

### Changed
- Deconstructing props in method params
- Using path package in webpack config
- Using Fragment instead of React.Fragment component
- Organizing package.json file keys

### Fixed
- Styling/best practices issues detected by new linter
