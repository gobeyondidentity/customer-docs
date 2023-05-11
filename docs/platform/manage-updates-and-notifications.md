---
title: Manage updates and notifications
id: manage-updates-notifications
description: ''
slug: /manage-updates-notifications
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 02/08/2022
   author: Patricia McPhee
draft: false
doc_type: overview
displayed_sidebar: secureWorkforceSidebar
---



By default, users are notified any time an update is available. 

Users can also check for updates at any time by selecting the **Check for Updates** drop-down menu item. These options allow users to download and install the latest functionality available.

Since the downloading and use of the Beyond Identity software is controlled and managed by each company using the software, a company may want to manage installations and updates. There are several reasons why a company may want to manage the installation of software. These include:

*   Verifying a release to ensure there are no issues with the software.
*   Verifying a release to ensure it does not cause issues with other applications within their environment.
*   Ensuring everyone within the organization is using the same release of software.

Depending on the company’s policy regarding downloading software, automatic notifications and the ability to manually check for updates can be turned off, restricting users from downloading and installing updates. The left image shows the **Check for Updates** item included in the drop-down menu when enabled and the right image shows the menu item removed after notifications have been disabled. 

![](/images/updates/updates.png)

The method to disable update notifications and to check for updates depends on the platform. 

:::note
To require users to use a specific version or range of versions when attempting to authenticate or add devices, ...
:::

## macOS

Use the command line utility, `BIConfigure`, to  enable and disable update notifications. Administrators can remotely run the utility via MDM to enable and disable updates and to remove the menu option to check for updates.

Keep following points in mind when using the utility:

*   The utility can be found at the following location:
    `/Applications/Beyond Identity.app/Contents/Resources/BIConfigure`
        
*   The utility must be run as the root user to enable or disable update notifications. If run as a non-root user, the message `Must be run as root` is displayed.
*   The file, `/Library/Preferences/com.beyondidentity.preferences.plist`, is created when the command to disable update notifications is run. The file should contain `updatesEnabled = 0` when viewed with `defaults read /Library/Preferences/com.beyondidentity.preferences.plist`. Make sure all running instances of the Authenticator are restarted.
*   The file, `/Library/Preferences/com.beyondidentity.preferences.plist`, is created when the command to enable update notifications is run. The file should contain `updatesEnabled = 1` when viewed with `defaults read /Library/Preferences/com.beyondidentity.preferences.plist`. Make sure all running instances of the Authenticator are restarted.
*   Running the utility with any argument not listed in the following table or running the utility without any argument will simply display `Invalid Arguments`.

### Available Arguments


The following arguments are available to use with `BIConfigure`.

| Command/Arguments | Description |
|-----|------|
| BIConfigure --disable-updates | Disable updates |
| BIConfigure --show-updates | Display updates |
| BIConfigure --enable-updates | Enable updates |

### Examples


The following examples provide the output that is displayed when the command/argument combination as a root user and as a non-root user.

`$ ./BIConfigure --disable-updates   Must be run as root`

  
`$ ./BIConfigure --show-updates   Updates enabled`

 `$ defaults read /Library/Preferences/com.beyondidentity.preferences.plist   2021-05-27 21:03:51.851 defaults[58215:4039346]   Domain /Library/Preferences/com.beyondidentity.preferences.plist does not exist`

  
`$ sudo ./BIConfigure --disable-updates   Updates disabled`

  
`$ ./BIConfigure --show-updates   Updates disabled`  
 

`$ defaults read /Library/Preferences/com.beyondidentity.preferences.plist   {updatesEnabled = 0;}`

  
`$ sudo ./BIConfigure --enable-updates   Updates enabled`

  
`$ ./BIConfigure --show-updates   Updates enabled`

  
`$ defaults read /Library/Preferences/com.beyondidentity.preferences.plist   {updatesEnabled = 1;}`  
 

`$ ./BIConfigure   Invalid arguments`  
 

`$ ./BIConfigure --invalid   Invalid arguments`

:::note
In addition to managing updates, system administrators can also create policy to [manage the the Authenticator versions](../policy/set-platform-version-policy.mdx) that can be installed on devices.
:::

## Windows

By default, update notifications are enabled. To disable update notifications and remove the menu option to check for updates, changes must be made to the Registry.

1.  Open the Registry Editor and navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\Policies`.
2.  Add the following sub keys: `BeyondIdentity\Authenticator`
3.  Add the `DisableUpdates` value to the `Authenticator` key. The Authenticator only looks for the presence of `DisableUpdates` so the value can be any type (such as a string or DWORD).  
4.  After closing the Registry, restart the Authenticator application for the change to take effect. If another instance of the Authenticator is running in the application tray located in the bottom-right of  the screen, also restart that application.  
    ![](/images/updates/disable_updates_windows.PNG)

Once restarted, users will not receive notification updates and the **Check for Updates** menu item is no longer displayed.

To re-enable notification updates and add the Check for Updates menu item back to the Policy drop-down menu, remove the DisableUpdates key.

:::note
In addition to managing updates, system administrators can also create policy to ... that can be installed on devices.
:::
