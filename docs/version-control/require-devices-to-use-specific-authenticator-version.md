---
title: Require devices to always use specific authenticator version
id: require-specific-authenticator-version
description: ''
slug: /require-specific-authenticator-version
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 04/08/2022
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---  



You can specify a range of allowable Authenticator versions that can be installed devices. After configuring the policy, the administrator can apply the Version Control ID that is generated for the policy in the Authenticator app. Whenever the Authenticator performs an authentication, a request is sent to validate the version on the device. When configured, the administrator can then set the policy ID associated with the specified versions in the Authenticator app. Whenever the Authenticator performs an authentication, a request is sent to validate the version on the device.

*   If the installed version matches the version set by the policy, no update is needed and no message indicating that the installed version must be installed.
    
*   If the installed version does not match the version set by the policy, a message is displayed asking the user to update to the required version.
    

**To create policy restricting users to a specific version of the Authenticator:**

1.  From the **Add version control** dialog, provide a **Name** for the policy. For example, **Test Group**.
    
2.  Under the appropriate device type section (in this example, **MacOS devices**), click **Version range**.
    
3.  Select the appropriate version (in this example, `2.39.1`) from the **Minimum version** drop-down menu.
    
4.  Select the same version (in this example, `2.39.1`) from the **Maximum version** drop-down menu.
    
5.  Click **Add version control**.  
    ![](/images/version control/version_control_add_test_group.png)  
    The dialog closes and the version control policy along with the Version Control ID is displayed on the page.  
    ![](/images/version control/version control_version_added_macos.png)
    

Any time a user attempts to authenticate, a request is sent to verify if the specified version (in this example, 2.39.1) is installed on the device.

*   If the device is installed with `2.39.1`, authentication is successful.
    
*   If the device is installed with any other version, a message is displayed requesting the user update to the specified version.
  


The Version Control ID can now be applied to devices. Clicking on the copy icon copies the Control Version ID to the clipboard.

:::note
Multiple version control polices can be generated.
:::

#### Related Topics

[Specifying a Range of Allowable Versions that can be installed on devices](/docs/secure-work/workforce-settings/version-control/specifying-a-range-of-allowable-versions-that-can-be-installed-on-devices)

[Require Devices to Always use the Latest Version](/docs/secure-work/workforce-settings/version-control/require-devices-to-always-use-the-latest-authenticator-version)

[Configuring a macOS device with the Version Control ID](/docs/secure-work/workforce-settings/version-control/configuring-a-macos-device-with-the-version-control-id)

[Configuring a Windows Device with the Version Control ID](/docs/secure-work/workforce-settings/version-control/configuring-a-windows-device-with-the-version-control-id)