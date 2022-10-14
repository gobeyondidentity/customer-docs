---
title: Kandji Integration
sidebar_position: 3
--- 

Kandji Integration
==================

This guide provides information to integrate Beyond Identity within a Kandji environment allowing you to build risk-based access policies for macOS and iOS platforms. You will find the information to:

*   Create the API token needed within the Beyond Identity configuration
    
*   Set the permissions required for the token
    
*   Install and configure Kanji using the Beyond Identity Admin Console
    

Prerequisites
-------------

Before continuing with the integration, make sure you have a Kandji account with admin privileges.

### Step 1. Add the API token in Kandji

Beyond Identity uses the Kandji API token to retrieve details of the host from the Kandji API. To add the API token:

1.  Log into the to the Kandji console and click **Settings**.
2.  Click the **Access** tab.
3.  Under the **API Token** section, copy your `organization’s API URL` and store it in a safe location. This will be needed in **Step, 2 Install Kandji**. The following is an example API URL: `(https://examplecompany.clients.kandji.io/)`. Your URL will be different from the one displayed here.  
    :::note
	**Note:** Only copy the base URL. For example, if the API URL includes, `https://examplecompany.kandji.io/api/v1/` , only the base URL `(https://examplecompany.kandji.io/)` is used.![](/images/Integrations/kandji/kandji_api_token_url.PNG)
	:::
4.  Under the **API Token** section, click **Add API Token** and provide a `Name` and an optional `Description` for the token.
5.  Click **Create**.  
    ![](/images/Integrations/kandji/kandji_add_token_beyond_identity.PNG)
6.  A dialog appears with the API Token that was just created. By default, the token is not displayed. Click the visibility symbol if you want to expose it.
7.  Click the **Copy Token** button to copy it to the clipboard and then store it in a safe location. The token is needed in **Step 2, Install Kanji**.
8.  Click the check box to confirm you have copied the token.  
    :::note
	You will not be able to see the token details again once you click **Next**.
	:::note
9.  Click **Next**.  
    ![](/images/Integrations/kandji/kandji_copy_api_token.PNG)
10.  From the **Manage API Permissions** dialog, click **Configure** to set the API permissions for the new token.  
    ![](/images/Integrations/kandji/kandji_manage_api_permissions.png)
11.  From the permissions page of the token, select the permissions needed. In this example, select the **Device Information** check box to automatically select all device-related permissions.
12.  Click **Save**.  
    ![](/images/Integrations/kandji/kandji_permissions_device_info.PNG)
13.  Click **Close**.

### Step 2. Install Kandji 

1.  Log into the Beyond Identity Admin Console and select **Integrations** from the left menu.
2.  From the **Integrations** page, click **ENDPOINT MANAGEMENT**.
3.  Click the **Install this service** icon that appears when hovering to the right of the Kandji row.  
    ![](/images/Integrations/kandji/kandji_install.PNG)
4.  In the **Install Kandji** dialog, provide the following information that you generated and saved in **Step 1, Add the API Token in Kandji**:
    1.  `Host Url` (Only include the base URL)
    2.  `API Token`  
        ![](/images/Integrations/kandji/kandji_edit_dialog_1.PNG)
5.  Click **Save Changes**.

### Step 3. Write policies specific to a Kandji-configured device

1.  Log into the Beyond Identity Admin Console and select **Policy** from the left menu.
2.  From the Policy page, select Edit **Policy > Add Rule**.
3.  Refer to the following steps to configure policy to suit your requirements. 

:::note
Beyond Identity uses the serial number of each device to perform a real-time lookup against Kandji’s API when making policy decisions and evaluating Beyond Identity policy attributes. Beyond automatically obtains the serial number for macOS devices. For iOS devices, the serial number must be pushed to the Platform Authenticator via Kandji using iOS AppConfig. See **Step 4, Push the iOS device serial number using AppConfig**.
:::

#### Step 3.1 Write a Kandji connection policy

You can write policy to allow, monitor, or deny access based on the connection setting configured for a device. In the following example, Kandji-connected devices are allowed to authenticate and add devices.

1.  From the **Add Rule** dialog, click **Add attribute** to the right of the **integration** attribute.
2.  Select the following from the drop-down menus:
    1.  `Kandji`
    2.  `Connection is`
    3.  `Available`
3.  Leave the `Allow` setting.
4.  Click **Add**.  
    ![](/images/Integrations/kandji/kandji_connection_available_allow.PNG)

#### Step 3.2 Write an MDM policy

You can write policy to allow, monitor, or deny access based on the MDM setting configured for a device. In the following example, Kandji-connected devices not MDM enabled are denied access when attempting to authenticate.

1.  From the **Add Rule** dialog, click **Add attribute** to the right of the **integration** attribute.
2.  Select the following from the drop-down menus:
    1.  `Kandji`
    2.  `MDM Enabled`
    3.  `False`
3.  Under **Then**, select `Deny` from the drop-down menu.
4.  (Optional) Add a customized notification informing a user why authentication was denied.
5.  Click **Add**.  
    ![](/images/Integrations/kandji/kandji_mem_enabled_no_deny_auth.PNG)

### Step 4. Push the iOS device serial number using AppConfig

1.  Log into your Kandji Instance and navigate to the **Library**.
2.  Locate and select the **Beyond Identity** app.  
    ![](/images/Integrations/kandji/kandji_add_token_beyond_identity1.PNG)
3.  Under **Configuration**, click the **Set App Configuration** check box
4.  Paste in the following `AppConfig` dictionary.
5.  Click **Save**.  
    ![](/images/Integrations/kandji/kandji_configuration.PNG)