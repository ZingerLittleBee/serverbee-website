---
title: Getting started guide
sidebar_position: 0
---

## What is ServerBee？
ServerBee is a cross-platform efficiency tool that integrates monitoring, management, and terminal support for `Linux`, `Windows`, `macOS`, and even `NAS` systems.

## Main Features
- Powerful functions: CPU cores, system load, memory usage, disk read/write, network card IO, process management, SSH terminal.
- Cross-platform: Supports `Windows`, `Linux`, `macOS`, `Nas`, and `Linux-derived` systems.
- High performance: Uses the high-performance framework `Actix-Web` for providing services, powered by `Rust`.
- Open source: The server program is fully open source, transparent, public, and customizable.

## How it works

`ServerBee` connects various nodes to the control side by using agents. Each node needs to install the **server-side** program, which periodically uploads the node's information to the **control side** for monitoring and management.

Communication between the control side and the nodes is done through `Websocket`.

To ensure data security, ServerBee supports `Token` authentication, allowing users to set a global Token in the APP or set a Token for a specific node individually.

**The Token for each node will be set when it first connects to the APP.**

### Terminology

Control side: `ServerBee` APP

Server-side (Controlled side): `server_bee-backend` or `ServerMilk`

### Usage process
1. Install the **server-side** program, please refer to the **User Guide** in the directory for installation instructions.
2. Open the `ServerBee` APP and enter the IP (domain) and port number.
3. Start using!
