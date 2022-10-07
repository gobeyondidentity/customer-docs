---
title: Policy Attributes
sidebar_position: 2
---   

Policy Attributes
=================

The following table lists the attributes and options available when writing policy rules.

| **Type** | **Platform** | **Name** | **Options** | **Source** |
|-----|------|-----|------|------|
| User | N | User Group | Dynamic | SCIM Groups API |
| User | \- | Has Registered Device(s) | \=, <, <=, >, >= | BI Cloud |
| Device | Android  | Device Has Authentication | Enabled, Disabled | BI Authenticator |
| Device | Android | Authentication Method Enabled | Biometric, PIN or Password | Android KeyguardManager API |
| Device | Android |Device Root Is | Detected, Not Detected | Android BiometricManager API | 
| Device | iOS | Device Has Authentication | Enabled, Disabled | Querying files and packages that would indicate a root |
| Device | iOS | Authentication Method Enabled | Biometric, PIN, Biometric and PIN | Apple canEvaluatePolicy API |
| Device | iOS |Device Jailbreak Is | Detected, Not Detected | Apple canEvaluatePolicy API|
| Device | MacOS | Version Is | String Input | Checks for a jailbreak.txt file and whether the device can access cydia or the shell|
| Device | MacOS | App Installed Contains | String Input | Apple operatingSystemVersionString API |
| Device | MacOS | Antivirus Is | On / Off | OSQuery |
| Device | MacOS | Installed Security Software Is | Crowdstrike, Tenable, Jamf, McAfee, Kaspersky | Queries XProtect plist file|
| Device |MacOS | Process Running | String Input | Queries files for specific apps |
| Device | MacOS | File Exists |String Input | OSQuery |
| Device | MacOS |Plist Key Value Contains |Path, Key, Subkey, Number/String, Value |OSQuery |
| Device | MacOS | Firewall Is | On / Off | OSQuery |
| Device | MacOS |User FileVault Is |On / Off | Queries firewall plist file |
| Device | Windows | Antivirus Is | On / Off | Queries FDE status |
| Device | Windows | System Disks | BitLocker Is Enabled / Disabled | Microsoft Windows Security Center API |
| Device | Windows | Version Is | String Input | Microsoft BitLocker API | Application Installed Contains String Input / Microsoft Environment API |
| Device | Windows | Service Installed Contains | String Input | OSQuery |
| Device | Windows | Service Running Contains | String Input OSQuery |
| Device | Windows | Process Running Contains | String Input | OSQuery |
| Device | Windows | Registry Key Exists | String Input |OSQuery |
| Device | Windows | Registry Key Value  | String Input | OSQuery |
| Device | Windows | File Exists | String Input | OSQuery
| Device | Windows | Firewall Is | On / Off |OSQuery |
| Device | Windows | Installed Security Software Is | Crowdstrike, Tenable, Jamf, McAfee, Kaspersky | Microsoft Windows Security Center API |
| Device | Windows | Domain Name Contains | String Input | Microsoft Windows Security Center API |
| Version | \- | If Authenticator Version Is | \=, <, <=, >, >= | Microsoft Net Workstation API |
| Integration | Intune | Registration Is / Is Not |Registered, Not Registered, Revoked, Key Conflict, Pending Approval, Certificate Reset, Not Registered Pending Enrollment, Unknown | BI Authenticator |
| Integration | Intune | Connection Is | Available, Not Available | Microsoft Graph API |
| Integration |JAMF | Connection Is | Available, Not Available | Jamf Pro API |
| Integration | JAMF | Managed State Is | Managed, Not Managed | Jamf Pro API |
| Integration | Workspace ONE | Connection Is | Available, Not Available |VMWare AirWatch API |
| Integration | Workspace ONE |UEM Is Enrolled, Not Enrolled | VMWare AirWatch API |
| Integration | CrowdStrike | CrowdStrike Falcon ZTA Score | \=, <, <=, >, >= VMWare AirWatch API |

  
#### Related Topics

[Writing Policy](/docs/secure-work/workforce-settings/policy/policy-writing/writing-policy)