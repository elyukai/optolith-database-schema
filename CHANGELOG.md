# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [0.8.0](https://github.com/elyukai/optolith-database-schema/compare/v0.7.0...v0.8.0) (2023-01-03)


### ⚠ BREAKING CHANGES

* remove none option from cost, do not use property instead
* use simple boolean to indicate implementation availability

### Features

* add interval cost option ([6643594](https://github.com/elyukai/optolith-database-schema/commit/66435948fb567e161e6ab3ecc8e416e9cbef3441))


### Bug Fixes

* add missing KrallenkettenzauberIdentifier and add to associated groups ([2f18a75](https://github.com/elyukai/optolith-database-schema/commit/2f18a75e4bd61f31e8cf0f62de46685c18cc603b))
* RatedIdentifier used wrong SkillIdentifier ([c528f34](https://github.com/elyukai/optolith-database-schema/commit/c528f34f10bda702d5adf5f2e6fd4948a98b9f62))


* remove none option from cost, do not use property instead ([4a1cc06](https://github.com/elyukai/optolith-database-schema/commit/4a1cc062aaa47715d54922545cb1477567416cf0))
* use simple boolean to indicate implementation availability ([4282ef3](https://github.com/elyukai/optolith-database-schema/commit/4282ef3d7567919012f65197b4bc9c94176e5720))

## [0.7.0](https://github.com/elyukai/optolith-database-schema/compare/v0.6.0...v0.7.0) (2022-12-25)


### ⚠ BREAKING CHANGES

* `restricted_to_traditions` should only apply to magical traditions
* familiar's tricks may have life point cost

### Features

* familiar's tricks may have life point cost ([d428bd3](https://github.com/elyukai/optolith-database-schema/commit/d428bd3384a3d707f95f842198d86d6d6e5a7a6c))
* sustained familiar's tricks may not have a sustaining interval ([178374d](https://github.com/elyukai/optolith-database-schema/commit/178374df2742aae7f7efd6bfdd13d61402e16b88))


### Bug Fixes

* missing item cost variants ([608fd16](https://github.com/elyukai/optolith-database-schema/commit/608fd16379484de96d2b6d49ea01f570ead946dd))
* wrong tag-complementing property for subject identifier ([036a219](https://github.com/elyukai/optolith-database-schema/commit/036a2192f2aff4698d4df25315a9c46babf6881f))


* `restricted_to_traditions` should only apply to magical traditions ([a182e6c](https://github.com/elyukai/optolith-database-schema/commit/a182e6ccf9bdf5da327b48ff43e88375517da90f))

## [0.6.0](https://github.com/elyukai/optolith-database-schema/compare/v0.5.4...v0.6.0) (2022-12-10)


### ⚠ BREAKING CHANGES

* rename common ingredients to typical ingredients

### Features

* prerequisite disjunctions may have a display option ([36e9ceb](https://github.com/elyukai/optolith-database-schema/commit/36e9ceb26b52f673e13ea2323cb9a3283dc21586))
* weapons can be restricted to traditions during character creation ([5e085d2](https://github.com/elyukai/optolith-database-schema/commit/5e085d2258e6232e829f9e21cc7823d14ef42322))


### Bug Fixes

* duration variant key convention ([dc1a05e](https://github.com/elyukai/optolith-database-schema/commit/dc1a05ed27e3f97b2cfc2ccfdbe4c20160b0b711))
* fixed cost countable translation might not be compressable ([561b4ad](https://github.com/elyukai/optolith-database-schema/commit/561b4ad0f9b938539826f734f8c84d45cc1c4543))
* missing equipment packages source references ([ff3ae6c](https://github.com/elyukai/optolith-database-schema/commit/ff3ae6cbb52902e00ea13179a88bb9abd19d6663))


* rename common ingredients to typical ingredients ([aa7fb6e](https://github.com/elyukai/optolith-database-schema/commit/aa7fb6ed41a756d65637520095b58b6226f410c9))

### [0.5.4](https://github.com/elyukai/optolith-database-schema/compare/v0.5.3...v0.5.4) (2022-12-03)


### Bug Fixes

* elective spellwork restriction structure ([3ceb624](https://github.com/elyukai/optolith-database-schema/commit/3ceb6244ec433bb60fe292dde32d99ac93edccb2))
* grouped common profession for cultures ([df66943](https://github.com/elyukai/optolith-database-schema/commit/df66943aadfd297d773dda7d4a0a65c8b79095ce))

### [0.5.3](https://github.com/elyukai/optolith-database-schema/compare/v0.5.2...v0.5.3) (2022-12-03)


### Bug Fixes

* escaping curly braces in regular expression ([4f59611](https://github.com/elyukai/optolith-database-schema/commit/4f59611827d0948df7de32e73623cef858ad89c7))
* import resolving of types used in generic types ([592ade9](https://github.com/elyukai/optolith-database-schema/commit/592ade94fddc14bdda5bfcf8b3dc51c33f36f509))

### [0.5.2](https://github.com/elyukai/optolith-database-schema/compare/v0.5.1...v0.5.2) (2022-12-02)


### Bug Fixes

* validation error output type did not match type for error printing ([709f2f4](https://github.com/elyukai/optolith-database-schema/commit/709f2f46a68ff438cd158defddf93f508871eef9))

### [0.5.1](https://github.com/elyukai/optolith-database-schema/compare/v0.5.0...v0.5.1) (2022-12-02)


### Features

* explicit verbose error-printing option ([ebf055c](https://github.com/elyukai/optolith-database-schema/commit/ebf055c92302c5cfd80493dff1fd38276d05aa30))

## [0.5.0](https://github.com/elyukai/optolith-database-schema/compare/v0.4.1...v0.5.0) (2022-12-01)


### ⚠ BREAKING CHANGES

* explicit identifier tags, simpler prerequisites, multiple small changes

### Features

* equipment of blessed ones may be for multiple traditions ([3ffbfa2](https://github.com/elyukai/optolith-database-schema/commit/3ffbfa20cd40279091c71e7ef22496f6eab0f501))
* explicit identifier tags, simpler prerequisites, multiple small changes ([89ab7dd](https://github.com/elyukai/optolith-database-schema/commit/89ab7dd343db1027672b24c63216aba44f2db855))
* poisons and elixirs ([2552156](https://github.com/elyukai/optolith-database-schema/commit/2552156860ec527b568621dffa9ad6ebef1ae3e3))


### Bug Fixes

* import specifiers ([fddea8b](https://github.com/elyukai/optolith-database-schema/commit/fddea8bc62a6ab4ddfef0fcea082a73749152ad4))

### [0.4.1](https://github.com/elyukai/optolith-database-schema/compare/v0.4.0...v0.4.1) (2022-08-01)


### Bug Fixes

* not all ceremonial item special abilities have an aspect ([d99fc59](https://github.com/elyukai/optolith-database-schema/commit/d99fc59d786bef8951edd45db0a0c2d43c4a5ac3))
* require nested properties of enums with associated values ([ed8046e](https://github.com/elyukai/optolith-database-schema/commit/ed8046ea07acd5ae2b98bc901f688b4612d45ba6))

## [0.4.0](https://github.com/elyukai/optolith-database-schema/compare/v0.3.0...v0.4.0) (2022-08-01)


### ⚠ BREAKING CHANGES

* streamline enums with and without associated values

### Features

* adjust equipment item schemes based on example files ([a7344f2](https://github.com/elyukai/optolith-database-schema/commit/a7344f2faa8a414ca62586b884e7eb5892645fef))


* streamline enums with and without associated values ([a4685e3](https://github.com/elyukai/optolith-database-schema/commit/a4685e34999ada051117834fc17d19b41f5f3304))

## [0.3.0](https://github.com/elyukai/optolith-database-schema/compare/v0.2.4...v0.3.0) (2022-07-23)


### ⚠ BREAKING CHANGES

* rework equipment item data types
* rework tradition artifact enchantment data types
* rework special ability data types
* rename profession versions key and associated types
* rework magical actions data types
* rework prerequisite data types
* rework rule and source data types
* rework "top-level" data types

### Features

* add check for data file base name pattern ([45337c7](https://github.com/elyukai/optolith-database-schema/commit/45337c7d30cfc49b579b74aec1a4d99885ce5d29))
* add equipment item types to config ([9d68865](https://github.com/elyukai/optolith-database-schema/commit/9d688658224dcd225b617b7c83628180bf024af5))
* add printing file name errors ([7d97c65](https://github.com/elyukai/optolith-database-schema/commit/7d97c658ec0867e6bf06fc4011c58e176cd8d804))
* armor sturdiness rating ([a9be0ad](https://github.com/elyukai/optolith-database-schema/commit/a9be0ad34b1dd6b379d7929e2d453b535be46c24))
* differenciate between general animal care and animal feed ([fc813a0](https://github.com/elyukai/optolith-database-schema/commit/fc813a0325b5e90346958e3b0c1e8d44900d9e1f))
* include more rules for value presence in items into combat techniques ([5d7b4f7](https://github.com/elyukai/optolith-database-schema/commit/5d7b4f74518dfa7b4d3862d1388f586934d11c71))
* upgrade to json schema 2020-12 ([4131750](https://github.com/elyukai/optolith-database-schema/commit/413175042b009301e754f7cbe2c66029e74daddc))
* use json schema draft 2020-12 ([6d3781b](https://github.com/elyukai/optolith-database-schema/commit/6d3781b3ca24dc9ce9fb1f5db0b71781bf52d0ad))


### Bug Fixes

* attribute reference identifier maximum ([edc5447](https://github.com/elyukai/optolith-database-schema/commit/edc5447554ce2b897fa4ff89a19099f9112100cb))
* minor errors that surfaced during database conversion for dis/advantages, professions and talismans ([0b43558](https://github.com/elyukai/optolith-database-schema/commit/0b435585522b0d0f2760f75698660a25b488ab93))
* use json schema draft 2019-09 due to issues with yaml language server in vscode ([c406f15](https://github.com/elyukai/optolith-database-schema/commit/c406f15d284e86168eb2a5efccf43d66982171c8))


* rename profession versions key and associated types ([1c7a2bf](https://github.com/elyukai/optolith-database-schema/commit/1c7a2bf85a59a9a459502e0f119315c218e23688))
* rework "top-level" data types ([0f3d815](https://github.com/elyukai/optolith-database-schema/commit/0f3d815ea11fc1a9ff51fd376abfe463a110b322))
* rework equipment item data types ([0bb3a24](https://github.com/elyukai/optolith-database-schema/commit/0bb3a24af01e8869249ecd5a3c950e0f0855ca02))
* rework magical actions data types ([1e953f3](https://github.com/elyukai/optolith-database-schema/commit/1e953f304d16cd1228010a2523c1fbc4f45d1a31))
* rework prerequisite data types ([bdebfc3](https://github.com/elyukai/optolith-database-schema/commit/bdebfc3e1f538e33a70453c3125306b8433c88e5))
* rework rule and source data types ([cc2482f](https://github.com/elyukai/optolith-database-schema/commit/cc2482f9b67968f3ea16d4faf9944caebe14e15c))
* rework special ability data types ([b630525](https://github.com/elyukai/optolith-database-schema/commit/b630525b09f473b73b1550a5f3cf459ab61f682d))
* rework tradition artifact enchantment data types ([5346e17](https://github.com/elyukai/optolith-database-schema/commit/5346e1772e425c88269fee7e93b95af61668753d))

### [0.2.4](https://github.com/elyukai/optolith-database-schema/compare/v0.2.3...v0.2.4) (2022-03-30)


### Features

* add actions as duration unit ([5e64e38](https://github.com/elyukai/optolith-database-schema/commit/5e64e38dbbcda2980bb70a2b1c1b8d01b3a31324))
* add cantrips as target category ([ac4cf38](https://github.com/elyukai/optolith-database-schema/commit/ac4cf380bc96ea20c214938fd96eca1af28b3952))
* add notes to tradition notes of cantrips ([7b37327](https://github.com/elyukai/optolith-database-schema/commit/7b373271312324064b0bac824511248d07f4ffbe))
* guild mages tradition can be noted as common for in general ([df175d1](https://github.com/elyukai/optolith-database-schema/commit/df175d1f523fb9f09c0e672b4bc71437763f34b1))
* remove compressed paramater description option ([7897b72](https://github.com/elyukai/optolith-database-schema/commit/7897b723258d97c1c71dcfef422821657c8efea2))


### Bug Fixes

* compressed name should be optional ([7281f6a](https://github.com/elyukai/optolith-database-schema/commit/7281f6ae055588511dfdb4ebc186f5e492e823c8))
* cost needs to be required ([05fd208](https://github.com/elyukai/optolith-database-schema/commit/05fd2086642ee8781f1a33021f98333685234b50))

### [0.2.3](https://github.com/elyukai/optolith-database-schema/compare/v0.2.2...v0.2.3) (2022-03-29)


### Features

* allow dis-/advantages to not contribute to maximum AP value ([9e401d0](https://github.com/elyukai/optolith-database-schema/commit/9e401d0be40797a5758220233af6c162d1ce76fb))


### Bug Fixes

* state prerequisite should have unique tag ([7710fd5](https://github.com/elyukai/optolith-database-schema/commit/7710fd538582b85cd67cb81b2f791774102d17db))

### [0.2.2](https://github.com/elyukai/optolith-database-schema/compare/v0.2.1...v0.2.2) (2022-03-29)


### Features

* add offset option for deriving AP value from improvement cost ([f556207](https://github.com/elyukai/optolith-database-schema/commit/f55620751b7a68383c74ba8c4256d11802ab99c7))

### [0.2.1](https://github.com/elyukai/optolith-database-schema/compare/v0.2.0...v0.2.1) (2022-03-29)


### Bug Fixes

* category names and prerequisites should be defined separately ([eb312fe](https://github.com/elyukai/optolith-database-schema/commit/eb312fe2fc9973ef6be36937ebd8af8c8bf30e60))

## [0.2.0](https://github.com/elyukai/optolith-database-schema/compare/v0.1.28...v0.2.0) (2022-03-29)


### ⚠ BREAKING CHANGES

* derived select options are not a list anymore

* derived select options are not a list anymore ([fa64a60](https://github.com/elyukai/optolith-database-schema/commit/fa64a60670f0cdf5567a168f3a4eccd7ea71d367))

### [0.1.28](https://github.com/elyukai/optolith-database-schema/compare/v0.1.27...v0.1.28) (2022-03-25)


### Features

* allow skills in advanced special ability restrictions ([237dbbd](https://github.com/elyukai/optolith-database-schema/commit/237dbbdeddcc0df07387196ae2537a19c1deab16))
* items status quo ([c4b349b](https://github.com/elyukai/optolith-database-schema/commit/c4b349bf10fca92286c0510cab8ccb67563f0532))

### [0.1.27](https://github.com/elyukai/optolith-database-schema/compare/v0.1.26...v0.1.27) (2022-03-24)


### Bug Fixes

* maximum call stack size exceeded with ui schema ([a752342](https://github.com/elyukai/optolith-database-schema/commit/a752342708b2a3e4b98e57a0adcbfd9b449d02fe))

### [0.1.26](https://github.com/elyukai/optolith-database-schema/compare/v0.1.25...v0.1.26) (2022-03-24)


### Features

* animal diseases ([b7d2639](https://github.com/elyukai/optolith-database-schema/commit/b7d263942c14c76b6a3bfda780ecadf6cb7a60df))
* armor types ([c5b9a22](https://github.com/elyukai/optolith-database-schema/commit/c5b9a22e5c277a28a8bc0c8cbe3b0cc41235087d))
* diseases ([5e7c8a6](https://github.com/elyukai/optolith-database-schema/commit/5e7c8a6f83ce0b3f7c3854e759b8f042ed7451c8))
* item groups ([b2678ac](https://github.com/elyukai/optolith-database-schema/commit/b2678aca250d4666f7a894ddfc0fc9c3f6a22bcf))
* poisons ([fb9898f](https://github.com/elyukai/optolith-database-schema/commit/fb9898fbce8fcaaed0f83f8afe8fafeab8294a28))
* reaches ([9ed3937](https://github.com/elyukai/optolith-database-schema/commit/9ed39370410a3af29c585a3321c59e794dad70ae))
* ui status quo ([5cb5058](https://github.com/elyukai/optolith-database-schema/commit/5cb50581de6bb3c9a4ee7a89ae52a1dea957c8d8))

### [0.1.25](https://github.com/elyukai/optolith-database-schema/compare/v0.1.24...v0.1.25) (2022-03-23)


### Features

* add missing json schema definitions as placeholders ([28d2c6f](https://github.com/elyukai/optolith-database-schema/commit/28d2c6f2758fc090b4854eb8656613932841b252))

### [0.1.24](https://github.com/elyukai/optolith-database-schema/compare/v0.1.23...v0.1.24) (2022-03-23)


### Features

* add curriculum references and name additions ([468f96c](https://github.com/elyukai/optolith-database-schema/commit/468f96ce9af3b6f3135f959c9dc5d2646ea46e41))

### [0.1.23](https://github.com/elyukai/optolith-database-schema/compare/v0.1.22...v0.1.23) (2022-03-23)


### Features

* church influences ([81b96c4](https://github.com/elyukai/optolith-database-schema/commit/81b96c49bb365527bbbededc02afb227b80bff98))
* core rules ([3be09e3](https://github.com/elyukai/optolith-database-schema/commit/3be09e3707a198ff0697ccf9325e83037ebd6e32))
* equipment packages ([8fc29ef](https://github.com/elyukai/optolith-database-schema/commit/8fc29ef67ab8679f95234e30e19a49486a05b6fc))
* magical tradition placeholders# ([bfa1e18](https://github.com/elyukai/optolith-database-schema/commit/bfa1e18195b847925a8fd8d3e56b8ff130d8a584))
* profession male/female names and groups ([a38b0f4](https://github.com/elyukai/optolith-database-schema/commit/a38b0f4401444318b57bb163eb7192dd58b83d3d))
* talismans ([22a1a4f](https://github.com/elyukai/optolith-database-schema/commit/22a1a4f00985f70dba7d5b38f2f583263cf0389d))
* talismans support multiple traditions ([480779e](https://github.com/elyukai/optolith-database-schema/commit/480779e9c41efc6e5685b52cc45339bb04e94c97))
* update validation config to include latest new definitions ([bb9d856](https://github.com/elyukai/optolith-database-schema/commit/bb9d85685edee1eb3ac30589eb25e09c02bc36da))

### [0.1.22](https://github.com/elyukai/optolith-database-schema/compare/v0.1.21...v0.1.22) (2022-03-23)


### Features

* professions ([0b6ec67](https://github.com/elyukai/optolith-database-schema/commit/0b6ec6718daae4d09ad0ce562ca69fe55cca5d4c))

### [0.1.21](https://github.com/elyukai/optolith-database-schema/compare/v0.1.20...v0.1.21) (2022-03-22)


### Features

* personality traits ([d800133](https://github.com/elyukai/optolith-database-schema/commit/d80013327924376a13fdee0efcc7efdf6d84e616))

### [0.1.20](https://github.com/elyukai/optolith-database-schema/compare/v0.1.19...v0.1.20) (2022-03-22)


### Features

* services can be for multiple creature types ([1853485](https://github.com/elyukai/optolith-database-schema/commit/1853485aea88c38339b5ad5d3396aef7dc263888))

### [0.1.19](https://github.com/elyukai/optolith-database-schema/compare/v0.1.18...v0.1.19) (2022-03-21)


### Features

* add maximum and radius options to ranges ([2b7b579](https://github.com/elyukai/optolith-database-schema/commit/2b7b579e1ee3b82bb7d779e19c373935816ff8d8))

### [0.1.18](https://github.com/elyukai/optolith-database-schema/compare/v0.1.17...v0.1.18) (2022-03-21)


### Features

* animist powers can have prerequisites ([3fa06f4](https://github.com/elyukai/optolith-database-schema/commit/3fa06f41cbf84a0fbe54d51b5c2adb78d8c74129))
* derived animist power costs can have notes ([3ca4f3e](https://github.com/elyukai/optolith-database-schema/commit/3ca4f3edb30847fdf1878a8ed56943930be30d9d))


### Bug Fixes

* wrong discriminator for race prerequisite ([dea373f](https://github.com/elyukai/optolith-database-schema/commit/dea373f141a1a64f95dc8f33a3ecbfb0f7d51993))

### [0.1.17](https://github.com/elyukai/optolith-database-schema/compare/v0.1.16...v0.1.17) (2022-03-21)


### Bug Fixes

* duration value can be 1 ([9be3bdb](https://github.com/elyukai/optolith-database-schema/commit/9be3bdbc0e0b8502e7d0424f94eaf1b7b57091eb))
* zibilja rituals need their own custom parameters ([d60ee69](https://github.com/elyukai/optolith-database-schema/commit/d60ee693dda449d2b00d4f77dbef8d0a9e1e1e8b))

### [0.1.16](https://github.com/elyukai/optolith-database-schema/compare/v0.1.15...v0.1.16) (2022-03-17)


### Features

* support countable entities for ae cost of elven magical songs ([2feb0de](https://github.com/elyukai/optolith-database-schema/commit/2feb0deed85b7e823597560fd83523556a283642))


### Bug Fixes

* sex restriction of a name group from a culture should be optional ([e09f0b4](https://github.com/elyukai/optolith-database-schema/commit/e09f0b43d8b193303d67247a060fcaad8495a99f))

### [0.1.15](https://github.com/elyukai/optolith-database-schema/compare/v0.1.14...v0.1.15) (2022-03-16)


### Bug Fixes

* remove fields not present in cantrip ([132f37b](https://github.com/elyukai/optolith-database-schema/commit/132f37b211732c039f784e1279ff997f998d0be7))

### [0.1.14](https://github.com/elyukai/optolith-database-schema/compare/v0.1.13...v0.1.14) (2022-03-16)


### Bug Fixes

* multiple cantrip field definitions ([db26bb4](https://github.com/elyukai/optolith-database-schema/commit/db26bb4d540cc4eb497020302dde9cfdbe5c3950))

### [0.1.13](https://github.com/elyukai/optolith-database-schema/compare/v0.1.12...v0.1.13) (2022-03-16)


### Bug Fixes

* cantrip effects cannot have effects based on quality level ([2193205](https://github.com/elyukai/optolith-database-schema/commit/21932059554078f89e2322242cdfd44d7a956db0))

### [0.1.12](https://github.com/elyukai/optolith-database-schema/compare/v0.1.11...v0.1.12) (2022-03-16)

### [0.1.11](https://github.com/elyukai/optolith-database-schema/compare/v0.1.10...v0.1.11) (2022-03-16)


### Features

* add numeric ae cost field to ancestor glyphs ([d8e36d9](https://github.com/elyukai/optolith-database-schema/commit/d8e36d9a8a583cb57f72bbb4224ab8e10d7943c8))

### [0.1.10](https://github.com/elyukai/optolith-database-schema/compare/v0.1.9...v0.1.10) (2022-03-16)


### Bug Fixes

* main type refs and titles ([3abec4e](https://github.com/elyukai/optolith-database-schema/commit/3abec4e47ec3356d770d45c1e47ddb5c2e0fb9e4))

### [0.1.9](https://github.com/elyukai/optolith-database-schema/compare/v0.1.8...v0.1.9) (2022-03-16)


### Bug Fixes

* generator script should use new directories config location ([b83532b](https://github.com/elyukai/optolith-database-schema/commit/b83532bd9a84a20939dcbfd4d3f5fde060558f57))

### [0.1.8](https://github.com/elyukai/optolith-database-schema/compare/v0.1.7...v0.1.8) (2022-03-16)


### Bug Fixes

* **npm:** ship package directory config with npm ([dbf196c](https://github.com/elyukai/optolith-database-schema/commit/dbf196c105bad7d06d016af56242adbd867de20d))

### [0.1.7](https://github.com/elyukai/optolith-database-schema/compare/v0.1.6...v0.1.7) (2022-03-16)


### Features

* add basic validation utilities ([5676d39](https://github.com/elyukai/optolith-database-schema/commit/5676d39a3285901b750314832d7978692b1d26de))
* add validation by schema for all types ([b3578ef](https://github.com/elyukai/optolith-database-schema/commit/b3578ef7914db35dbdfda87e1ccf95d37f61e9d7))
* read magical actions ([543ef8e](https://github.com/elyukai/optolith-database-schema/commit/543ef8ee3567d4ec946f1be2492056d74de54976))


### Bug Fixes

* add extension to all relative module specifiers ([1a0b029](https://github.com/elyukai/optolith-database-schema/commit/1a0b029de43ce2026d9134b0f6dd3ee1f106afa2))
* relative links to top-level schema documents ([065efab](https://github.com/elyukai/optolith-database-schema/commit/065efab03a5b4547a9bdc2c1fcf4a3ad010d858e))

### [0.1.6](https://github.com/elyukai/optolith-database-schema/compare/v0.1.5...v0.1.6) (2022-03-11)

### [0.1.5](https://github.com/elyukai/optolith-database-schema/compare/v0.1.4...v0.1.5) (2022-03-10)


### Features

* prerequisites ([148ffd4](https://github.com/elyukai/optolith-database-schema/commit/148ffd47a70b9fb3a1bad540de8b89319a4f8c7d))
* select options for activatable entries ([9af975b](https://github.com/elyukai/optolith-database-schema/commit/9af975bcd1425f2a252ea41930233c3531376615))


### Bug Fixes

* exported name of select options ([5ecef02](https://github.com/elyukai/optolith-database-schema/commit/5ecef02d0178c7252f3b4a11d5ca0373908d6b87))
* keep deprecated penalty translation strings ([e4a8d91](https://github.com/elyukai/optolith-database-schema/commit/e4a8d910dd561255d21801616b2c44fcdd28a30f))
* keep deprecated translation strings for tradition artifact enchantments ([351146e](https://github.com/elyukai/optolith-database-schema/commit/351146ef87691d645a74d8f538d060095b8f7ac5))

### [0.1.4](https://github.com/elyukai/optolith-database-schema/compare/v0.1.3...v0.1.4) (2022-03-09)


### Features

* maximum activatable activations ([1750796](https://github.com/elyukai/optolith-database-schema/commit/175079672da1a692a2a2c49df86d818257af771a))
* tradition artifact enchantment arcane energy cost ([f71916c](https://github.com/elyukai/optolith-database-schema/commit/f71916cfa9fe5f32ad75cd7d9341c9fdef4cfba6))
* tradition artifact enchantment binding cost ([07c25fe](https://github.com/elyukai/optolith-database-schema/commit/07c25fe1b6330bba1698794d47abc6cb0dfae402))
* tradition artifact enchantment volume points ([5cc8ce6](https://github.com/elyukai/optolith-database-schema/commit/5cc8ce63c4eb6928faca5c6ed58cd7da9abb27cd))

### [0.1.3](https://github.com/elyukai/optolith-database-schema/compare/v0.1.2...v0.1.3) (2022-03-09)


### Features

* first concept of penalties for combat-related special abilities ([d79d3b3](https://github.com/elyukai/optolith-database-schema/commit/d79d3b3752252342795400c905e2944d1234bd37))


### Bug Fixes

* remove generic numeric identifier maximum ([e121081](https://github.com/elyukai/optolith-database-schema/commit/e1210810f9cdbf8a720d0e12d5ec6ac21010a8dd))

### [0.1.2](https://github.com/elyukai/optolith-database-schema/compare/v0.1.1...v0.1.2) (2022-03-09)


### Bug Fixes

* output for namespaced imports ([0bf0c9d](https://github.com/elyukai/optolith-database-schema/commit/0bf0c9d8713e0449342b2b01309eb38b3b1013a7))

### [0.1.1](https://github.com/elyukai/optolith-database-schema/compare/v0.1.0...v0.1.1) (2022-03-09)


### Features

* familiar's tricks ([f8f88c9](https://github.com/elyukai/optolith-database-schema/commit/f8f88c9ab3c3339c4e26830623052d09924c4102))
* trade secrets ([c834c31](https://github.com/elyukai/optolith-database-schema/commit/c834c31de87ce830d34c4cf9c0f60dcfb5a4d3ca))

## [0.1.0](https://github.com/elyukai/optolith-database-schema/compare/v0.0.4...v0.1.0) (2022-03-08)


### ⚠ BREAKING CHANGES

* extract tradition artifact enchantments and rituals
* export all prerequisites in another namespace

### Features

* advantages and disadvantages base ([c025bb6](https://github.com/elyukai/optolith-database-schema/commit/c025bb6b8ee6dc3007c0af3b691852a864ebdea6))
* animal shapes ([56b00f9](https://github.com/elyukai/optolith-database-schema/commit/56b00f90aff28f7cc8e8182f3f049d4593430113))
* brews ([03a785d](https://github.com/elyukai/optolith-database-schema/commit/03a785d3cfa8fab2da0a8fe1ddb402b2b5a3ab7d))
* continents ([95482db](https://github.com/elyukai/optolith-database-schema/commit/95482db5671440e24156c651ab094b4a10790223))
* languages ([b85c4f1](https://github.com/elyukai/optolith-database-schema/commit/b85c4f1bcaf5199cd1501051c17b05a8b5178345))
* patrons ([c7e9b6c](https://github.com/elyukai/optolith-database-schema/commit/c7e9b6cabdfdfca7d51eb6891bfb8b8b2973bbff))
* pluralization categories type for user interface ([a434d53](https://github.com/elyukai/optolith-database-schema/commit/a434d53a47e0e50b129855aee8e0a5bc4b634d79))
* scripts ([78a2e92](https://github.com/elyukai/optolith-database-schema/commit/78a2e92d72c0e2616948e9e2ccc1b51752be3b87))
* special abilities base ([f935264](https://github.com/elyukai/optolith-database-schema/commit/f935264328d19b29b0e30a0b1907501c30a2d4c5))


* export all prerequisites in another namespace ([4c09c3e](https://github.com/elyukai/optolith-database-schema/commit/4c09c3e3371beff4587327e40564866b397e311b))
* extract tradition artifact enchantments and rituals ([58e06c6](https://github.com/elyukai/optolith-database-schema/commit/58e06c6925bb56ea854ad211efcf89f981e715b7))

### [0.0.4](https://github.com/elyukai/optolith-database-schema/compare/v0.0.3...v0.0.4) (2022-03-06)


### Bug Fixes

* broken markdown newlines ([87c5ff2](https://github.com/elyukai/optolith-database-schema/commit/87c5ff243c6df1a9dd966167c85dd41b45c36369))
* cost map should allow different translations ([f65683f](https://github.com/elyukai/optolith-database-schema/commit/f65683fc45f2c9f16d1571ec9fcbc449eee042b1))

### [0.0.3](https://github.com/elyukai/optolith-database-schema/compare/v0.0.2...v0.0.3) (2022-03-05)


### Features

* blessings ([8586a40](https://github.com/elyukai/optolith-database-schema/commit/8586a4026615ff6ebdc6cfb1e988d71828e5cd23))
* cantrips ([50397e8](https://github.com/elyukai/optolith-database-schema/commit/50397e83c9322dd36ef0cd28d2924128a6133a27))
* pact categories ([7b9cbc6](https://github.com/elyukai/optolith-database-schema/commit/7b9cbc66a5f13b40536d03a90f726fd9aff8c15a))


### Bug Fixes

* liturgies do not have properties ([9b2c41d](https://github.com/elyukai/optolith-database-schema/commit/9b2c41dd9996abeac627b652cdb6ce0226760f2a))

### [0.0.2](https://github.com/elyukai/optolith-database-schema/compare/v0.0.1...v0.0.2) (2022-03-05)


### Features

* finish basic activatable skills ([ede33df](https://github.com/elyukai/optolith-database-schema/commit/ede33df9e897cb58f19f58c4e8d5619c2f9be0e0))

### 0.0.1 (2022-03-05)


### Features

* add combat techniques ([1fcfbbd](https://github.com/elyukai/optolith-database-schema/commit/1fcfbbd1ae7504c2f8d8d12e58aa77883c987bd3))
* add Condition ([eeb00eb](https://github.com/elyukai/optolith-database-schema/commit/eeb00eb5b349c3833bee9391996d3dfabd07cd95))
* add culture ([875afba](https://github.com/elyukai/optolith-database-schema/commit/875afba4b05a5ffbc0a2763ed69c53d6e6f2ac83))
* add derived characteristics ([c97f993](https://github.com/elyukai/optolith-database-schema/commit/c97f9932b4a329dd8620d7b61ff995e61e26f7ea))
* add ImprovementCost ([fb68fca](https://github.com/elyukai/optolith-database-schema/commit/fb68fcab306e07905bfc3d26e35f2740c5aaf9b3))
* add initial set of types and output ([0d379b5](https://github.com/elyukai/optolith-database-schema/commit/0d379b5123534f4439a0d5fdbc7358d074e64972))
* add locale and publication entities ([651a824](https://github.com/elyukai/optolith-database-schema/commit/651a824dc28b1bb90bb5c7d6227cba6dde57a27f))
* add markdown annotations ([a6440d9](https://github.com/elyukai/optolith-database-schema/commit/a6440d97b9ad83f2c7bce7f94014ab2a1efb442c))
* add Markdown availability hints in documentation ([3e2190f](https://github.com/elyukai/optolith-database-schema/commit/3e2190f5bc96fd0bf632fbcac19619ea67fd2c13))
* add prerequisites ([4c44130](https://github.com/elyukai/optolith-database-schema/commit/4c44130326cb8d2b90edf349bbb631a70c53eef1))
* add race ([e2d1c52](https://github.com/elyukai/optolith-database-schema/commit/e2d1c52a0aed49b3770b5e973a90dd21362fcdea))
* add simple referencial integrity utilities ([fbb0f88](https://github.com/elyukai/optolith-database-schema/commit/fbb0f887f3a1a02f1ee3d8b44fefc4e45bc90931))
* first iteration of magical actions ([794824b](https://github.com/elyukai/optolith-database-schema/commit/794824b643ec4ddd2ff279aca15c4f1edb61e3db))


### Bug Fixes

* nested types and property paths ([e51cc15](https://github.com/elyukai/optolith-database-schema/commit/e51cc154caf4b4e7bedb66a7baff533bdc313d14))
