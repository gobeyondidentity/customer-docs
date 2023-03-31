---
title: Manage roaming authentication
id: manage-roaming-authentication
description: ''
slug: /manage-roaming-authentication
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 02/08/2022
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---  


Roaming authentication allows a user to switch between different computers joined in an Azure Active Directory (AAD) domain without re-enrolling each time when logging into another machine. 

To do this, you'll create a profile containing a shared passkey that can roam between machines within the Active Directory. Then you'll **enable** the roaming authentications options in the Beyond Identity Admin Console. 



1. From the [Admin Console](/docs/secure-work/workforce-settings/admin-console/admin-console-login), select the **Settings** tab.

2. From the **Settings** page, click the **AUTHENTICATIONS OPTIONS** edit icon under the **TENANT INFO** tab. 

   ![](/images/admin/admin_con_settings_auth.png)

3. From the **Edit Authentication Options** dialog, drag the slider to the right to enable or to the left to disable and then click **Save Changes**. 

   ![](/images/settings/tenant_roaming_auth.PNG)