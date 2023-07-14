---
title: Configure Windows device with Version Control ID
id: configure-windows-device-with-version-control-id
description: ''
slug: /configure-windows-device-with-version-control-id
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



Once the version contol ID has been created, it can be applied to devices. The version control ID is generated when the version control policy is created. It references the local Platform Authenticator to the appropriate policy allowing you to have more than one version control policy associated with different sets of Platform Authenticators. To apply the version control ID:

1.  Open the Registry Editor and navigate to **HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Policies**.
    
2.  Add the following sub keys if they do not already exist:  
    `BeyondIdentity\Authenticator`
    
3.  Add the following value to the Authenticator key:
    
    `VERSION_CONTROL_ID = string value`  
      
    The value of this string must be the **Version Control Id** from Version Control policy you created in the Admin Console.
    
    ![](/images/version-control/version_control_id_windows_registry.png)
    

:::note
For customers whose Beyond Identity data center is hosted outside the United States, there is an additional registry entry which must be configured named **VERSION\_CONTROL\_URL**. Please contact Beyond Identity Support for usage instructions.
:::

