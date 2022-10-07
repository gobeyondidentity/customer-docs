---
title: Managing Updates and Notifications on Windows Devices
sidebar_position: 2
---   

Managing Updates and Notifications on Windows Devices
=====================================================

By default, update notifications are enabled. To disable update notifications and remove the menu option to check for updates, changes must be made to the Registry.

1.  Open the Registry Editor and navigate to `HKEY_LOCAL_MACHINE\SOFTWARE\Policies`.
2.  Add the following sub keys: `BeyondIdentity\Authenticator`
3.  Add the `DisableUpdates` value to the `Authenticator` key. The Authenticator only looks for the presence of `DisableUpdates` so the value can be any type (such as a string or DWORD).  
4.  After closing the Registry, restart the Authenticator application for the change to take effect. If another instance of the Authenticator is running in the application tray located in the bottom-right of  the screen, also restart that application.  
    ![](/images/updates/disable_updates_windows.PNG)

Once restarted, users will not receive notification updates and the **Check for Updates** menu item is no longer displayed.

To re-enable notification updates and add the Check for Updates menu item back to the Policy drop-down menu, remove the DisableUpdates key.

:::note
In addition to managing updates, system administrators can also create policy to [manage the the Authenticator versions](/docs/secure-work/workforce-settings/policy/policy-writing/setting-a-platform-version-policy) that can be installed on devices.
:::

#### Related Topics

[Managing Updates and Notifications](/docs/secure-work/workforce-settings/updates/managing-updates-and-notifications)

[Managing Update Notifications on macOS Devices](/docs/secure-work/workforce-settings/updates/managing-update-notifications-on-macos-devices)

[Setting a Platform Version Policy](/docs/secure-work/workforce-settings/policy/policy-writing/setting-a-platform-version-policy)