---
title: Specify allowable versions installed
id: specify-allowable-versions-installed
description: ''
slug: /specify-allowable-versions-installed
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 02/08/2022
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---  


You can specify a range of allowable Authenticator versions that can be installed on devices. After configuring the policy, the administrator can apply the Version Control ID that is generated for the policy in the Authenticator app. Whenever the Authenticator performs an authentication, a request is sent to validate the version on the device. When configured, the administrator can then set the policy ID associated with the specified versions in the Authenticator app. Whenever the Authenticator performs an authentication, a request is sent to validate the version on the device.

*   If the installed version is within the range configured by the policy, no update is needed and no message indicating that the installed version must be installed.
    
*   If the installed version is outside the range set by the policy, a message is displayed asking the user to update to the recommended version, which is the version set in the maximum field.
  
**To create policy restricting users to a specific range of the Authenticator:**

1.  From the **Add version control** dialog, provide a **Name** for the policy. For example, **Test Group**.
    
2.  Under the appropriate device type section (in this example, **MacOS devices**), click **Version range**.
    
3.  Select the appropriate version (in this example, `2.37.1`) from the **Minimum version** drop-down menu.
    
4.  Select the appropriate version (in this example, `2.39.1`) from the **Maximum version** drop-down menu.
    
5.  Click **Add version control**.  
    ![](/images/version-control/version_control_test_group_macos_range.png)  
    The dialog closes and the version control policy is displayed on the page.  
    ![](/images/version-control/version_control_test_group_macos_range_added.png)
    

Any time a user attempts to authenticate, a request is sent to verify if an allowable version is installed on the device.

*   If the device is installed with any version from `2.37.1` up to and including 2.39.1, the authentication is successful.
    
*   If the device is installed with a version lower than `2.37.1`, a message is displayed requesting the user update to the version set in the maximum field (in this example, `2.39.1`).
    

The Version Control ID can now be applied to devices. Clicking on the copy icon copies the Control Version ID to the clipboard.

:::note
Multiple version control polices can be generated.
:::

