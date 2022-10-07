---
title: Okta Integration (OIDC)
sidebar_position: 1
---   

Okta Integration for OIDC
=========================

Integrate Beyond Identity with Okta. Here you will find:

*   The access needed in Okta to perform the integration.
    
*   The information required to integrate Beyond Identity with a customer's Okta environment.
    
*   The stpes to perform the integration.
    

Prerequisites
=============

Make sure the following requirements are met before continuing wit the integration.

### Okta “Super” or “Organization” admin access required

The configurations performed in Okta require a “Super” or “Organization” admin to be on the call to access and edit the following parameters:

1.  Add/edit attributes and their mappings in **Directory>Profile Editor**.
    
2.  Add/edit Identity Providers in **Security>Identity Providers**.
    
3.  Add/edit routing rules in **Security>Identity Providers>Routing Rules**.
    
4.  Add/edit Event Hooks in **Workflow>Event Hooks (Optional)**.
    

### OpenID Connect IdP and Routing Rules enabled for the account

1.  OpenID Connect IdP and Routing Rules will need to be enabled for this account as Beyond Identity will need to be set up as the identity provider in Okta and needs to use routing rules.
2.  Ensure the OpenID Connect IdP is available on the **Security**\>**Identity Providers** page in the **Add Identity Provider** menu. If the **OpenID Connect IdP** option is missing, contact Okta support to enable OpenID Connect IdP.
3.  Ensure the **Routing Rules** tab is available on the **Security**\>**Identity Providers** page. If the **Routing Rules** tab is missing, contact Okta support to enable the Routing Rules on the Identity Provider page.

#### Okta Support Ticket Sample

The following steps provide an example on how to create a support ticket:

1.  Navigate to Okta’s Open Case Center a
2.  Create a case with the following information:
    1.  Request Type: **Okta org request**
    2.  Subject: **Enable OIDC Provider Type**
    3.  Detailed Description:
        1.  _Please enable the "ODIC IdP" type on my Okta organization. Also ensure that OIDC is enabled as a login method._
        2.  _My Organization Id is: <ORG\_ID>_
        3.  _This would normally show up under:  _Security > Identity provider > Add Identity Provider > Add OpenID Connect IdP"__
    4.  Steps to reproduce:
        1.  _This would normally show up under:  _"Security > Identity provider > Add Identity Provider > Add OpenID Connect IdP"__
    5.  Scope: **Whole organization affected**
    6.  Business impact:
        1.  _Unable to enable integration_
    7.  Priority: **P3 - Non critical issue**
    8.  Okta org: Select from the list the organizations where Beyond Identity will be integrated
    9.  Case email: You own email
    10.  Phone number: Your phone number
    11.  Add contact to team: `Can be left empty`
    12.  Add attachment: `Not required`
    13.  Refer to the following sample dialog:

### ![](/images/okta_oidc_support_ticket.png)

### Company Logo

If you would like your authenticator to be branded with your company logo, Beyond Identity will need a logo with the following requirements:

*   300 x 150 pixels or less
    
*   File size of 10kb or less
    
*   File types accepted: SVG, PNG, JPG, GIF
    

### Okta URL

The Beyond Identity team will need your company Okta URL to configure with Beyond Identity  
e.g. https://\[your-domain\].okta.com

### Beyond Identity Applications in Okta

The Beyond Identity team will need the following information from your “Super” or “Organization” admin:

*   BI Admin Portal Application credentials (SSO Client ID and SSO Client Secret)
    
*   BI User Portal Application credentials (SSO Client ID and SSO Client Secret)
    

### Okta API Token for Beyond Identity Services

The Beyond Identity team will need the API token created in Okta for the Beyond Identity services to make calls to your Okta instance.

Okta Configuration
------------------

To configure Beyond Identity as the IdP in Okta, follow the steps below. Once these steps are taken, you will be ready to enable Beyond Identity authentication for users.

#### Step 1: Add Beyond Identity Attribute

1.  Sign in to the Okta portal as an administrator.
    
2.  In the main Okta menu, select Directory.
    
3.  In the “Directory” drop-down menu, select Profile Editor.  
    ![](/images/okta_profile_editor.png)
    
4.  Find your “Okta” profile and select the **Edit Profile** action denoted.
    
5.  Under the profile editor, you will see an action to Add Attribute.  
    ![](/images/okta_oidc_policy_editor_attriubtes.png)
    
6.  Click on **Add Attribute**
    
    1.  Select fields as listed:
        
        1.  Data Type: **Boolean**
            
        2.  Display Name: **Beyond Identity Registration Status**
            
        3.  Variable Name: **byndidRegistered**
            
        4.  Description**: Beyond Identity Registration Status**
            
        5.  Click **Save**
            
        6.  See the following:  
            ![](/images/okta_profile_editor_add_attribute_values.png)
            
7.  If you have multiple profile masters (applicable for AD mastered users), then perform the following steps:
    
    1.  Click on the edit button for the **byndidRegistered** attribute in the Okta profile.
        
    2.  For the **Master Priority** field, select **Inherit from Okta** from the drop-down menu.
        
    3.  Click Save Attribute.
        

#### Step 2: Add Beyond Identity User Group

1.  Click Directory>Group.
    
2.  Click Add Group.
    
3.  Fill out the fields with values:
    
    1.  Name: **Beyond Identity**
        
    2.  Description: **Beyond Identity Users Group**
        
4.  Click Add Group.  
    ![](/images/okta_oidc_add_group.png)
    

#### Step 3: Set up the Beyond Identity Admin Portal Application

1.  Click Applications>Add Application.
    
2.  In the search window, type Beyond Identity Admin.
    
3.  Select the application with the title Beyond Identity Admin Portal.
    
4.  Click Add.  
    ![](/images/okta_add_BI.png)
    
5.  In the **General Settings** page, update the following fields:
    
    1.  Application Label: **Beyond Identity Admin Portal**
        
    2.  Click Done.
        
6.  In the **Assignment** tab, assign “Admins” to this application
    
7.  In the **Sign On** tab, click **Edit**.
    
8.  Update the **Org ID** field with the organization ID provided by the Beyond Identity team.
    
9.  Provide the Beyond Identity team the SSO **Client ID** and **Client Secret** values.
    

#### Step 4: Set up Beyond Identity Admin Portal Access

1.  Provide the SSO **Client ID** and **Client Secret** assigned to the Admin UI Application (from Step 3) in Okta to the Beyond Identity sales engineer/support engineer.
    
    1.  The Beyond Identity team will collect and populate those values using APIs.
        
2.  After these values are provisioned, log in and confirm that your assigned administrator has access to Beyond Identity Admin portal.
    

#### Step 5: Set up the Beyond Identity User Portal Application

1.  Click Applications>Add Application.
    
2.  In the search window, type Beyond Identity User.
    
3.  Select the application with the title Beyond Identity User Portal.
    
4.  Click Add.  
    ![](/images/okta_add_BI_user_portal.png)
    
5.  In the **General Settings** update following fields:
    
    1.  Application Label: **Beyond Identity User Portal**
        
    2.  Click Done.
        
6.  In the **Assignment** tab, click **Assign** and select **Assign to Groups**.
    
7.  Click the **Assign** button for the **Beyond Identity** group.
    
8.  In the **Sign On** tab, click **Edit**.
    
9.  Update the **Org ID** field with the organization ID provided by the Beyond Identity team.
    
10.  Copy the SSO **Client ID** and **Client Secret** as they will be used in Step 6, Set up Beyond Identity User Portal Authentication.
    
11.  In the **Provisioning** tab, click **Configure API Integration**.
    
    1.  **NOTE**: If the P**rovisioning tab** is not visible, must use OKTA Event hooks.
        
12.  Check the **Enable API Integration** checkbox.
    
13.  In the **API token field**, paste the API token provided by the Beyond Identity team.
    
14.  Click **Test API Credentials**.
    
15.  Once the message “Beyond Identity User Portal was verified Successfully” is displayed, click Save.
    
16.  In the **Provisioning** tab, click **Edit**.
    
17.  Check the following **Enable** checkboxes:
    
    1.  Create Users
        
    2.  Update User Attributes
        
    3.  Deactivate Users
        
18.  Click **Save**.  
    ![](/images/okta_oicd_save_user_portal_config.png)
    

#### Step 6: Set up Beyond Identity User Portal Authentication

1.  Once logged into the Beyond Identity Admin Console, click Account Settings.  
    ![](/images/okto_oidc_user_portal_auth.png)
2.  Click the **User Portal** tab and click Edit.
    
3.  Update the **SSO Issuer**, **SSO Client Id**, and **SSO Client Secret** fields obtained in Step 5, Set up the Beyond Identity User Portal Application.  
    ![](/images/okta_oidc_edit_user_portal_access.png)
    

#### Step 7: Creating an API token in Okta

**NOTE:** Ensure the account used to create the API token is a **Super Admin**. If it is not, then any Beyond Identity users who have Super Admin privileges in Okta will run into registration issues.

1.  In the main menu bar for Okta, select Security>API.
    
2.  Select the **Tokens** tab.
    
3.  Click **Create Token**.
    
4.  In the Create Token form, provide your name for the token (e.g., Beyond Identity).
    
5.  Click **Create Token**.
    
6.  Use the **Copy** button and save the API token as it will be used in Step 8, Set up Beyond Identity Console for User Authentication.  
    ![](/images/okta_oicd_create_api_token.png)
    

#### Step 8: Set up Beyond Identity Console for User Authentication

1.  Once logged into Beyond Identity Admin Console, click the **Integrations** tab and then click OIDC Client.
    
2.  Click **Add OIDC Client** and fill in:
    
    1.  **Name**
        
    2.  **Redirect** **URI**
        
        1.  https://**\[customer\_info\]**.okta.com/oauth2/v1/authorize/callback
            
    3.  Default values for:
        
        1.  **Token** **Signing** **Algorithm** (shown below)
            
        2.  **Auth** **Method** (shown below)
            
3.  Select Save Changes.
    
    ![](/images/okta_oidc_add_client.png)
    
4.  Click on the newly created **OIDC Client** configuration and copy the **Client ID** and **Client Secret** values. These values will be used in Step 9, Configure Beyond Identity as the Identity Provider.  
    ![](/images/okta_oidc_edit_client.png)
    
5.  From the **Integrations** tab, click **API Extensions** and then click **Install** for **Okta Registration Attribute**.  
    ![](/images/okta_oidc_api_extenstions.png)
    
6.  Fill in the information for:
    
    1.  **Okta Domain**
        
    2.  **Okta API Token** (from Step 7, Creating an API token in Okta).
        
    3.  **Okta Registration Attribute**: byndidRegistered
        
7.  Click Save Changes.  
    ![](/images/okta_oidc_install_reg_attribute.png)
    

#### Step 9: Configure Beyond Identity as the Identity Provider

1.  From the main Okta menu, select **Security>**Identity Providers.
    
2.  In the **Identity Providers** tab, click **Add Identity Provider**.
    
3.  Select **Add OpenID Connect IdP**.  
    ![](/images/okta_oidc_config_BI_idp.png)
    
    1.  Note: This option will not be available in Okta until the ticket mentioned in the Introduction, Prerequisites section is resolved **(Only applies to sandbox and production instances, not developer).**
        
4.  Fill in the following fields:
    
    1.  Name: **Beyond Identity**
        
    2.  Client id: **from OIDC Integration tab in Beyond Identity Admin Portal**
        
    3.  Client Secret: **from OIDC Integration tab in Beyond Identity Admin Portal**
        
    4.  Scopes: **OpenID** (Remove any additional scopes.)
        
    5.  Issuer: **https://auth.byndid.com/v2**
        
    6.  Authorization endpoint: **https://auth.byndid.com/v2/authorize**
        
    7.  Token endpoint: **https://auth.byndid.com/v2/token**
        
    8.  JWKS endpoint: **https://auth.byndid.com/v2/.well-known/jwks.json  
        ![](/images/okta_oidc_edit_idp.png)**
        
5.  Click on the **Show Advanced Settings** link nd fill in the following fields:
    
    1.  IdP Username field: **idpuser.externalId**
        
    2.  Match against: **Okta Username or Email**
        
    3.  Leave Account Link Policy and Auto-Link restrictions with default options.
        
    4.  If no match is found: **Redirect to Okta Sign-in Page  
        ![](/images/okta_oidc_update_idp.png)**
        

#### Step 10: Set up Event Hooks

Note:  The Event Hooks configuration is only required if you do not have SCIM capability enabled for your Okta tenant due to licensing restrictions.

1.  Click Work Flow>Event Hooks.
    
2.  Click **Create Event Hook**.
    
3.  Fill in the following fields:
    
    1.  Name: **Beyond Identity Provisioning Flow**
        
    2.  URL: **https://api.byndid.com/okta\_events**
        
    3.  Authentication field: **Authorization**
        
    4.  Authentication Secret: Type in “Bearer “ and paste the tenant API token provided by the Beyond Identity team
        
    5.  Subscribe to the events:
        
        1.  User added to group
            
        2.  User removed from group
            
        3.  User suspended
            
        4.  User unsuspended  
            ![](/images/okta_oidc_add_event_hook_endpoint.png)  
            Note: To view the Subscribe to Eevent options, you must scroll down on the list towards the end of the list:  
            ![](/images/okta_subscribe_to_events.png)
            
4.  Click **Save & Continue**.
    
5.  The **Verify Endpoint Ownership** dialog is displayed.  
    ![](/images/okta_view_endpoint.png)
    
6.  Click **Verify**.

#### Step 12: Set up Routing Rules

1.  Click **Security>Identity Providers**.
    
2.  Select the **Routing Rules** tab.
    
3.  Click **Add Routing Rule**.
    
4.  Fill in the following parameters:
    
    1.  Rule Name: Beyond Identity Authentication
        
    2.  The default value for the fields:
        
        1.  User IPs
            
        2.  Device Platform
            
        3.  Applications
            
    3.  User Matches **User Attribute**
        
        1.  byndidRegistered Equals **true**  
            Note: These values are case-sensitive. Ex. “True” will not work but “true” will.
            
    4.  Use the identity provider **Beyond Identity**
        
5.  Click **Create Rule**.
    
6.  Click **Activate**. This rule will be set as the first rule.  
    ![](/images/okta_oidc_edit_routing_rule.png)
    

#### Step 13: Adding Users to the Okta User Group

Note:  To enroll a user in the Beyond Identity experience, assign the user to the **Beyond Identity** user group in Okta.

1.  Click **Directory>Groups**.
    
2.  Select the **Beyond Identity** user group.
    
3.  Click **Manage People**.
    
4.  Click on **+** sign next to the user’s name in the Not Members column.  
    ![](/images/okta_add_members_User_group.png)
    
5.  Click Save.
    

#### Removing Users from Beyond Identity

If, for any reason, you need to remove a user from Beyond Identity, simply remove them from the Beyond Identity user group in Okta.

1.  Click on Directory>Groups.
    
2.  Select the **Beyond Identity** user group.
    
3.  Click **Manage People**.
    
4.  Click on the red **\-** next to the user's name to remove them from the user group.
    
5.  Once the user is removed from the Beyond Identity user group, they will be asked for a password to sign into Okta or any applications within Okta.  
    ![](/images/okta_remove_user_from_group.png)