---
title: Mac Desktop Login
id: mac-desktop-login
description: ''
slug: /mac-desktop-login 
keywords: 
 - mac
 - macOS
 - desktop login
pagination_next: null
pagination_prev: null
last_update: 
   date: 07/18/2023
   author: Patricia McPhee
draft: true
doc_type: overview
displayed_sidebar: secureWorkforceSidebar
---

Mac Desktop Login (MDL) allows for increased security and convenience when authenticating to your macOS computer. 

Mac Desktop Login allows you to logon to MacOS using your your phone.


## Prerequisites

- Versions supported
    - MacOS version 12+
    - IOS 13+
- Entitlement Provisioned: Contact Beyond Identity Support to have your Entitlement Enabled


## Installation

- Unprivileged/MDM Install
  - Give helper full disk access
  - Allow incoming for SecurityAgent / PA
- Privileged/Local Admin Install


## Enrollment

The macOS desktop login allows users to perform a passwordless login to their macOS using their phone. You'll need to connect your phone to your Mac to get started. 

1. From the Authenticator on your Mac, click Enroll in Desktop Login.

1. When prompted, enter your password to prove it's you and click Confirm. Enrollment starts. 

1. When you see the QR code, use the QR Scanner on your iPhone to scan the code. The mobile Platform Authenticator (PA) launches automatically and performs a face ID check.

   - If desktop enrollment is successful, you'll see a button in the mobile PA for your macOS device—for example, John's MacBook Pro.

   - If it's not successful, <what are the next steps?>

1. Log out to complete the enrollment on your Mac to load a new authorization plug-in into the system's login window. 

  Give it a moment for the login window to appear. 

1. At the prompt in the login window, log in using your phone. You can also use your password, but you'll use your phone for this step.  

1. From your iPhone, tap the button for your macOS device, for example, John's MacBook Pro.

1. At the prompt, tap to log in and do a face ID check to finish logging you into your Mac. 

Once logged in, you can use your phone to perform step-up, Touch ID, or FileVault authentications. 

## Authentication

- Log in
  - Phone
  - Password
- Unlock
  - Phone
  - Password
  - Touch ID
- Step up
  - Phone
  - Password
- Touch ID
  - File Vault


### Step-up 

1. After you've logged in, open the System Preferences window and click Security & Privacy.

1. From your iPhone, tap the button for your macOS device, for example, John's MacBook Pro.

1. From the Systems Preferences window at the bottom, click the lock to make changes. 

1. On your iPhone, the button changes to Tap to perform step-up authentication. Tap it and do a face ID check.

You've successfully performed a step-up Authentication. 


### Touch ID 

In addition to step-up authentication, you can also use Touch ID to authenticate. 

1. With the screen locked on your macOS device, open the mobile PA and tap the button for your macOS device, for example, John's MacBook Pro.

1. On your iPhone, the button changes to Tap to unlock. Tap it to do a face ID check. 

You've unlocked your screen. 



### FileVault 

If FileVault is enabled and your Mac has full disk encryption, you'll see the FileVault prompt stating that Touch ID requires your password any time you restart or boot up the Mac. The FileVault prompt runs out of an embedded bootloader because the disk is encrypted and the macOS hasn't fully booted yet. Apple doesn't allow modification to this prompt or bootloader.

The only option is to manually enter your password to decrypt the drive and boot the macOS device. 

After manually entering your password, you'll see the progress bar indicating the drive is being decrypted, and the OS is booting.

In a future release, Beyond Identity will control and rotate your passwords allowing you to use your iPhone to reveal your desktop password if you forgot it. You'll use this password to enter manually. Additionally, any time you've revealed your passkey on your iPhone, the phone will note this fact automatically. Then, the password gets rotated to a new one, so you won't need to remember it. 



## Unenroll


## Uninstall


## Troubleshooting

- Recovery
  - MDM
  - Local Admin Path
    - Recovery Partition
    - ssh
