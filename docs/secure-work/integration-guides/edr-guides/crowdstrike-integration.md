---
title: CrowdStrike Integration
sidebar_position: 1
--- 

CrowdStrike Integration
=======================

This guide provides instructions to enhance Beyond Identity policies with information obtained from an integration with CrowdStrike that results in making policy decisions for a CrowdStrike-configured device that assesses the risk of a device based on:

*   the device found in CrowdStrike
    
*   the Zero Trust Assessment Score (ZTA)
    

In addition, the CrowdStrike integration also allows for a CrowdStrike quarantine to be triggered based on Beyond Identity policy via the Beyond Identity CrowdStrike Quarantine policy action.

### Step 1. Get the API credentials from CrowdStrike to configure in Beyond Identity

Beyond Identity uses the CrowdStrike Agent ID to retrieve details of the host from the CrowdStrike API. This Agent ID is obtained from the data.zta file on macOS. You must contact CrowdStrike support to have them enable the flag to deploy the `data.zta` file in your CrowdStrike environment for this integration to function.

1.  Log into the Falcon UI and navigate to **Support > API Clients and Keys**.  
    ![](/images/Integrations/crowdstrike_falcon/cs_support_api_clients_keys.PNG)
2.  From the **API Clients and Keys** screen, click **Add new API client**.  
    ![](/images/Integrations/crowdstrike_falcon/cs_falcon_add_new_api_client1.PNG)
3.  In the **Add new API client** dialog, enter the following information:
    1.  **Client Name:** `Beyond Identity`
    2.  `Optional description`
    3.  Apply a check mark to each scope in the **Read** column that contains a check box.
    4.  Click **Add**.  
        ![](/images/Integrations/crowdstrike_falcon/cs_falcon_add_new_api_client2.PNG)  
        :::note
		API Key Permission requirements for Beyond Identity Integration include the following:
		:::
        **Hosts Read:** `Beyond Identity Device Found Attribute`  
        **Hosts Write:** `Beyond Identity Crowdstrike Quarantine Action`  
        **Zero Trust Assessment Read:** `Beyond Identity ZTA Attribute`
4.  The API client created dialog is displayed containing the Client ID, Secret, and Base URL.  Copy the `CLIENT ID`, `SECRET`, and `BASE URL`. These will be needed in **Step 2. Install Beyond Identity**.
5.  Click **DONE**.  
    ![](/images/Integrations/crowdstrike_falcon/cs_falcon_add_new_api_clientCreated.PNG)
6.  The API Clients and Keys screen is updated to reflect that CrowdStrike Falcon is connected.  
    ![](/images/Integrations/crowdstrike_falcon/cs_falcon_new_api_client_added.PNG)

### Step 2. Install CrowdStrike Falcon

1.  Log into the Beyond Identity Admin Console and select **Integrations** from the left menu.
2.  From the **Integrations** page, click **ENDPOINT MANAGEMENT**.
3.  Click the **Install this service** icon that appears when hovering to the right of the Crowdstrike Falcon row.  
    ![](/images/Integrations/crowdstrike_falcon/cs_falcon_install_service.png)
4.  In the **Install Crowdstrike** dialog, provide the following information obtained in Step 1. Get the API credentials from CrowdStrike to configure in Beyond Identity.
    1.  `Base Url`
    2.  `Client ID`
    3.  `Client Secret`
    4.  Click **Save Changes**.  
        ![](/images/Integrations/crowdstrike_falcon/cs_falcon_install.png)

### Step 3. Write policies specific to a CrowdStrike-configured device

1.  Log into the Beyond Identity Admin Console and select **Policy** from the left menu.
2.  From the **Policy** page, select **Edit** **Policy > Add Rule**.
3.  Refer to the following steps to configure policy to suit your requirements.

#### Step 3.1 Write a policy using the Zero Trust Assessment Score attribute

To write policy to continuously validate device posture before allowing access, refer to the following steps. A higher score indicates better security posture.

1.  Under the **Integration** attribute drop-down menu, select `**Crowdstrike Falcon**`, and then configure a **`Zero Trust Assessment Score`**.
2.  Configure additional attributes if needed
3.  Click **Add**.  
    ![](/images/Integrations/crowdstrike_falcon/cs_falcon_add_rule_zta_2.png)

#### Step 3.2 Write a restrictive action policy

To write a policy to ensure only devices integrated with CrowdStrike Falcon are allowed to authenticate and/or add devices:

1.  Under the **Integration** attribute, click **Add attribute** and then select the following from the drop-down menus:
    1.  `CrowdStrike Falcon`
    2.  `Device Found`
    3.  `Yes` or `No` (in this example, `No` is selected)
2.  Under **Then**, select `Deny`.
3.  (Optional) Configure any additional attributes.
4.  Click **Add**.  
    ![](/images/Integrations/crowdstrike_falcon/cs_falcon_device_found_no_deny.PNG)

#### Step 3.3 Write a quarantine action policy

You can write policy to allow or deny a device to authenticate and/or add devices. In the following example, write a policy to ensure only devices integrated with CrowdStrike Falcon are allowed to authenticate and/or add devices.

1.  (Optional) Select the appropriate **transaction** type. For all transaction types, leave the field blank.
2.  (Optional) Add specific users. For the rule to be applied to all users, leave the field blank.
3.  (Optional) Select the appropriate **device** platform. In this example, `Windows`.
4.  Select the appropriate **integration** type or leave the field blank.
5.  (Optional) Select the desired **Authentication version**.
6.  Under **Then**, select `Deny`.
7.  Click **Add Attribute** and select **`CrowdStrike Quarantine`** from the **AND** drop-down menu.
8.  Click **Add**.  
    ![](/images/Integrations/crowdstrike_falcon/cs_falcon_quarantine_deny.png)

#### Related Topics

[Writing Policy](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy)