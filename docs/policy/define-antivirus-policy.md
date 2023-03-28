---
title: Define an antivirus policy
id: define-antivirus-policy
description: ''
slug: /define-antivirus-policy
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


:::note
This functionality is currently available on macOS and Windows platforms.
:::

You can write policy to detect whether or not antivirus software is running on a device that is attempting to authenticate  or requesting permission to be added and write the appropriate rule allowing or denying the device. To write an antivirus policy:

1.  From the [Admin Console](/docs/secure-work/workforce-settings/admin-console/admin-console-login), select the **Policy** tab.
2.  From the [Policy page](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy#creating-rules), click **Edit Policy**. 
3.  From the **Add Rule** dialog, click **Add attribute** next to **device platform** and select the appropriate platform from the drop-down menu.  
    ![](/images/policy/device_platform_windows.PNG)
4.  Click the second **Add attribute** that appears. The `Antivirus` attribute is displayed in the field by default.
5.  Select the appropriate attribute `(On` or `Off`) from the second drop-down menu.
6.  Set any other applicable attributes.
7.  Under **Then**, select the appropriate permissions action (`**Allow**`, `Deny`, or `**Monitor**`) from the drop-down menu.
8.  Click **Add**.  
    ![](/images/policy/antivirus_windows_on.PNG)
9.  The rule is added to the **Edit Policy** page. Create additional rules as needed or click [Publish Rule](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules) to permanently save it.

#### Related Topics

[Publishing Rules](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules)

[Policy Attributes](/docs/secure-work/workforce-settings/policy/policy-writing/policy-attributes)

[Writing Policy](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy)