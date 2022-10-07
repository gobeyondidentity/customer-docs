---
title: Writing an Authentication Method Requirement Policy
sidebar_position: 2
---   

Writing an Authentication Method Requirement Policy
===================================================

:::note
This functionality is currently available on Android and iOS platforms.
:::

You can write policy to require that an authentication method (such as Password, PIN, biometric) is installed on the device when attempting to authenticate and/or requesting permission to be added and write the appropriate rule allowing or denying the device. To write an authentication method policy:

1.  From the [Admin Console](/docs/secure-work/workforce-settings/admin-console/admin-console-login), select the **Policy** tab.
2.  From the [Policy page](Defining_Policy.htm#Policy_page), click **Edit Policy**. 
3.  From the **Add Rule** dialog, click **Add attribute** next to **device platform** and select the appropriate platform from the drop-down menu.  
    ![](/images/policy/device_platform_ios.PNG)
4.  Click the second **Add attribute button** and select `Authentication method enabled` from the drop-down menu.
5.  Select the appropriate attribute from the second drop-down menu.
    *   For iOS devices, select one of the following: `Pin`, `Biometric` , or a `Pin and Biometric` combination  
        ![](/images/policy/authentication_method_ios.PNG)
    *   For Android devices, select one of the following: `Biometric` or a `Pin or Password` combination  
        ![](/images/policy/authentication_method_android.PNG)
6.  Set any other applicable attributes.
7.  Under **Then**, select the appropriate permissions action (`Allow`, `Deny`, or `Monitor`) from the drop-down menu.
8.  Click **Add**.  
    ![](/images/policy/authentication_method_android_biometric.PNG)
9.  The rule is added to the **Edit Policy** page. Create additional rules as needed or click [Publish Rule](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules) to permanently save it.  
    ![](/images/policy/authentication_method_android_biometric_edit_screen.PNG)

#### Related Topics

[Publishing Rules](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules)

[Policy Attributes](/docs/secure-work/workforce-settings/policy/policy-writing/policy-attributes)

[Writing Policy](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy)