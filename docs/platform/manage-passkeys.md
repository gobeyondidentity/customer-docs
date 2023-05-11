---
title: Manage passkeys
id: manage-passkeys
description: ''
slug: /manage-passkeys 
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: false
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---

A Passkey can be thought of as an X.509 certificate (in fact, it’s just a wrapper on top of one). 

[This topic tells me nothing about how to "manage" passkeys. It's just an overview of passkeys.]

Each passkey contains a public/private key pair where the private key is stored securely in a [TEE](https://en.wikipedia.org/wiki/Trusted_execution_environment). On macOS/iOS, this would be the [Secure Enclave](https://support.apple.com/guide/security/secure-enclave-sec59b0b31ff/web). When a user sets up an account with Beyond Identity, the device in which they register creates a passkey that becomes their identity. This private key associated with this passkey can never be removed from the device in question. It is, however, possible to extend the credential’s chain of trust by creating a new passkey on a different device and signing it with the private key of the first passkey.