---
title: 发行说明
sidebar_position: 5
description: Changelog
---

[`serverbee-backend`](https://github.com/ZingerLittleBee/server_bee-backend) 发行说明

## `2.3.0` (2023-11-26)
### Features
- Support IPv6

## `2.2.1` (2023-10-22)
### Features
- Add shell type selector

## `2.2.0` (2023-10-21)
### Features
- Add Windows terminal support

### Refactor
- Refactor the pty implement

### Bug Fixes
- Fix the font family not work of the terminal page

## `2.1.2` (2023-10-10)
### Features
- Add data dir option

## `2.1.1` (2023-10-09)
### Features
- Avoid same route redirect
- Validate state cache

### Refactor
- Login page

## `2.1.0` (2023-10-05)
### Features
#### Web
- Add `pty` support

#### view
- Add `terminal` page
- Add `terminal` settings

## `2.0.0` (2023-09-07)
### Features
- Dashboard for web
- Config for web
- Data report

### Refactor
- Refactor the config struct
- Refactor the local api

## `1.2.6` (2023-06-11)
### Bug Fixes
- Linux daemon template

## `1.2.5` (2022-06-07)
### Features
- Local Api

## `1.2.4` (2022-06-06)
### Deps
- Update dependencies

## `1.2.3` (2022-03-26)
### Features
- Add `temperature`

## `1.2.2` (2022-03-19)
### Features
- Add `systemd` tips to start deploy on startup for the linux

## `1.2.1` (2022-03-18)

### Bug Fixes
- Get the latest version from GitHub to exclude pre-release
- Adaptation of an app version that is adapted unrequited verification

## `1.2.0` (2022-03-17)

### Features
- Token auth
- localhost token api

## `1.1.5` (2022-02-23)

### Bug Fixes
- Fix panic when query sector size

## `1.1.4` (2023-02-13)

### Bug Fixes
- Replace system-native TLS with rustls

## `1.1.3` (2023-02-12)

### Features
- Docker support
- Old Ubuntu (< 22) support
- Replace cos with cf R2

## `1.1.2` (2023-01-31)

### Features
- process list
- detail process
- kill process
- add children for current process

## `1.1.1` (2023-01-11)

### Features
- support more target triple

## `1.1.0` (2023-01-09)

### Features
- Interactive install
- Download progress bar

## `1.0.2` (2022-12-29)

### Features
- Add Cli for Web
- Add config file for deploy

### Bug Fixes
- Cli params not identify in fact

## `1.0.1` (2022-12-21)

### Bug Fixes

- [high cpu usage in linux bug](https://github.com/ZingerLittleBee/server_bee-backend/issues/5)


## `1.0.0` (2022-10-21)

### Features

- CPU load
- load average
- memory usage
- uptime / boot time
- filesystem mounts (and disk usage)
- disk I/O statistics
- network interfaces
- network traffic statistics
- switch between overview and details info
