---
title: Configuring a Windows Device with the Version Control ID
sidebar_position: 6
---   

Configuring a Windows Device with the Version Control ID
========================================================

Once the version contol ID has been created, it can be applied to devices. The version control ID is generated when the version control policy is created. It references the local Platform Authenticator to the appropriate policy allowing you to have more than one version control policy associated with different sets of Platform Authenticators. To apply the version control ID:

1.  Open the Registry Editor and navigate to **HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Policies**.
    
2.  Add the following sub keys if they do not already exist:  
    `BeyondIdentity\Authenticator`
    
3.  Add the following value to the Authenticator key:
    
    `VERSION_CONTROL_ID = string value`  
      
    The value of this string must be the **Version Control Id** from [Version Control policy](/docs/secure-work/workforce-settings/version-control/managing-the-authenticator-versions-allowed-on-devices) you created in the Admin Console.
    
    ![](/images/version-control/version_control_id_windows_registry.png)
    

:::note
For customers whose Beyond Identity data center is hosted outside the United States, there is an additional registry entry which must be configured named **VERSION\_CONTROL\_URL**. Please contact Beyond Identity Support for usage instructions.
:::

#### Related Topics

[Configuring a macOS device with the Version Control ID](/docs/secure-work/workforce-settings/version-control/configuring-a-macos-device-with-the-version-control-id)

[Managing the Authenticator Versions that can be Installed on Devices](/docs/secure-work/workforce-settings/version-control/managing-the-authenticator-versions-allowed-on-devices)