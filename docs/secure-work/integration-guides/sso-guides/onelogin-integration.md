---
title: OneLogin Integration
sidebar_position: 1
---

OneLogin Integration
====================

This guide provides information on how to:

*   Set up Beyond Identity as a passwordless authentication to your OneLogin environment
    
*   Set up Beyond Identity to use Beyond Identity as an Identity Provider
    

Prerequisites
-------------

Ensure you have a OneLogin account with “Superadmin” privileges.


Beyond Identity Configuration
-----------------------------
### Information to Provide to Beyond Identity
*	Your Companty Name

*	Your Shibboleth IDP Entity ID. For example: `https://[your-domain].onelogin.com`

*   Beyond Identity Admin Console Credentials
	*   SSO Entity ID
	*   SSO X.509 Signing Certificate 

*	Beyond Identity User Console Application Credentials (This will be updated by the customer directly in the Beyond Identity Admin Console.)
	*   SSO Client Id
	*   SSO Client Secret

*	(Optional) A logo for your corporation. Logo requirements:
	*   300 x 150 pixels or less
		*   File size of 10kb or less
		*   File types accepted:
			*   SVG
			*   PNG
			*   JPG
			*   GIF

### Information Supplied by Beyond Identity
The following information will be supplied by the Beyond Identity Field Team.
*	Beyond Identity IdP endpoint URLs:
	* Issuer: (https://auth.byndid.com/v2)
	* Token endpoint (https://auth.byndid.com/v2/authorize)
	* Authorization endpoint (https://auth.byndid.com/v2/token) 
	* Token endpoint (https://auth.byndid.com/v2/userinfo)

*	Client Secret:	Obtained from the Beyond Identity Console

*	Client ID: Obtained from the Beyond Identity Console

*	SCIM/Event Hook API Bearer Token: Obtained from the Beyond Identity SE

*	Beyond Identity Org ID:	Obtained from the Beyond Identity Console

*	Event Hook API Endpoint:	(https://api.byndid.com/okta_events)

*	SCIM API Endpoint:	(https://api.byndid.com/scim/v2/Users) and (https://api.byndid.com/scim/v2/Groups)


OneLogin Configuration
----------------------

To configure Beyond Identity as the IdP in OneLogin, follow the steps below. Once these steps are taken, you will be ready to enroll users.

#### Step 1. Set up the Beyond Identity Admin Console Application in OneLogin

1.  Click **Applications > Applications > Add Application**.
2.  In the Search window type, **Beyond Identity Admin Console**.
3.  Select the **Beyond Identity Admin Console** app.  
    ![](/images/Integrations/onelogin/add_bi_admin_console_onelogin.PNG)
4.  Click **Save**.
5.  In the **Configuration** section, update following fields:
    1.  **Beyond Identity Tenant**: `<Beyond_Identity_Tenant_Name>`
    2.  **Redirect URI’s**: [https://admin.byndid.com/auth/callback](https://admin.byndid.com/auth/callback)
6.  In the **SSO** section, copy the `SSO Client ID` and `Client Secret` and provide them to the Beyond Identity team.

#### Step 2. Set up the Admin Console Access

1.  Provide the `Client ID` and `Client Secret` assigned to the Admin Console app in OneLogin to the Beyond Identity team. The Beyond Identity team will collect and populate those values using APIs.  
2.  After these values are provisioned, log in and confirm that the admin has access to the Beyond Identity Admin Console. 

#### Step 3. Set up the Beyond Identity User Console Application in OneLogin

1.  Click **Applications > Add Application**.
2.  In the Search window type, **Beyond Identity User Console**.
3.  Select the **Beyond Identity User Console** app.  
    ![](/images/Integrations/onelogin/add_bi_user_console_onelogin.PNG)
4.  Click **Save**.
5.  In the **Configuration** section, update the following fields:
    1.  **Beyond Identity Tenant:** `<Beyond\_Identity\_Tenant\_Name>`
    2.  **Redirect URI’s:** `https://user.byndid.com/auth-user/callback`
    3.  **API Connection > API Status:** `Enabled`
    4.  **SCIM Bearer Token**: `<Provided\_by\_Beyond\_Identity>`
6.   In the **SSO** section, copy the SSO `Client ID` and `Client Secret` and provide them to the Beyond Identity team.
7.  In the **Provisioning** section, select **Enable provisioning**.

#### Step 4. Set up the Beyond Identity User Console Authentication

1.  Once logged into the Beyond Identity Admin Console, click **Settings**.
2.  From the Settings page, click the **CONSOLE LOGIN** tab.
3.  Under **User Console SSO Integrations (optional)**,  add `OIDC SSO`.
4.  Update the `Name`, `Client ID`, and `Client Secret` (from the previous step) and `Issuer`.
5.  Type `sub` in the **Token Field** and select `exteral\_id` from the **Token Field Lookup** drop-down menu.  
    ![](/images/Integrations/onelogin/edit_config_onelogin.PNG)
6.  Click **Save Changes**.

#### Step 5. Set up Beyond Identity for User Authentication

1.  Once logged into the Beyond Identity Admin Console, click the **Integrations** tab in the lef menu.
2.  The Integrations page displays all previously configured clients. By default, the OIDC client list is displayed. Click **OIDC Clients** and then click **Add OIDC Client**.
3.  In the **Add OIDC Client** dialog, type in the `Name` and `Redirect URI` in the associated fields. Leave the default value for `Token Signing Algorithm` and `Auth Method` as shown below.   
    ![](/images/Integrations/onelogin/add_oidc_client_onelogin.PNG)
4.  Click **Save Changes**. The client is added to the **Integrations** page.
5.  In the newly-created OIDC Client configuration, copy and paste the `Client ID` and `Client Secret` to the app/program of your choice.
6.  Click the copy icon associated with the `Client ID` and `Client Secret`. You will be using these values in the next step.  
    ![](/images/Integrations/onelogin/client_added_onelogin.PNG)

#### Step 6. Configure Beyond Identity as the Identity Provider

1.  In the main OneLogin menu, select **Authentication**.
2.  In the **Authentication** drop-down, select **Trusted IdPs**.
3.  On the **Trusted IdPs** page, click **New Trust**.  
    ![](/images/Integrations/onelogin/authentication_onelogin.PNG)
4.  Enter the following information:
    1.  **Name:** `Beyond Identity`
    2.  Enable **Trusted IDP**
    3.  Enable **Show in Login panel**
    4.  **Login icon**: https://byndid-public-assets.s3-us-west-2.amazonaws.com/logos/beyondidentity.png
    5.  **Issuer**: [https://auth.byndid.com/v2](https://auth.byndid.com/v2)
    6.  Enable **Sign users into OneLogin**
    7.  Enable **Sign users into additional applications**
    8.  Enable **Send Subject Name ID or Login Hint in Auth Request**
    9.  **User Attribute Value:** `{tidp.sub}`
    10.  **User Attribute Mapping**: `Email`
    11.  **Protocol**: `OAUTH`
    12.  **Authentication Endpoint**: `[https://auth.byndid.com/v2/authorize](https://auth.byndid.com/v2/authorize)`
    13.  T**oken Endpoint Auth Method**: `BASIC`
    14.  **Token endpoint**: `[https://auth.byndid.com/v2/token](https://auth.byndid.com/v2/token)`
    15.  **User Information Endpoint**: `[https://auth.byndid.com/v2/userinfo](https://auth.byndid.com/v2/userinfo)`
    16.  **Scopes**: `openid`
    17.  **Client id**: `(Paste Client ID copied from the Beyond Identity Admin Console in the previous step.)`
    18.  **Client Secret:** `(Paste Client ID copied from the Beyond Identity Admin Console in the previous step.)`
5.  Click **Save**.

#### Step 7. Set up Routing Rules

1.  To set up routing rules, perform one of the following:
    1.  Set up the IdP as the default Trusted IdP by selecting the IdP and clicking **More Actions**.
    2.  Click on individual users, and select the IdP under the **Authentication** tab.  
        ![](/images/Integrations/onelogin/routing_rules_onelogin.png)

#### Step 8. Create a Role

Create a role named **Beyond Identity** and add the following applications to it: `Beyond Identity Admin Console` and `Beyond Identity User Console`.

1.  Click **Users > Roles > New Role**.
2.  In the **Roles** text box type **Beyond Identity**.
3.  Click on the two apps listed under **Select Apps to Add**.
4.  Click **Save**.  
    ![](/images/Integrations/onelogin/role_create_onelogin.png)