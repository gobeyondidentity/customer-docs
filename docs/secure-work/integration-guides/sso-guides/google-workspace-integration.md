---
title: Google Workspace Integration
sidebar_position: 1
---

Google Workspace Integration
============================

This guide provides information on how to:

*   Set up Beyond Identity as a passwordless authentication solution for your Google Workspace environment.
    
*   Set up Google Workspace to use Beyond Identity as an Identity Provider.
    

Before you Begin
----------------

This section enumerates some items you should be aware of before configuring Google as an SSO provider with Beyond Identity.

*   Users who are administrators in Google Workspace cannot use IdP Delegation and must always use their Google password as their primary factor of authentication.
*   Multi-factor options are limited in Google Workspace in comparison to most SSO providers. Beyond Identity cannot be used as a multi-factor step-up option for continuous authentication. For multi-factor options in Google Workspace, refer to the 2-Step Verification Methods under the Google support page.
*   Google does not currently support Beyond Identity for SCIM provisioning. The Beyond Identity team is currently working to get the BI solution into the Google Marketplace to enable this functionality.

Prerequisites
-------------

Ensure that you a Google Administrator account to:

*   Add/edit users into the Google Directory.
*   Add/edit Identity Providers in **Security > Authentication > Set up single-on (SSO) with a 3rd part IdP**.

Beyond Identity Configuration
-----------------------------
### Information to Provide to Beyond Identity
*	Your Companty Name
*   Beyond Identity Admin Console Credentials
	*   SSO Entity ID
	*   SSO X.509 Signing Certificate 

*	Beyond Identity User Console Requirements  
*	Application credentials
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
*	Beyond Identity Admin Console URLs:

	*   Identifier/Entity ID
	*   Reply / ACS URL
	*   Start URL

		`[https://admin.byndid.com/auth/saml/](https://admin.byndid.com/auth/saml/)<Conn-ID>/sso/metadata.xml`

		`[https://admin.byndid.com/auth/saml/<Conn-ID>/sso](https://admin.byndid.com/auth/saml/%3cConn-ID%3e/sso)`

		`[https://admin.byndid.com/auth/?org\_id=](https://admin.byndid.com/auth/?org_id=)<bi-tenant-name>`

*	Beyond Identity Org ID (To be supplied.)
*	SCIM API endpoints

	*https://api.byndid.com/scim/v2/Users

	*https://api.byndid.com/scim/v2/Groups

To configure Beyond Identity as the IdP in Google, follow the steps below. Once these steps are completed, you can enable Beyond Identity for test users.

*   Create groups for Beyond Identity Admins & Test users
*   Configure the Beyond Identity Admin Console and User Console as Service Provider apps

#### Step 1. Set up the Google Directory Groups

Beyond Identity service assignment is required for IT Admin and end users. The following steps describe how to create BI\_Admins, and BI\_Users groups and assign users to those groups.

