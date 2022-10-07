---
title: Configuring Identity Providers
sidebar_position: 2
---    

Configuring Identity Providers
==============================

To allow tenant administrators to log into the Beyond Identity Console, you must configure an identity provider. Currently, Beyond Identity supports SAML and OIDC-based identity providers. Your tenant can be configured to support up to two active identity provider types at a time, but at least one must always be active. Administrators attempting to access the Admin Console will have the option to choose the Identity Provider type to use to authenticate to the Admin Console.

The Admin Console provides two options to configure identity providers.

 

Option

Description

Single Sign-On (SSO)

Allows access to the Admin Console through SSO. **Note:** We recommend you use the Single Sign-On login option if your organization has one.

Console Passwordless Sign-On

Allows access to the Admin Console directly from the Beyond Identity Authenticator. This option allows organizations who do not have SSO or prefer to not connect the Admin Console to their SSO. 

To set the appropriate Identity Provider type for your organization.

1.  Log into the [Admin Console](../Admin_Console.htm) and from the **Home** screen, select the **Settings** tab.
2.  From the **Settings** page, click **Console Login**.
3.  Do one of the following:
    1.  To restrict your organization to log into the Admin Console using only the SSO option:
        1.  Click the **Edit** icon next to disable the **Console Passwordless Login** option.
        
    2.  To allow access from the Authenticator, enable the option.  
        [![](/images/admin/console_passwordless_login_disabled.png)](/images/admin/console_passwordless_login_disabled.png)

**Note:**  Although the Passwordless Login option is visible in versions earlier than 2.53.0, it is disabled. The Tenant administrator can enable the button from the Admin Console. To check your version, open your credential and click/tap the **About this credential**, and scroll down to locate the **App Version** number.

[![](/images/admin/passwordless_auth.png)](/images/admin/passwordless_auth.png)

To set the appropriate Identity Provider type for your organization.

1.  Log into the [Admin console](../Admin_Console.htm) and from the Home screen, select the **Settings** tab.
2.  From the **Settings** page, click **Console Login**.
3.  Do one of the following:
    1.  To restrict your organization to log into the Admin Console using the Single Sign-On option, disable the **Console Passwordless Login** option.
    2.  To allow access from the Platform Authenticator, enable the option.

If the disabled option is grayed out and cannot be enabled, the Admin Console does not have the RBAC feature enable. To enable RBAC, contact the Beyond Identity support staff.

Until the Passwordless Login option is enabled in the Admin Console, the following error message is displayed when attempting to log in using this option:

[![](/images/admin/passwordless_login_failed.png)](/images/admin/passwordless_login_failed.png)

If a user receives the following message when attempting to login with the “Passwordless Login” button this means the tenant has the Passwordless Login Identity Provider type disabled.

**Note:** all tenants created before the v2.53.0 release will have the “Passwordless Login” identity provider type disabled by default, so expect to see this message.

![](/images/admin/passwordless_login_failed.png)