---
title: Kandji MDM policy
id: kandji-mdm-policy
description: ''
slug: /kandji-mdm-policy
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: false
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---



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

## Next steps