1.  Log into Google Workspace admin console (https://admin.google.com) as an Administrator.
2.  On the homepage of the Google Workspace Admin console, select **Directory > Groups**.
3.  On the **Groups** page, click **Create group**.  
    ![](/images/google-workspace/g_wrkspc_create_group.png)
4.  Create a new Beyond Identity Admins group by selecting the following parameters:
    1.  **Name:** `BI\_Admins`
    2.  **Description:** `Beyond Identity Admins`
    3.  **Group Email:** `bi\_admins@<customer-domain-name>`
    4.  **Group Owner:** `Select the appropriate member as the group owner.`
    5.  Click **Next** to create the group.  
        ![](/images/google-workspace/g_wrkspc_create_group_admin.png)
5.  On the **Group Settings** page set following parameters:
    1.  Deselect all permissions from the `External`, `Entire Organization`, and `Group Members` columns.
    2.  Only `Group Owners` & `Group Manager` should have permissions for access settings and membership settings.
    3.  **Who Can join the group:** Only invited users
    4.  Click **Next** to create the group.  
        ![](/images/google-workspace/g_wrkspc_create_group_settings.png)
6.  Add members to the `BI\_Users` group.
7.  On the `Groups` page, click **Create group**.
8.  Create a new Beyond Identity Admins group by selecting the following parameters:
    1.  **Name:** `BI\_Users`
    2.  **Description:** `Beyond Identity Users`
    3.  **Group Email:** `bi\_users@<customer-domain-name>`
    4.  **Group Owner:** Select the appropriate member as the group owner.
    5.  Click **Create Group**.
9.  On the `Group Settings` Page, set the following parameters:
    1.  Deselect all permissions from `External`, `Entire Organization`, and `Group Members` columns.
    2.  Only `Group Owners` and `Group Manager` should have permissions for access settings and membership settings.
    3.  **Who Can join the group:** Only invited users
    4.  Click Create **Group**.
10.  For both the **BI\_Admins** and **BI\_Users** groups, click the group name and then the group information tab. Set the label as `Security`. (There may be additional labels here.)

#### Step 2. Google SSO Information for Beyond Identity APPS

1.  Log into the Google Workspace admin console (https://admin.google.com) as an Administrator.
2.  On the homepage of the Google Workspace Admin console, select **Security > SSO with SAML Applications**.
3.  Note the **SSO URL** and **Entity ID** and download the certificate or download the metadata file.
    ![](/images/google-workspace/g_wrkspc_create_sso_saml_sec_settings.png)

#### Step 3. Set up Admin Console Access in the Beyond Identity Support Console

1.  Provide the `SSO URL`, `Entity ID` and `SAML Signing Certificate` or `IdP Metadata` file obtained from the previous step to the Beyond Identity field team. The Beyond Identity team will collect and populate those values using Beyond Identity Support Console.

#### Step 4. Set up the Beyond Identity Admin Console Application in Google

1.  On the homepage of the Google Workspace Admin console, select **Apps > Web and Mobile Apps**.
2.  Select **Add App**, and then select **Add custom SAML app** from the drop-down menu.  
    ![](/images/google-workspace/g_wrkspc_add_app.png)
3.  Name the application and app icon as follows:
    1.  **App Name:** `Beyond Identity Admin Console`
    2.  **App icon:** Upload Beyond Identity Logo provided by Beyond Identity field team.
    3.  Click **Continue**.
4.  On the Google Identity Provider Details tab, Click the **Continue** button in the lower-right corner to go to the next step.
5.  On the `Service Provider Details` tab populate following fields.
    1.  **ACS URL:** `(e.g., https://admin.byndid.com/auth/saml/<Connection-ID>/sso)` Enter the value provided by Beyond Identity Field team.
    2.  **Entity ID:** `(e.g., https://admin.byndid.com/auth/saml/<Connection-ID>/sso/metadata.xml)` Enter the value provided by Beyond Identity Field team.
    3.  **Start URL:** `https://admin.byndid.com/auth/?org\_id=<BI\_Tenant\_Name\>` (Replace BI\_Tenant\_Name with the value provided by BI Field team)
    4.  **Name ID Format:** `EMAIL (select from the drop-down menu)`
    5.  **Name ID:** `**Basic Information > Primary email** (select from the drop-down menu)`
    6.  Click **Continue** to go to the next step.  
        ![](/images/google-workspace/g_wrkspc_add_app_custom_saml.png)
6.  On the `Attribute mapping` tab, select **Finish**. Note there is no need to map any attributes.  
    ![](/images/google-workspace/g_wrkspc_add_app_custom_saml_finish.png)
7.  On the Beyond Identity Admin Console app’s page under `user access`, click the down arrow to configure `service status`.
    1.  Under `Organization Units`, select **Off for everyone**.
    2.  Under `Groups`, search for `BI\_Admins` group and set `Service Status` to **ON**.
    3.  Click **Save**.
8.  After these values are provisioned, log in and confirm that the Admin (the user from the BI\_Admins group) can log into the Beyond Identity Admin Console (https://admin.byndid.com).

#### Step 5. Set up the Beyond Identity User Console Authentication

1.  Once logged into Beyond Identity Admin Console, click **Settings > SSO > User Console SSO Integration** and click **Edit**.
2.  Configure the following fields for User Console Authentication.
    1.  Click **Add SAML SSO**.
        1.  Click **Upload XML** or populate the following fields as shown below:Name: Google SSO
        2.  **IdP Url:** https://accounts.google.com/o/saml2/idp?idpid=xxxxx  (Provided by the customer as **SSO URL**)
        3.  **IdP Entity Id:** https://accounts.google.com/o/saml2?idpid=xxxx (Provided by the customer as **Entity ID**)
        4.  **Name ID Format:** emailAddress (select from the pull-down menu)
        5.  **Subject User Attribute:** UserName
    2.  Upload the Certificate (Base64) (Provided by the customer as Entity ID)
3.  Click **Save Changes**.
4.  Make note of the `SP Single Sign-on URL` and `SP Issuer` fields that are required in Step 6.6.

#### Step 6. Set up the Beyond Identity User Console Authentication Application in Google

1.  Log into the Google Workspace Admin Console (https://admin.google.com) as an Administrator.
2.  On the homepage of the Google Workspace Admin console, select **Apps > Web and Mobile Apps**.
3.  Select **Add App**, and then select **Add custom SAML app** from the drop-down menu.  
    ![](/images/google-workspace/g_wrkspc_add_app_custom_saml_1.png)
4.  Name the application and app icon as follows:
    1.  **App Name:** `Beyond Identity User Console`
    2.  **App icon:** Upload the Beyond Identity logo provided by Beyond Identity field team.
    3.  Click the `Continue` button in the lower right corner to go to the next step.
5.  On the Google `Identity Provider Details` tab, click **Continue** to go to the next step.
6.  On the **Service Provider Details** tab, perform populate following fields:
    1.  **ACS URL:** `(e.g. https://user.byndid.com/auth-user/saml/<connection-id>/sso)` Enter value provided by Beyond Identity Field team.
    2.  **Entity ID:** `(e.g. https://user.byndid.com/auth-user/saml/<connection-id>/metadata.xml)` Enter value provide by Beyond Identity Field team.
    3.  **Start URL:** `https://user.byndid.com/auth-user/?org\_id=<BI\_Tenant\_Name>` (Replace BI\_Tenant\_Name with value provided by BI Field team)
    4.  **Name ID Format:** `EMAIL (select from the drop-down menu)
    5.  **Name ID:** `Basic Information > Primary email` (select from the drop-down menu)
    6.  Click **Continue** to go to the next step.  
        ![](/images/google-workspace/g_wrkspc_service_provider_details.png)
7.  On the `Attribute mapping` tab, select **Finish**. There is no need to map any attributes.
8.  On the Beyond Identity **User Console App’s** page under `user access`, click the down arrow to configure `service status`.
    1.  Under **Organization Units**, select **Off for everyone**.
    2.  Under `Groups`, search for the `BI\_Users` group and set `Service Status` to **ON**.
    3.  Click **Save**.

#### Step 7. Set up the Beyond Identity Service for User Authentication

1.  Once logged into the Beyond Identity Admin Console, click the `Integrations` tab, and then click **SAML Connections**.
2.  Click **Add SAML Connection** and update the fields as following:
    1.  **Name:** `Beyond Identity IdP`
    2.  **SP Single on URL:** `<https://www.google.com/a/<google-domain-name>/acs>` (Replace the Google domain name with the customer’s domain name. `For example, zeropw.app`
    3.  **SP Audience URI:** `https://google.com`
    4.  **Name ID Format:** `emailAddress`
    5.  **Subject User Attribute:** `UserName`
    6.  **Request Binding:** `http-redirect`
    7.  **Signed Response:** `Signed`
    8.  Click **Save Changes**.  
        ![](/images/google-workspace/g_wrkspc_edit_saml_conn.png)
3.  Note the following fields from the recently created SAML Connection. These will be required in the next step.
    1.  **IdP Id:** `(Beyond Identity Connection ID)`
    2.  **IdP Single Sign-On URL:** `<https://auth.byndid.com/saml/v0/<BI-Connection-ID>/sso>`
    3.  **IdP Issuer** `<https://auth.byndid.com/saml/v0/<BI-Connection-ID>/sso/metadata.xml>`
    4.  Download the IdP Signature Certificate.  
        ![](/images/google-workspace/g_wrkspc_edit_saml_conn_1.png)

#### Step 8. Set up Beyond Identity as a 3rd Party IdP in the Google Admin Console

1.  In the Google Admin Console, on the top left menu drop-down, select **Security > Authentication > SSO with third party IdP Third-Party SSO Profile**.
    1.  Enable `SSO with third party Identity Provider`.
    2.  Update the `Sign-In page URL` field with `IdP Single Sign-On URL` from the previous step. Leave the sign-out page as (unless there is another preferred sign-out page).
    3.  Select **REPLACE CERTIFICATE** and upload the IdP certificate you uploaded from the Beyond Identity Admin console in the previous step.  
        ![](/images/google-workspace/g_wrkspc_sso_security.png)
2.  In the Google Admin Console, on the top left menu drop down, select **Security > Authentication > SSO with third party IdP > Manage SSO Profile Assignments**.
    1.  For the top **Organization Unit**, select the **SSO Profile** assignment as follows:
    2.  **SSO Profile Assignment:** `None` (User sign-in with Google)
    3.  Click **Save**.
3.  In the Google Admin Console, on the top left menu drop down, select **Security > Authentication > SSO with third party IdP > Manage SSO Profile Assignments**.
    1.  Under **Groups**, select the **BI\_Users** group.
    2.  For **Manage SSO Profile Assignments**, select **Organization's third-party SSO profile**.
    3.  Click **Save**.

#### Step 9. Configure SCIM for User & Group Provisioning

Google Workspace does not support SCIM for non-gallery applications currently. We are working with Google to enable this feature for Beyond Identity.

#### Step 10. Setting up Test Users

To set up test users, perform the following steps:

##### 10.1 User Enrollment

1.  To enroll a user in the Beyond Identity experience, assign the user to the **BI\_Users** group.
    1.  Click **Directory > Groups**.
    2.  Select the **BI\_Users** group.
    3.  Click **Add Members**.
    4.  Find users and assign them to this group.
    5.  Click **Add to Group**.
2.  Create users in the Beyond Identity directory with following parameters:
    1.  `External ID` (e.g., same as UPN)
    2.  `Email`
    3.  `Username`
    4.  `Display Name`
3.  Enrolled users will receive an email from Beyond Identity welcoming them to the new Identity Provider.  
    ![](/images/google-workspace/bi_get_auth_reg_cred.png)
4.  Each enrolled user will be asked to perform the steps below:
    *   **Step 1: Download the Beyond Identity Authenticator to their device.**  
        When the user clicks **View Download Options**, the Beyond Identity Authenticator downloads page will open in a browser with all supported platforms displayed. The user should download and install the Beyond Identity Authenticator on their device if they have not already. Once the Authenticator is installed on the device, proceed to Step 2 as there is not yet a user credential associated with the Authenticator on that device.
    *   **Step 2: Register their Credential in the Beyond Identity IdP.**  
       When the user clicks on Step 2 **Register New Credential**, the user’s credential will get enrolled in the Beyond Identity service, users who click Step 2 will be taken to the Beyond Identity Authenticator where they will see the progress of their credential registration. Once completed, the user will see the credentials in the Authenticator.   
        ![](/images/google-workspace/bi_credential.png)

##### 10.2 User Authentication (Signing In)

1.  Each enrolled user can visit any application supported by your SSO to sign into their corporate applications. 
    
2.  The SSO-supported application will ask the user to enter their username. 
    
3.  Once the username is submitted, a prompt to use or open the Beyond Identity app for authentication will display for the user.
    
4.  The user should click affirmatively on the prompt to be signed into their application, without the use of a password. The Beyond Identity app along with a success notification will display.
    

##### 10.3 User Deprovisioning

1.  To deprovision a user from the Beyond Identity experience, remove the user from the `BI\_Users` Group.
    1.  Click **Directory > Groups**.
    2.  Select the **BI\_Users** group.
    3.  Click **Manage Members**.
    4.  Click the **-** sign next to the user's name in the **Members** column.
    5.  Click **Remove Members**.
2.  To remove or suspend users from Beyond Identity cloud, log into the admin console and go to the **Users** tab.
    1.  Select the user by clicking on their name.
    2.  Once on the user-specific page, click **Deactivate** to suspend the user or **Delete User** to permanently delete the user from Beyond Identity cloud.