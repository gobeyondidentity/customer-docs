---
title: Release Notes
id: release-notes
description: ''
slug: /release-notes 
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 02/08/2022
   author: Patricia McPhee
draft: true
displayed_sidebar: secureWorkforceSidebar
---

# Release Notes 2.75.0
## Authenticator


:::info we support the following versions
- macOS 10.15 (Catalina) and later
- Windows 10 build 19041 and later or Windows 11
:::
### What's new


The integrity of the macOS installation file (dmg) now gets validated before installation.

### Resolved


- After creating a custom deny policy, the custom deny message did not display on Android devices.
- If a user had two or more accounts on their Android device and didn't select an account before switching from the app, authentication prompts no longer appeared until the Beyond Identity app was forcefully closed and reopened.
- When attempting to authenticate through the Microsoft Edge browser using IE mode, the "_Could not verify your identity_" message appeared.

  ![microsoft-edge-ie-mode-error.jpeg](./images/microsoft-edge-ie-mode-error.jpeg)