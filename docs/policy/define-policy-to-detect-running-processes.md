---
title: Detect running processes policy
id: detect-running-processes
description: ''
slug: /detect-running-processes
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


**Note:** This functionality is currently available on macOS, Windows, and Linux platforms.

You can write policy to detect and restrict access to a device that does not have a required process running (for example, BitLocker) and write an appropriate deny message.

You can write policy to detect processes running on a device and make decisions to allow or restrict access to a device based on the defined policy rule. For example, a policy rule can be written to restrict access if the device does not have a required process running (for example, BitLocker) and write an appropriate deny message.

1.  From the Admin Console, select the **Policy** tab.
2.  From the Policy page, click **Edit Policy**.
3.  From the **Add Rule** dialog, click **Add Attribute** next to **device platform**.
4.  Select the appropriate platform from the drop-down menu.
5.  Click the second **Add attribute button** and select either `Process Running contains` or `Process Running does not contain` from the drop-down menu.
6.  Type the appropriate value to the right of the attribute that you just selected.
7.  Set any other applicable attributes.
8.  Under **Then**, select the appropriate permissions action (`Allow`, `Deny`, or `Monitor`) from the drop-down menu.
9.  Click **Add**.  
    ![](/images/policy/device_platform_process_not_running.PNG)
10.  The rule is added to the **Edit Policy** page. Create additional rules as needed or click Publish Rule to permanently save it.

