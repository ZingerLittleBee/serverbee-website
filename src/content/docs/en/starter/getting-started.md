---
title: Getting Started
---

## What is ServerBee?
ServerBee is an efficient tool that supports cross-platform monitoring, management, and terminal access. It supports Linux, Windows, macOS, and even NAS systems.

## Key Features

- **Powerful**: Monitor CPU cores, system load, memory usage, disk read/write, network IO, process management, and SSH terminal access.
- **Cross-platform**: Supports Windows, Linux, macOS, NAS, and Linux derivatives.
- **High Performance**: Powered by Rust and the high-performance framework Actix-Web.
- **Open Source**: The server program is completely open source, transparent, public, and customizable.

## How it works?

`ServerBee` uses an agent-based approach to connect each node with the control panel. Each node needs to install the **server-side program**, which periodically uploads the node's information to the **control panel** for monitoring and management.

The control panel and nodes communicate through `WebSockets`.

To ensure data security, ServerBee supports `token` authentication. Users can set a global token in the app or set a token separately for a specific node.

**The token for each node will be set on the first connection to the app.**

### Terminology

Control Panel: `ServerBee` APP

Server-side (managed) node: `server_bee-backend` or `ServerMilk`

### Usage Workflow
1. Install the **server-side program**. Refer to the User Guide in the directory for **installation instructions**.
2. Open the `ServerBee` app and enter the `IP` (or `domain`) and `port`.
3. Enjoy it!