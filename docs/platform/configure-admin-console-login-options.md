---
title: Configure Admin Console login
id: configure-admin-console-login-options
description: ''
slug: /configure-admin-console-login-options
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



Beyond Identity provides two login option types for access to the Admin Console. Tenant administrators can log in using:

*   Your **organization's SSO provider.** We recommend you use the Single Sign-On login option if your organization has one.
*   Your **Beyond Identity credential.** This allows access to the Admin Console directly from the Beyond Identity Platform Authenticator. This option allows organizations who do not have SSO or prefer to not connect the Admin Console to their SSO. 

![](/images/admin/admin_console_login_screen2.PNG)

**Note:** Beyond Identity currently supports SAML and OIDC-based identity providers. Your tenant can be configured to support up to two active identity provider types at a time, but at least one must always be active. Administrators attempting to access the Admin Console will have the option to choose the Identity Provider type to use to authenticate to the Admin Console.

To set the appropriate login options for your organization.

1.  From the [Admin Console](./admin-console.md), select the **Settings** tab.
2.  From the **Settings** page, click **Console Login**.
3.  Click the **Edit** icon that appears when you hover next to **Enabled**.   
    ![](/images/admin/console_login_edit_enabled.PNG)
4.  Do one of the following:
    1.  To restrict your organization to log into the Admin Console using only the SSO option, click the button to change from `Enabled` to `Disabled`.  
        ![](/images/admin/passwordless_login_disabled.PNG)
    2.  To allow access from the Authenticator, change from `Enabled` to `Disabled`.  
        ![](/images/admin/passwordless_login_enabled.PNG)
5.  Click **Save Changes**.

**Notes:**  
  
Although the Passwordless Login option is visible in versions earlier than 2.53.0, it is disabled by default. The Tenant administrator can enable the button from the Admin Console. To check your version, open your credential and click/tap the **About this credential**, and scroll down to locate the **App Version** number.  
  
If the disabled option is grayed out and cannot be enabled, the Admin Console does not have the RBAC feature enabled. To enable RBAC, submit a ticket the Beyond Identity support staff.
