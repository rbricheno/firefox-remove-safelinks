# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.5.2] - 2023-03-03
- Add support for "double-wrapped" safelinks (where the target of the first safelink is yet another safelink...)

## [1.5.1] - 2023-03-03
- First "Cambridge-only" version (fork)

## [1.5.0] - 2023-01-25
### Added
- Support for regional Safe Link domains (e.g. "eur01.safelinks.protection.outlook.com")

## [1.4.0] - 2023-01-13
### Changed
- Limit the permission of the add-on to only the pages that require a redirect instead of `<all_urls>` (@LukeCz)
- Reduce complexity when preparing the redirect (@LukeCz)

## [1.3.0] - 2022-12-29
### Added
- Add icon for the add-on

## [1.2.0] - 2022-12-29
### Added
- Support for Safe Links in outlook.office.com ([#3](https://github.com/wtimme/firefox-remove-safelinks/issues/3))

## [1.1.0] - 2021-09-23
### Added
- Support for new Safe Links URL in MS Teams [@mpexo](https://github.com/mpexo)

## [1.0.0] - 2021-06-01

The initial release 🎉

[1.5.0]: https://github.com/wtimme/firefox-remove-safelinks/compare/1.4.0...1.5.0
[1.4.0]: https://github.com/wtimme/firefox-remove-safelinks/compare/1.3.0...1.4.0
[1.3.0]: https://github.com/wtimme/firefox-remove-safelinks/compare/1.2.0...1.3.0
[1.2.0]: https://github.com/wtimme/firefox-remove-safelinks/compare/1.1.0...1.2.0
[1.1.0]: https://github.com/wtimme/firefox-remove-safelinks/compare/1.0.0...1.1.0
[1.0.0]: https://github.com/wtimme/firefox-remove-safelinks/releases/tag/1.0.0
