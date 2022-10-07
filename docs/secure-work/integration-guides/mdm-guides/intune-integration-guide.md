---
title: Microsoft InTune Integration
sidebar_position: 3
---
Microsoft InTune Integration
================


This document describes how to set up an InTune environment, integrate it with a Beyond Identity tenant, create an authentication policy based on the device being "Registered" or "Not Registered" and test the authentication policy using a computer running Windows. In a customer environment, the InTune environment would already be in place, so you can skip Step1 and go directly to Step 2.

Requirements
------------

The Beyond Identity integration supports Windows, macOS, iOS, and Android devices. Note: For mobile devices, the Beyond Identity authenticator must be configured and pushed via Intune in order to leverage the integration. See Step 5 for mobile configuration.

Step 1: Set up the Intune environment
---------------------------------

### Step 1a: Subscribe to Intune

1.  Go to [https://admin.microsoft.com](https://admin.microsoft.com).
2.  Login using the Global Administrator account.
3.  Purchase Intune Licenses for users.
4.  Assign licenses to users.

### Step 1b: Register device to Intune

1.  Register your computer to Azure AD (Azure AD Registration).
	1.  Go to your Windows computer.
	2.  Search **Settings**.
	3.  Click **Manage your account**.
	4.  Click **Access** **work or school**.
	5.  Log in using your username and password.

2.  Check if your device is registered.
	1.  Go to [https://endpoint.microsoft.com](https://endpoint.microsoft.com).
	2.  Login using the Global Administrator account.
	3.  Click **Devices**.
	4.  Click **All Devices**.
	5.  Make sure that the computer is listed there and shows up as **Managed by Intune**.

Alternatively, you can register using AAD joining or Hybrid AAD joining your computer.

  

Step 2: Update or Create App Registration in Azure Active Directory
-------------------------------------------------------------------

1.  Go to [https://portal.azure.com](https://portal.azure.com).
2.  Log in using the Global Administrator account.
3.  Navigate to **Azure Active Directory**.
4.  Select the **App registrations** tab.
5.  Update the existing app registration or create a new app registration.

	1.  If you have integrated Beyond Identity with Azure SSO:
		1.	Click **Beyond Identity User Console**.
		
	2.  If you have not integrated Beyond Identity with Azure SSO:
		1.  Click the **New registration** button.
		2.  Type a name for the app registration **Beyond Identity Integration**.
		3.  Click the **Register** button.

6.  Copy the **Application (client) ID** to a notepad.
7.  Copy the **Directory (tenant) ID** to a notepad.

    ![](/images/Integrations/intune/bi-user-console-intune.png)  

8.  Select the **API permissions** tab.
9.  Click the **Add a permission** button.
10.  Select the **Microsoft Graph** option.

    ![](/images/Integrations/intune/ms-graph-intune.png)  

11.  Select the **Application permissions** option.
12.  Type **device** into the search box.
13.  Select the **DeviceManagementManagedDevices.Read.All**.

    ![](/images/Integrations/intune/managed-devices-intune.png)

14.  Click the **Add permissions** button.
15.  Click the **Grant admin consent for ** button.
16.  Navigate to the **Certificates & secrets** tab.
17.  Click the **New client secret** button.
18.  Type in description **Beyond Identity Policy Engine**.
19.  Note the expiration time (update your SOP manual and add a reminder to create a new secret after the expiration date).
20.  Copy the secret value to the notepad. (**This value will not be available after you exit this page.**)

    ![](/images/Integrations/intune/client-secret-intune.png)

Step 3: Configure Intune Integration in Beyond Identity
-------------------------------------------------------

1.  Log into the Beyond Identity Admin Console.
2.  Go to **Integrations** > **Endpoint Management** > **Microsoft Intune**.
3.  Click **Install** next to **Microsoft Intune**.
4.  Enter the following information obtained from the Azure Admin Portal.

	1.  **Azure Tenant ID**:
	2.  **Client ID**:
	3.  **Client Secret**:
	6.  Click **Save Changes**.

    ![](/images/Integrations/intune/edit-ms-intune.png)

  

Step 4: Configure and Test MDM Authentication Policy
----------------------------------------------------

1.  Create a new user group **Require Intune on Windows**.
2.  Create a policy.

	1.  Check if the transaction type is **Authentication**
	2.  Check if the user is a member of **Require Intune on Windows** group.
	3.  Check if the device **Platform** is running **Windows**.
	4.  Check if Intune is reporting that the device is **Registered**.
	5.  Click **Deny** authentication

    ![](/images/Integrations/intune/add-rule-intune-registered.png)

3.  Add a test user to the group **Require Intune on Windows**.
4.  Try authenticating with the test user's credentials from a Windows computer that is managed with Intune. If authentication is denied, then the policy works as expected.
5.  Now change the policy to check if Intune is reporting that the device is **Not Registered**.

    ![](/images/Integrations/intune/add-rule-intune-not-registered.png)

6.  Try authenticating again with the test user's credentials from the same Windows computer that is managed with Intune. If authentication is successful, then the policy works as expected.

Step 5: Configure and Push iOS and Android Apps
-----------------------------------------------

1.  In the Intune Admin center, navigate to **Apps>App configuration policies** and add an App configuration policy. Select **Managed devices**:
2.  Select the appropriate platform (iOS/Android) and the Beyond Identity App as the associated App.

    ![] (/images/Integrations/intune/create-app-config-policy-intune)


3.  Select the configuration designer and enter the following app configuration settings:

:::note
Configuration keys are case-sensitive.
:::

    ![](/images/Integrations/intune/create-app-config-policy-intune)