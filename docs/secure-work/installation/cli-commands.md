---
title: CLI Commands
sidebar_position: 7
---
CLI Commands
============

Various CLI commands are available for use with the Linux Authenticator. To view all available command operations, issue the following command:

`beyond-identity help`

The following table provides a list of common commands:

| **Command Function** | **Command** |
|-----|------|
| View the installed authenticator version |`beyond-identity --version` |
| Import existing credential | `beyond-identity credential import <IMPORT-CODE>` |
| View registered/imported credentials | `beyond-identity credentials` |
| Export credential | `beyond-identity credential export <HANDLE (tenant name)>` |
| Delete credential | `beyond-identity credential delete <HANDLE (tenant name)>` |

#### Related Topics

[Installing the Authenticator on a Linux Device](/docs/secure-work/installation/installing-the-authenticator-on-a-linux-device)

[Debian Distribution](/docs/secure-work/installation/debian-distribution)

[RPM Distribution](/docs/secure-work/installation/rpm-distribution)