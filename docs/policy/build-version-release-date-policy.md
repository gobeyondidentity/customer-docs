---
title: Build release policies
id: build-release-policies
description: ''
slug: /build-release-policies
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

System administrators can write policy to allow or restrict macOS and Windows users to authenticate and/or add devices based on the build/version and release date attribute settings. If set, the policy engine checks to see if the:

*	Build (macOS) or Revision (Windows) is within the last n update of the most recent major release.
	
*	Build Release Date (macOS) or Revision Release Date (Windows) is within or is not within the last number of specified days.

	![](/images/policy/build-release-date-macos.PNG)
	![](/images/policy/build-release-date-windows.PNG)

#### Example ####

1.  From the [Admin Console](/docs/secure-work/workforce-settings/admin-console/admin-console-login), select the **Policy** tab.
2.  From the [Policy page](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy#creating-rules), click **Edit Policy**.
3.	From the **Add Rule** dialog, click **Add attribute** next to **device platform** and select the appropriate platform from the drop-down menu. In this example, macOS.  
    ![](/images/policy/device_platform_macos.PNG)
4.	Click the second **Add attribute** button that appears and select `Version: Build Date` from the drop-down menu`.
5.  Leave the `is in the last` attribute in the second field.
5.	Type `5` in ther **days** field.
7.  Set any other applicable attributes.
9.  Click **Add** when done.  
    ![](/images/policy/version-build-release-daate-macos-is-in-last-days.PNG)
10.  The rule is added to the **Edit Policy** page. Create additional rules as needed or click [Publish Rule](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules) to permanently save it.

#### Related Topics

[Publishing Rules](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules)

[Policy Attributes](/docs/secure-work/workforce-settings/policy/policy-writing/policy-attributes)

[Writing Policy](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy)