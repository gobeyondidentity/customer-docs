---
title: Detect rooted Android device policy
id: rooted-android-policy
description: ''
slug: /rooted-android-policy
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
--- 



You can write a policy to detect whether or not an Android device has been routed when attempting to authenticate or requesting permission to be added and write the appropriate rule allowing or denying the device.  To write policy to detect a rooted device:

1.  From the Admin Console, select the **Policy** tab.
2.  From the Policy page, click **Edit Policy**. 
3.  From the **Add Rule** dialog, click **Add attribute** next to **device platform** and select `Android` from the drop-down menu.  
    ![](/images/policy/device_platform_android.PNG)
4.  Click the second **Add attribute** button that appears. The `**Device Root is**` attribute should be displayed in the field. If not, select it from the drop-down menu.
5.  Select the appropriate attribute (`**Detected**` or `**Not Detected**`) from the second drop-down menu.
6.  Set any other applicable attributes.
7.  Under **Then**, select the appropriate permissions action (`**Allow**`, `Deny`, or `**Monitor**`) from the drop-down menu.
8.  Click **Add**.  
    ![](/images/policy/device_rooted_android_detected_deny.PNG)
9.  The rule is added to the **Edit Policy** page. Create additional rules as needed or click Publish Rule to permanently save it.

