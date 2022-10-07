---
title: Limiting the Number of Devices a User can Register
sidebar_position: 3
---   

Limiting the Number of Devices a User can Register
==================================================

System administrators can write policy to limit the number of devices a user can register. To limit the number of devices:

1.  From the [Admin Console](/docs/secure-work/workforce-settings/admin-console/admin-console-login), select the **Policy** tab.
2.  From the [Policy page](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy#creating-rules), click **Edit Policy**. 
3.  From the **Add Rule** dialog, click **Add attribute** next to **Any user**.
4.  The `has registered device(s)` attribute should be displayed in the field. If not, select it from the drop-down menu.
5.  Select the appropriate attribute for the next field from the drop-down menu. By default, the `is` attribute is displayed.
6.  Type the appropriate number in the third field or use the up/down arrows to scroll through to find the number. 
7.  Set any other applicable attributes.
8.  Under **Then**, select `Deny`.
9.  Add an optional customized notification, if desired.
10.  Click **Add** when done.  
    ![](/images/policy/add_rule_deny_registered_devices.PNG)
11.  The rule is added to the **Edit Policy** page. Create additional rules as needed or click [Publish Rule](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules) to permanently save it.

#### Related Topics

[Publishing Rules](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules)

[Policy Attributes](/docs/secure-work/workforce-settings/policy/policy-writing/policy-attributes)

[Writing Policy](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy)