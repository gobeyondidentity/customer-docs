---
title: Configure macOS device with Version Control ID
id: configure-macos-device-with-version-control-id
description: ''
slug: /configure-macos-device-with-version-control-id
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 04/08/2022
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---


Once the version control ID has been created, it can be applied to devices. The version control ID is generated when the [version control policy](/docs/secure-work/workforce-settings/version-control/managing-the-authenticator-versions-allowed-on-devices) is created. It references the local Platform Authenticator to the appropriate policy allowing you to have more than one version control policy associated with different sets of Platform Authenticators.

To configure the device with the version control ID, run the `BIConfigure` command line utility (via MDM). This command can also be used get the version control ID and to clear version control restrictions.

Set the Version Control ID
--------------------------

To configure the device with the version control ID,  use the following syntax:

`sudo ./BIConfigure --set-version-control-id "<version_control_id>"`

For example, `BIConfigure --set-version-control-id "11e6a7d7-bfb4-4e72-93a1-c7eab1f5878d"`

The app will use the version control ID to check for updates.

Get the Version Control ID
--------------------------

To get the version control ID, use the following syntax:  
`sudo ./BIConfigure --get-version-control-id`

When run it will return the following:  
`Version Control ID: "<version_control_id>"`

For example, `Version Control ID: "11e6a7d7-bfb4-4e72-93a1-c7eab1f5878d"`

Clear Version Control Restrictions
----------------------------------

To clear version control restrictions for the device, run the following:  
`sudo ./BIConfigure --get-version-control-id`

Which returns the following:  
`No Version Control ID set`

#### Related Topics

[Configuring a Windows Device with the Version Control ID](/docs/secure-work/workforce-settings/version-control/configuring-a-windows-device-with-the-version-control-id)

[Managing the Authenticator Versions that can be Installed on Devices](/docs/secure-work/workforce-settings/version-control/managing-the-authenticator-versions-allowed-on-devices)