---
title: How Beyond Identity works
id: how-it-works
description: 'Beyond Identity authenticates users and their devices by cryptographically binding users to devices, providing complete control over who and what devices can access your SaaS apps and cloud infrastructure.'
slug: /how-it-works 
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: true
doc_type: overview
displayed_sidebar: secureWorkforceSidebar
---

Beyond Identity provides secure and easy-to-use multi-factor authentication by cryptographically binding users to their devices. 

This is achieved through the native biometrics and built-in chipset of devices, which securely store private keys and perform high-trust cryptographic functions. The Beyond Identity Authenticator generates an immovable private key on each user's device and stores the public key in the Beyond Identity cloud.

Users are added to Beyond Identity's cloud-based directory via SCIM or API. A lightweight authenticator that enables users to add new devices is available in the following ways:

- Downloaded from the app store
- Deployed via MDM
- Integrated into a native application for a streamlined consumer-facing deployment

Policies control which and how many devices are permitted, and the Beyond Identity Authenticator shows the user all the data that is collected from the device to avoid privacy concerns.

During enrollment, Beyond Identity creates a credential that is bound to the device, which is initiated by clicking a link in an email or a link provided once the user successfully completes an already established login flow. The Beyond Identity Authenticator works with the device's TPM during enrollment to create a private key that cannot be copied, shared, or moved from the device. The public key is then sent and stored in Beyond Identity's cloud.

During each login, the authenticator engages the TPM to mint a fresh X.509 certificate, which is sent to Beyond Identity's cloud for verification. The public key is used to validate that the certificate was signed with the private key, providing the same proven cryptography that powers TLS and secures the Internet.

The Beyond Identity Platform Authenticator runs on a wide array of mobile devices, tablets, and computers, and each device requesting access must have the Beyond Identity Platform Authenticator app and a valid credential to access the target application or resource.

Beyond Identity also provides a web-hosted version of their native platform authenticator that enables users to authenticate using cryptographically backed secure passwordless authentication without having to download the platform authenticator.

Beyond Identity's policy engine ensures that only authorized users are able to enroll credentials on approved devices. Policies can be configured to control whether your workforce can enroll credentials on work-issued devices or if BYOD is permitted, and can also limit the number of devices customers and consumers are allowed to enroll.

During every login or step-up authentication, the policy engine inspects up-to-date risk signals collected by the authenticator at the time of the request. The policy engine evaluates these fresh signals and determines if a user and a device meet your security requirements before permitting access to the requested applications or resources. Policies can be configured to alert and/or block access.