---
title: Attribute library
id: policy-attribute-library
description: ''
slug: /policy-attribute-library 
keywords: 
 - policy
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: true
doc_type: reference
displayed_sidebar: secureWorkforceSidebar
---

## User

Use these to ...

<table>
  <tbody>
    <tr>
      <th>Name</th>
      <th>Options</th>
      <th>Source</th>
    </tr>
    <tr>
      <td>User Group</td>
      <td>Dynamic</td>
      <td>SCIM Groups API</td>
    </tr>
    <tr>
      <td>Has Registered Device(s)</td>
      <td>=<br />&#060;<br />&#060;=<br />&#062;<br />&#062;=</td>
      <td>BI Cloud</td>
    </tr>
  </tbody>
</table>





## Device

Use these to ...

<table>
  <tbody>
      <tr>
      <th>Type</th>
      <th>Platform</th>
      <th>Name</th>
      <th>Options</th>
      <th>Source</th>
    </tr>
    <tr>
      <td>Device</td>
      <td>--</td>
      <td>Platform</td>
      <td>Android<br />iOS<br />MacOS<br />Windows<br />Linux</td>
      <td>--</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>All</td>
      <td>IP Address</td>
      <td>--</td>
      <td>--</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Android</td>
      <td>Device Has Authentication</td>
      <td>Enabled<br />Disabled</td>
      <td>Android KeyguardManager API</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Android</td>
      <td>Authentication Method Enabled</td>
      <td>Biometric<br />PIN or Password</td>
      <td>Android BiometricManager API</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Android</td>
      <td>Device Root Is</td>
      <td>Detected<br />Not Detected</td>
      <td>Querying files and packages that would indicate a root</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>iOS</td>
      <td>Device Has Authentication</td>
      <td>Enabled<br />Disabled</td>
      <td>Apple canEvaluatePolicy API</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>iOS</td>
      <td>Authentication Method Enabled</td>
      <td>Biometric<br />PIN<br />Biometric and PIN</td>
      <td>Apple canEvaluatePolicy API</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>iOS</td>
      <td>Device Jailbreak Is</td>
      <td>Detected<br />Not Detected</td>
      <td>
        Checks for a jailbreak.txt file and whether the device can access
        cydia or the shell
      </td>
    </tr>
    <tr>
      <td>Device</td>
      <td>MacOS</td>
      <td>Version Is</td>
      <td>String Input</td>
      <td>Apple operatingSystemVersionString API</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>MacOS</td>
      <td>App Installed Contains</td>
      <td>String Input</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>MacOS</td>
      <td>Antivirus Is</td>
      <td>On / Off</td>
      <td>Queries XProtect plist file</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>MacOS</td>
      <td>Installed Security Software Is</td>
      <td>Crowdstrike<br />Tenable<br />Jamf<br />McAfee<br />Kaspersky</td>
      <td>Queries files for specific apps</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>MacOS</td>
      <td>Process Running</td>
      <td>String Input</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>MacOS</td>
      <td>File Exists</td>
      <td>String Input</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>MacOS</td>
      <td>Plist Key Value Contains</td>
      <td>Path<br />Key<br />Subkey<br />Number/String<br />Value</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>MacOS</td>
      <td>Firewall Is</td>
      <td>On / Off</td>
      <td>Queries firewall plist file</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>MacOS</td>
      <td>User FileVault Is</td>
      <td>On / Off</td>
      <td>Queries FDE status</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Antivirus Is</td>
      <td>On / Off</td>
      <td>Microsoft Windows Security Center API</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>System Disks BitLocker Is</td>
      <td>Enabled / Disabled</td>
      <td>Microsoft BitLocker API</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Version Is</td>
      <td>String Input</td>
      <td>Microsoft Environment API</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Application Installed Contains</td>
      <td>String Input</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Service Installed Contains</td>
      <td>String Input</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Service Running Contains</td>
      <td>String Input</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Process Running Contains</td>
      <td>String Input</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Registry Key Exists</td>
      <td>String Input</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Registry Key Value</td>
      <td>2 String Input</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>File Exists</td>
      <td>String Input</td>
      <td>OSQuery</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Firewall Is</td>
      <td>On / Off</td>
      <td>Microsoft Windows Security Center API</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Installed Security Software Is</td>
      <td>CrowdStrike<br />Tenable<br />Jamf<br />McAfee<br />Kaspersky</td>
      <td>Microsoft Windows Security Center API</td>
    </tr>
    <tr>
      <td>Device</td>
      <td>Windows</td>
      <td>Domain Name Contains</td>
      <td>String Input</td>
      <td>Microsoft Net Workstation API</td>
    </tr>
  </tbody>
</table>

## Integration

Use these to ...

<table>
  <tbody>
        <tr>
      <th>Type</th>
      <th>Platform</th>
      <th>Name</th>
      <th>Options</th>
      <th>Source</th>
    </tr>
    <tr>
      <td>Integration</td>
      <td>Intune</td>
      <td>Intune</td>
      <td>Registration, Connection</td>
      <td>Microsoft Graph API</td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>Intune</td>
      <td>Registration</td>
      <td>Is / Is Not</td>
      <td>Microsoft Graph API</td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>Intune</td>
      <td>Registration Is / Is Not</td>
      <td>
        Registered<br />Not Registered<br />Revoked<br />Key Conflict<br />Pending Approval<br />Certificate Reset<br />Not Registered Pending Enrollment<br />Unknown
      </td>
      <td>Microsoft Graph API</td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>Intune</td>
      <td>Connection Is</td>
      <td>Available<br />Not Available</td>
      <td>Microsoft Graph API</td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>JAMF</td>
      <td>JAMF</td>
      <td>Connection Is<br />Managed State Is</td>
      <td>Jamf Pro API</td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>JAMF</td>
      <td>Connection Is</td>
      <td>Available<br />Not Available</td>
      <td>Jamf Pro API</td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>JAMF</td>
      <td>Managed State Is</td>
      <td>Managed<br />Not Managed</td>
      <td>Jamf Pro API</td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>Workspace ONE</td>
      <td>Workspace ONE</td>
      <td>Connection Is<br />UEM Is</td>
      <td>VMWare AirWatch API</td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>Workspace ONE</td>
      <td>Connection Is</td>
      <td>Available<br />Not Available</td>
      <td>VMWare AirWatch API</td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>Workspace ONE</td>
      <td>UEM Is</td>
      <td>Enrolled<br />Not Enrolled</td>
      <td>VMWare AirWatch API</td>
    </tr>
    <tr>
      <td>Integration</td>
      <td>CrowdStrike</td>
      <td>CrowdStrike Falcon ZTA Score</td>
      <td>=<br />&lt;<br />&lt;=<br />&gt;<br />&gt;=</td>
      <td>Crowdstrike Host API</td>
    </tr>
  </tbody>
</table>

## Version


<table>
  <tbody>
        <tr>
      <th>Type</th>
      <th>Platform</th>
      <th>Name</th>
      <th>Options</th>
      <th>Source</th>
    </tr>
    <tr>
      <td>Version</td>
      <td>--</td>
      <td>If Authenticator Version Is</td>
      <td>=<br />&lt;<br />&lt;=<br />&gt;<br />&gt;=</td>
      <td>BI Authenticator</td>
    </tr>
  </tbody>
</table>