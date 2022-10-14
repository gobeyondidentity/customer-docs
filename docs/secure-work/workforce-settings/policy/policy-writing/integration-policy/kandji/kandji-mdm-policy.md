---
title: Write a Kandji MDM Policy
sidebar_position: 3
--- 

Write a Kandji MDM Policy
==================

You can write policy to allow, monitor, or deny access based on the MDM setting configured for a device. In the following example, Kandji-connected devices not MDM enabled are denied access when attempting to authenticate.

1.  From the **Add Rule** dialog, click **Add attribute** to the right of the **integration** attribute.
2.  Select the following from the drop-down menus:
    1.  `Kandji`
    2.  `MDM Enabled`
    3.  `False`
3.  Under **Then**, select `Deny` from the drop-down menu.
4.  (Optional) Add a customized notification informing a user why authentication was denied.
5.  Click **Add**.  
    ![](/images/Integrations/kandji/kandji_mem_enabled_no_deny_auth.PNG)

#### Related Topics

[Publishing Rules](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules)

[Policy Attributes](/docs/secure-work/workforce-settings/policy/policy-writing/policy-attributes)

[Writing Policy](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy)