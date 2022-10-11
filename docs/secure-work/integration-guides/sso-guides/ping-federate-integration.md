---
title: Ping Federate Integration
sidebar_position: 1
---

Ping Federate Integration
=========================

This guide provides information on how to:

*   Set up passwordless authentication to your Ping Federate single sign on.
*   Set up Beyond Identity as a Delegated Identity Provider in Ping Federate.

#### Step 1. Create a new OIDC connection

1.  Navigate to **Authentication>IdP Connections>Create New Connection**.
2.  Create the Beyond Identity connection:
    1.  **Connection Type:**
        1.  `Browser SSO profile`
        2.  **Protocol:** `OpenID Connect`
    2.  **Connection Option:**
        1.  `Browser SSO` **(Note:** Do not select anything else)
    3.  **General Info:**
        1.  Issuer: https://auth.byndid.com/v2
        2.  **Connection Name:** `Beyond Identity OIDC Integration`
        3.  **Client ID:** `<will be supplied from the Beyond Identity team>`
        4.  **Client Secret:** `<will be supplied from the Beyond Identity team>`
        5.  **Company:** **Beyond Identity Inc.**
        6.  Leave the remaining items with their default values.
    4.  Click **Load Metadata**.
    5.  Click **Next**.
    6.  **Browser SSO:**
        1.  Select **Configure Browser SSO**.
        2.  Select **Configure User-Session Selection**.
        3.  Under the **Identity Mapping** tab, select `No Mapping` and then click **Next**.
        4.  In the **Attribute Contract** tab, leave the default values and click **Next**.
        5.  In the **Summary** tab, select **Done**.
        6.  In the **User-Session Creation** tab, select **Next**.
        7.  In the **Protocol Settings** tab, select **Configure Protocol Settings**.
        8.  In the **OpenID Provider** tab, leave all defaults except the following items:
            1.  **OpenID Connect Login Type**: `CODE`
            2.  **AUTHENTICATION SCHEME:** `BASIC`
        9.  Select **Next**.
    7.  In the **Activation & Summary** tab, select **Save**.
    8.  Once saved, send the **Redirect URI** to the Beyond Identity team.  
        ![](/images/Integrations/ping_federate/idp_connections_ping_fed.png)  
        ![](/images/Integrations/ping_federate/sso_conn_ping_fed.png)

#### Step 2. Create a new password credential validator

1.  Navigate to **System > Data and Credential Stores > Password Credential Validators > Create New Instance**.
2.  Add the following:
    1.  **Instance Name:** `PingCredentials`
    2.  **Instance ID:** `PingCredentials`
    3.  **Type:** Simple `Username Password Credential Validator`
    4.  **Parent Instance:** `None`
3.  Select **Next**.
4.  In the **Instance Configuration** tab, select **Add a new row** to `Users`.
5.  Add the following:
    1.  Set a `Username` and `Password`.
    2.  Copy these credentials and store them in a safe locationd as these will be needed to initially sign into the Beyond Identity Admin Console.
    3.  Select the check box next to **Relax Password Requirements**.
    4.  Select **Update**.
6.  Select **Next**.
7.  Select **Save**.

#### Step 3. Create an HTML form adapter

1.  Navigate to **Authentication>Integration > IdP Adapters > Create New Instance**.
2.  Add the following:
    1.  **Instance Name:** `FormAdapter`
    2.  **Instance ID:** `FormAdapter`
    3.  **Type:** `HTML Form IdP Adapter`
    4.  **Parent Instance:** `None`
3.  Select **Next**.
4.  In the **IdP Adapter** tab**,** add a new **Password Credential Validator** instance: `PingCredentials`
5.  Leave all other fields with default values and select **Next**.
6.  In the **Extended Contract** tab, select **Next**.
7.  In the **Adapter Attributes** tab, under **Pseudonm**, select the check box next to **username**.
8.  Select **Next**.
9.  In the **Adapter Contract Mapping**, select **Next**.
10.  In the **Summary** tab, select **Save**.

#### Step 4. Create a new policy contract

1.  Navigate to **Authentication > Policies > Policy Contract > Create New Contract**.
2.  Add the following **Contract Name**: `Beyond Identity`
3.  Select **Next**.
4.  In the **Contract Attribute** tab, leave the default values and select **Next**.
5.  In the **Summary** select **Save**.

#### Step 5. Create a new policy

1.  Navigate to **Authentication > Policies > Policies> Add Policy**.
2.  Add the following:
    1.  **Name:** `Beyond Identity`
    2.  **Description:** leave blank
    3.  **Policy:** Select `IdP Connections` from the drop-down menu, and then select the form adapter created in Step 3.
        1.  For **Fail**, select **Done**.
        2.  For **SUCCESS**, select **Policy Contracts** from the drop-down menu, and then select the policy contracted created in Step 4.
            1.  Under **SUCCESS**, select **Contract Mapping**:
                1.  In the **Attribute Sources & User Lookup** tab, select **Next**.
                2.  In the **Contract Fulfillment** tab for the **subject,** set the **Source** to `Adapter (FormAdapter)` and **Value** as `username`.
                3.  Select **Next**.
                4.  In the **Issuance Criteria** tab, select **Next**.
                5.  In the **Summary** tab ensure your values match the screenshot below, and then select **Save**.
                6.  Select **Done**.
3.  Select the check boxes next to **IDP AUTHENTICATION POLICIES** and **SP AUTHENTICATION POLICIES**.
4.  Select **Save**.

#### Step 6. Create an access token management instance

1.  Navigate to **Applications > OAuth > Access Token Management > Create New Instance**.
2.  On the **Type** tab:
    1.  **Instance Name:** `BIToken`
    2.  **Instance ID:** `BIToken`
    3.  **Type:** `JSON Web Tokens`
    4.  **Parent Instance:** `None`
    5.  Select **Next**.
3.  On the **Instance Configuration** tab:
    1.  Select the check box next to **Use Centralized Signing Key**.
    2.  Set the **JWS Algorithm** drop-down menu to `ECDSA using P-256 and SHA-256`.
    3.  Leave all other settings with their default values and select **Next**.
4.  On the **Session Validation** tab:
    1.  Select the check box next to **Include Session Identifier In Access Token**.
    2.  Select **Next**.
5.  On the **Access Token Attribute Contract** tab:
    1.  In the **Extend the Contract** field type **sub**, and then select **add**.
    2.  Select **Next**.
6.  On the **Resource URIs** tab, select **Next**.
7.  On the **Access Control** tab, select **Next**.
8.  On the **Summary** tab, ensure your values match the screen shot below.
9.  Scroll down and select **Save**.

![](/images/ping_federate_create_acc_tok_mgmt.png)

#### Step 7. Create access token mappings

1.  Navigate to **Applications > OAuth > Access Token Mappings**.
2.  For **Context**, select `Default` from the drop-down menu.
3.  For **Access Token Manager**, select `BIToken` that was created in Step 6.
4.  Select **Add Mapping**.
5.  On the **Attribute Sources & User Lookup** tab, select **Next**.
6.  On the **Contract Fulfillment** tab:
    1.  Set the **Source** for **sub** to `Persistent Grant`.
    2.  Set the **Value** for **sub** to `USER_KEY`.
    3.  Select **Next**.
7.  On the **Issuance Criteria** tab, select **Next**.
8.  On the **Summary** tab, make sure your values match the screen shot below, and select **Save**.

#### Step 8. Create a policy contract grant mapping

1.  Navigate to **Authentication > OAuth > Policy Contract Grant Mapping**.
2.  From the drop-down menu, select the `Beyond Identity` policy contract that was created in Step 4.
3.  Select **Add Mapping**.
4.  On the **Attribute Sources & User Lookup** tab, select **Next**.
5.  On the **Contract Fulfillment** tab, set both the **User\_Key** and **User\_Name** to the following values:
    1.  **Source:** `Authentication Policy Contract`
    2.  **Value:** `subject` 
    3.  Select **Next**.
6.  On the **Issuance Criteria** tab, select **Next**.
7.  On the **Summary** tab, make sure your values match the screenshot below, then select **Save**.  
    ![](/images/ping_federate_pol_contract_map.png)

#### Step 9. Create an IdP adapter grant mapping instance

1.  Navigate to **Applications (Should be Authentication) > OAuth > IdP Adapter Grant Mapping**.
2.  From the **Source Adapter Instance** drop-down menu, select `formidpadapter`, then select **Add Mapping**.
3.  On the **Attribute Sources & User Lookup** tab, select **Next**.
4.  On the **Contract Fulfillment** tab set both **User\_Key** and **User\_Name** to the following values:
    1.  **Source:** `Adapter`
    2.  **Value:** `username`
    3.  Select **Next**.
5.  On the **Issuance Criteria** tab, select **Next**.
6.  On the **Summary** tab, make your values match the screen shot below, then select **Save**.

#### Step 10. Create an OpenID connect management policy

1.  Navigate to **Applications > OAuth > OpenID Connect Policy Management > Add Policy**.
2.  On the **Manage Policy** tab, select the following values:
    1.  **Policy ID:** `biOIDCpolicy`
    2.  **Name:** `biIODCpolicy`
    3.  **Access Token Manager:** `BIToken` (created in Step 6)
    4.  Select **Next**.
3.  On the **Attribute Contract (Should be Contract Fulfillment)** tab, set all the attribute contracts to `No Mapping` except for **sub**.
    1.  Set **Sub** to `Access Token` then select **Sub** from the second drop-down menu.
    2.  Select **Save**.

#### Step 11. Create Beyond Identity Admin Console client

1.  Navigate to **Applications > OAuth > Clients > Add Client**.
    1.  **Client ID:** `BI-Admin`
    2.  **Name:** `BI-Admin`
    3.  **Description:** `Beyond Identity Admin Portal`
    4.  **Client Authentication:** `Client Secret`
    5.  Select the check box next to **Change Secret** under **Client Secret**.
    6.  Generate a new `client secret` and pass this information to the Beyond Identity team.
    7.  **Redirect URIs:** `https://admin.byndid.com/auth/callback`
    8.  Select the check box next to **Bypass** for **Bypass Authorization Approval**.
    9.  For **Allowed Grant Types**, select the check boxes next to **Authorization Code** and **Implicit**.
    10.  For **Default Access Token Manager**, select `BIToken` (the Access Token Manager created in Step 6).
    11.  Scroll down to the bottom of the page and select **Save**.
2.  The user should now be able to navigate to https://admin.byndid.com/login, enter in their tenant ID, and then be taken to a Ping Federate login page.
    1.  **Client ID:** `BI-Admin`
    2.  **Name:** `BI-Admin`
    3.  **Description:** `Beyond Identity Admin Portal`
    4.  **Client Authentication:** `Client Secret` 
    5.  Select the check box next to **Change Secret** under **Client Secret**.
    6.  Generate a `new client secret` and pass this information to the Beyond Identity team.
    7.  **Redirect URIs:** `https://admin.byndid.com/auth/callback`
    8.  Select the check box next to **Bypass** for **Bypass Authorization Approval**
    9.  For **Allowed Grant Types**, select the check boxes next to **Authorization Code** and **Implicit**.
    10.  For **Default Access Token Manager**, select `BIToken` (the Access Token Manager created in Step 6).
    11.  Scroll down to the bottom of the page and select **Save**.
3.  The user should be able to navigate to https://admin.byndid.com/login, enter in their `tenant ID`, and then be taken to a Ping Federate login page.
4.  Use the credentials created in **Step 1 part 3** to log in.

#### Step 12. Create the Beyond Identity User Admin client

1.  Navigate to **Applications > OAuth > Clients > Add Client**.
    1.  **Client ID**: `BI-User`
    2.  **Name:** `BI-User`
    3.  **Description:** `Beyond Identity User Portal`
    4.  **Client Authentication:** `Client Secret` 
    5.  Select the check box next to **Change Secret** under **Client Secret**.
    6.  Generate a new client secret and save this to a notepad for use in the next portion of **Step 12**.
    7.  **Redirect URIs:** `https://user.byndid.com/auth-user/callback`
    8.  Select the check boxes next to **Bypass** for **Bypass Authorization Approval**.
    9.  For **Allowed Grant Types**, select the check boxes next to **Authorization Code** and **Implicit**.
    10.  For **Default Access Token Manager** ,select `BIToken` (the Access Token Manager created in **Step 6**).
    11.  Scroll down to the bottom of the page and select **Save**.
2.  In a new tab, open the **Beyond Identity Admin** **Console** and navigate to **Account Settings**.
3.  Select the **User Admin** tab, and provide the following settings:
    1.  **SSO Issuer:** SSO Issuer is your `BaseURL`. This can be found in Ping Federate by navigating to **System > Server > Protocol Settings > Federation Info**.
    2.  **SSO Client ID:** `BI-User`
    3.  **SSO Client Secret:** `Client Secret` from **Step 12 part 1-f**.
    4.  Select **Save Changes**.
4.  Select the **User Admin** tab.
    1.  **SSO Issuer:** SSO Issuer is your `BaseURL`. This can be found in Ping Federate by navigating to **System > Server > Protocol Settings > Federation Info**.
    2.  **SSO Client ID:** `BI-User`
    3.  **SSO Client Secret:** `Client Secret` from **Step 12 part 1-f**.
    4.  Select **Save Changes**.
5.  In the **Beyond Identity Admin** Console, navigate to **Directory > Users > +Add User** and add the following:
    1.  **External ID:** This must be the `username` that was used in **Step 2 part 3**.
    2.  **Email:** Should be your `work email address`.
    3.  **Username:** This must be the `username` that was used in **Step 2 part 3**.
    4.  **Display Name:** Can be anything (for example, `PingFed Admin`).
6.  Navigate to `http://user.byndid.com/auth-user/?org_id=<TENANT_ID>` and on the Ping Federate login screen, use the `username` and `password` created in **Step 2 part 3** to log in.
7.  Download the Beyond Identity Platform Authenticator and register your credential.

**Note:** You will need to complete **Step 13** before you can use your credentials to authenticate into Beyond Identity

#### Step 13. Change the policy to use Beyond Identity

1.  Navigate to **Authentication > Policies >** select **Beyond Identity** policy.
2.  Under the **Policy** drop-down menu change the selection from `IdP Adapters` to `IdP Connections`, then select **Beyond Identity**.
3.  Perform one of the following:
    1.  For **FAIL**, select **Done**.
    2.  For **Success**:
        1.  Select **Policy Contracts** in the drop-down menu, then select `Beyond Identity`.
        2.  Under **SUCCESS**, select **Contract Mapping**.
            1.  On the **Attribute Sources & User Lookup** tab, select **Next**.
            2.  On the **Contract Fulfillment** tab:
                1.  For **subject**, set the **Source** as `IdP Connection (Beyond Identity)`.
                2.  Set the **Value** as `sub`.
                3.  Select **Next**.
4.  On the **Issuance Criteria** tab, select **Next**.
5.  On the **Summary** tab, make sure your values match the screen shot below and select **Save**.
6.  Select **Save**.  
    **![](/images/ping_federate_policy.png)**

#### Step 14. Create a SCIM connection

**Note:** To enable SCIM, make sure:  
  
1\. You have downloaded the SCIM connector (link [HERE](https://www.pingidentity.com/en/resources/downloads/pingfederate.html "https://www.pingidentity.com/en/resources/downloads/pingfederate.html")) under “Add Ons” and unzip the connector into the following folder `<pf_install>/pingfederate/server/default/deploy`.  
2\. You set the `pf.provisioner.mode` variable in the `run.properties` file to `STANDALONE`.

1.  Navigate to **Applications > Integrations > Create Connection**.
2.  In the **Connection Template** tab, select **Use a template for this connection**.
3.  In the **Connection Template** drop-down window, select `SCIM Connector`.
4.  Select **Next**.
5.  In the **Connection Type** tab, select `Outbound Provisioning`.
6.  Select **Next**.
7.  On the **General Info** tab, leave all default selections.
8.  Select **Next**.
9.  On the **Outbound Provisioning** tab, select `Configure Provisioning`.
    1.  On the **Target** tab, fill in the following values:
        1.  **SCIM URL:** `https://api.byndid.com/scim/v2`
        2.  **Authentication Method:** `OAuth 2 Bearer Token`
        3.  **Access Token:** The Beyond Identity team will provide you with your tenant `API token`
10.  Scroll down to the bottom of the page and select **Next**.
11.  In the **Manage Channels** tab, select **Create**.
12.  For the **Channel Name**, enter `Beyond Identity`.
13.  Select **Next**.
14.  On the **Source** tab, select your active `datastore` from the drop-down menu.
15.  Select **Next**.
16.  On the **Source Settings** tab, leave all values with the default values.
17.  Scroll down and select **Next**.
18.  On the **Source Location** tab, fill in the `Base DN` and `Users Filter` for the users you want SCIM to pick up.
19.  Scroll down and select **Next**.
20.  On the **Attribute Mapping** tab, make any necessary changes to the mapping based on your users in active directory.
21.  Scroll down and select **Next**.
22.  On the **Activation and Summary** tab, **Activate** the channel by selecting the radio button next to **Activate**.
23.  Scroll down to the bottom of the page and select **Save**.