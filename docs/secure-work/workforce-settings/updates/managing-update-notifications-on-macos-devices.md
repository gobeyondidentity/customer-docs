---
title: Managing Updates and Notifications on macOS Devices
sidebar_position: 3
---  

Managing Updates and Notifications on macOS Devices
===================================================

Use the command line utility, `BIConfigure`, to  enable and disable update notifications. Administrators can remotely run the utility via MDM to enable and disable updates and to remove the menu option to check for updates.

Keep following points in mind when using the utility:

*   The utility can be found at the following location:
    `/Applications/Beyond Identity.app/Contents/Resources/BIConfigure`
        
*   The utility must be run as the root user to enable or disable update notifications. If run as a non-root user, the message `Must be run as root` is displayed.
*   The file, `/Library/Preferences/com.beyondidentity.preferences.plist`, is created when the command to disable update notifications is run. The file should contain `updatesEnabled = 0` when viewed with `defaults read /Library/Preferences/com.beyondidentity.preferences.plist`. Make sure all running instances of the Authenticator are restarted.
*   The file, `/Library/Preferences/com.beyondidentity.preferences.plist`, is created when the command to enable update notifications is run. The file should contain `updatesEnabled = 1` when viewed with `defaults read /Library/Preferences/com.beyondidentity.preferences.plist`. Make sure all running instances of the Authenticator are restarted.
*   Running the utility with any argument not listed in the following table or running the utility without any argument will simply display `Invalid Arguments`.

Available Arguments
-------------------

The following arguments are available to use with `BIConfigure`.

| Command/Arguments | Description |
|-----|------|
| BIConfigure --disable-updates | Disable updates |
| BIConfigure --show-updates | Display updates |
| BIConfigure --enable-updates | Enable updates |

Examples
--------

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
In addition to managing updates, system administrators can also create policy to [manage the the Authenticator versions](/docs/secure-work/workforce-settings/policy/policy-writing/setting-a-platform-version-policy) that can be installed on devices.
:::

#### Related Topics

[Managing Updates and Notifications](/docs/secure-work/workforce-settings/updates/managing-updates-and-notifications)

[Managing Update Notifications on Windows Devices](/docs/secure-work/workforce-settings/updates/managing-update-notifications-on-windows-devices)

[Specifying a Platform Version Policy](/docs/secure-work/workforce-settings/policy/policy-writing/setting-a-platform-version-policy)