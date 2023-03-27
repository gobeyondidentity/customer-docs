---
title: Set platform version policy
id: set-platform-version-policy
description: ''
slug: /set-platform-version-policy
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

Policy can be written to detect a specific version or version range that must be met to allow or restrict a device to authenticate or a device to be added. If a device attempting to authenticate or making a request to be added does not match the version needed to authenticate, permission is not granted. If matched, authentication is granted.

To write policy based on platform version:

1.  From the [Admin Console](/docs/secure-work/workforce-settings/admin-console/admin-console-login), select the **Policy** tab.
2.  From the [Policy page](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy#creating-rules), click **Edit Policy**. 
3.  From the **Add Rule** dialog, click **Add attribute** next to **device platform** and select the appropriate platform from the drop-down menu.  
    ![](/images/policy/device_platform_macos.PNG)
4.  Click the second **Add attribute** button that appears. By default, the `**Antivirus**` attribute is displayed in the first field.
5.  Click the drop-down menu and select the `Version` attribute.
6.  Select the appropriate operator from the drop-down menu in the second field and then type in a version or versions in the third field.  Keep the following points in mind when specifiying operators and version numbers:
    1.  The following operators are supported: `is`, `greater than`, `greater than or equal to`, `less than`, `less than or equal to`
    2.  A wildcard (`*****`) can be used when specifying a single version using the `is` operator. (For example, `11.0.` or `10.`)
    3.  When using the above operators, specify using the `_#.#.#_` format, which indicates the `major version`, `minor version`, and `build number` of the platform. For example, `10.0.19042` corresponds to Windows 10 (major), 0. (minor) and 19042 (build).
    4.  When specifying more than one version, use a comma-separated list with no spaces. For example, 10.1.0,10.1.2 or 10.1.1,10.1.2,10.2.\*
7.  Set any other applicable attributes.
8.  Under **Then**, select the appropriate permissions action (`Allow`, `Deny`, or `Monitor`) from the drop-down menu.
9.  Click **Add** when done.  
    ![](/images/policy/platform_version_greater_equal_to_macos.PNG)
10.  The rule is added to the **Edit Policy** page. Create additional rules as needed or click [Publish Rule](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules) to permanently save it.

#### Related Topics


[Publishing Rules](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules)

[Policy Attributes](/docs/secure-work/workforce-settings/policy/policy-writing/policy-attributes)

[Writing Policy](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy)