---
title: Commands
id: cli-commands
description: ''
slug: /cli-commands
keywords: 
 - installation
 - commands
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/30/2022
   author: Patricia McPhee
draft: true
doc_type: reference
displayed_sidebar: secureWorkforceSidebar
---

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

