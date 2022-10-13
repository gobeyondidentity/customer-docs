---
title: VMware Access Integration
sidebar_position: 1
--- 

VMware Access Integration
=======================
# Introduction #

This guide provides information on how to:

*	Set up Beyond Identity as a passwordless authentication solution for your VMware Access Manager environment.
*	Set up VMware Access Manager to use Beyond Identity as an Identity Provider.

:::note

*	VMware Access Manager currently does support outbound SCIM operations.

*	Beyond Identity Admin Console and User Console integration with VMware Access Manager using OIDC is not supported. But customers can use SAML for this. (OIDC support is being worked upon.)
:::

# Prerequisites #

Ensure that you have a VMware Access Manager account with admin privileges.

Beyond Identity Configuration
-----------------------------
### Information to Provide to Beyond Identity

*	Your Companty Name

*	Your VMware Access Manager Instance URL. For example: https://[your-domain].workspaceoneaccess.com

*	(Optional) A logo for your corporation. Logo requirements:
	*   300 x 150 pixels or less
	*   File size of 10kb or less
	*   File types accepted:
		*   SVG
		*   PNG
		*   JPG
		*   GIF

### Information you will receive from the Beyond Identity Field Team

*	Beyond Identity Org ID 


VMWare Access Manager Configuration
-----------------------------

To configure Beyond Identity as the IdP in VMware Access Manager, follow the steps below. Once these steps are taken, you will be ready to enable Beyond Identity for test users.

### Step 1: Create a new user group in VMware

1.	Log into the **VMware Access Manager Admin Console**.

2.	Click **Accounts**.

3.	Click **User Groups**.

4.	Click **Add Group**.

5.	Enter **Beyond Identity**.

6.	Click **Save**.

	![](/images/Integrations/vmware-access-mgr/add-group.png)

### Step 2: Setup Beyond Identity as the Identity Provider in VMware

1.	Log into the **Beyond Identity Admin Console**.

2.	From the home page, click **Integrations** > **SAML** > **Add SAML Connection**.

3.	**Name:** `Beyond Identity IdP for VMware`.

4.	Click **Save Changes**.

5.	Copy `IdP Issuer`.

6.	Go to the **VMware Access Manager Admin Console**.

7.	Click **Integrations** > **Identity Providers** > **Add Identity Provider** > **Create SAML IDP**.

8.	Paste the `IdP metadata link` in the **SAML metadata** field.

9.	Click **Process IdP metadata**.

10.	**Network:** `ALL RANGES`.

11.	Authentication Methods:
	* Authentication Methods: **Beyond Identity SAML**.
	* SAML Context: **urn:oasis:names:tc:SAML:2.0:ac:classes:X509**.

12.	Click **Save**.

13.	Click **Download Service Provider (SP) Metadata**.

14	Return to the **Beyond Identity Admin Console** and from the home page, click **Integrations**.

15.	From the **Integrations** page, edit the **SAML integration** by clicking on the edit icon that appears in the right column.

16.	From the **Edit SAML Connetion** dialog, click **Upload XML** and select the SP metadata file.

17.	Click **Save Changes**.

	![](/images/Integrations/vmware-access-mgr/edit-saml-connection.png)

### Step 3: Setup Beyond Identity as authentication Policy in VMware

1.    Go to **VMware Access Manager Admin Console**

2.    Click **Resources** > **Policies** > **Add Policy**

3.    Select only **Beyond Identity** group

4.    Use **Beyond Identity SAML** as authentication option.

5.    Click **Save Changes**.

### Step 4: Setup Beyond Identity Admin Console Application in VMware

1.    Log into the **Beyond Identity Support Console**.

2.    Click **Admin Console** > **Add SAML SSO**.

3.    Copy the `SP SSO URL` and `SP Issuer`.

4.    Log back into the **VMware Access Manager Admin Console**.

5.    Click **Resources / Catalog** > **Web Apps** > **NEW** > **Add Application**.

6.    Name: **Beyond Identity Admin Console**.

7.    Icon: **Add Beyond Identity Logo**.

8.    Click **Next**.

9.    Authentication Type: **SAML 2.0**

10. Configuration: **Manual**

11. Single Sign-on URL:

12. Recipient URL:

13. Application ID:

14. Username Format: **Email Address**

15. Username Value: **${user.userName}**

16. Advanced Properties: **Sign Response, Sign Assertion, Include Assertion Signature**

17. Click **Next**

18. Access Policies: Select **Beyond Identity** policy

19. Click **Next**

20. Click **SAVE**

21. Now go to **Web Apps**, select the newly created app, Click **Settings**

22. Click **SaaS Apps** > **SAML Metadata** > **Identity Provider Metadata**

23. Save the metadata file.

24. Now go back to the **Beyond Identity Support Console**.

25. Click **Upload XML** and Upload the metadata file.

26. Click **Save Changes**.

	![](/images/Integrations/vmware-access-mgr/upload-xml.png)

Step 5: Setup Beyond Identity User Console Application in VMware
----------------------------------------------------------------

1.    First start with the **Beyond Identity Support Console**.

2.    Click **User Console** > **Add SAML SSO**.

3.    Note down **SP SSO URL** and **SP Issuer**

4.    Now go to **VMware Access Manager Admin Console**

5.    Click **Resources / Catalog** > **Web Apps** > **NEW** > **Add Application**

6.    Name: **Beyond Identity User Console**

7.    Icon: Add **Beyond Identity Logo**

8.    Click **Next**

9.    Authentication Type: **SAML2.0**

10. Configuration: **Manual**

11. Single Sign-on URL:

12. Recipient URL:

13. Application ID:

14. Username Format: **Email Address**

15. Username Value: **${user.userName}**

16. Advanced Properties: **Sign Response, Sign Assertion, Include Assertion Signature**

17. Click **Next**

18. Access Policies: Select **Beyond Identity** policy

19. Click **Next**

20. Click **SAVE**

21. Now go to **Web Apps**, select the newly created app, Click **Settings**

22. Click **SaaS Apps** > **SAML Metadata** > **Identity Provider Metadata**

23. Save the metadata file.

24. Now go back to the **Beyond Identity Support Console**.

25. Click **Upload XML** and Upload the metadata file.

26. Click **Save Changes**.

![](/images/Integrations/vmware-access-mgr/upload-xml.png)  

Setting up test users
=====================

* * *

User Enrollment
---------------

1.    Until the SCIM support is added, to enroll a user in the Beyond Identity experience, users will have to be created in both VMware Access Manager and in Beyond Identity.

First, go to the VMware Access Manager Access Console, add a new user to **Beyond Identity** group.

a.    Click **Accounts**

b.    Click **Users**

c.    Click **NEW**

d.    Enter required details in the **User Profile**

e.    Add the user to the Beyond **Identity** User group.

f.     Click **Save**.

		![](/images/Integrations/vmware-access-mgr/add-user-vware-access-manager.png)  
		
Now, go to the Beyond Identity Admin Console and create a new user.

a.    Click **Users**

b.    Click **Add User**

c.    Enter **External ID, Email, Username** and **Display Name**

d.    Click **Save Changes**.

![](/images/Integrations/vmware-access-mgr/add-user-vware-access-manager-saved.png)

���������� This triggers the enrollment process for the user.

1.    Enrolled users will receive an email from Beyond Identity welcoming them to the new Identity Provider.

a.    See image below for reference:

![](/images/Integrations/vmware-access-mgr/get-authenticator.png

2.    Each enrolled user will be asked to follow the two steps below:

a.    Step 1: Download the Beyond Identity Authenticator to their device.

                                                               i.     When the user clicks �View Download Options�, the Beyond Identity Authenticator downloads page will open in a browser with all supported platforms displayed. The user should download and install the Beyond Identity Authenticator on their device if they have not already.

                                                             ii.     Now that the user has the Authenticator installed on their device, they should proceed to Step 2 as there is not yet a user credential associated with the Authenticator on that device.

b.    Step 2: Register their Credential in the Beyond Identity IdP.

                                                               i.     By clicking on Step 2 �**Register New Credential**�, the user�s credential will get enrolled in the Beyond Identity service on the back end. On the front end, users who click Step 2 will be taken to the Beyond Identity Authenticator where they will see the progress of their credential registration. Once completed, the user will see the credentials in the Authenticator.

                                                             ii.     See example image below:
![](/images/Integrations/vmware-access-mgr/credential.png

User Authentication (Signing in)
--------------------------------

1.    Each enrolled user can visit their VMware Access Manager instance or any application supported by your SSO to sign into their corporate applications.

 
-

User Deprovisioning
-------------------

1.    To deprovision a user from the Beyond Identity experience, delete the user from the Beyond Identity Admin Console and then go to the VMware Access Manager Access Console.

a.    Click **Accounts**

b.    Click **User Groups**

c.    Remove the user from **Beyond Identity** Group

d.    Click **Save**.