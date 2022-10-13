---
title: Configuring Shared Credentials in a Windows Roaming Profile
sidebar_position: 3
---

Configuring Shared Credentials in a Windows Roaming Profile
===========================================================

The Beyond Identity Authenticator for Windows can be configured to allow a user to switch between different machines that are joined to an Active Directory domain and provisioned as non-persistent virtual desktop infrastructure (VDI) Windows instances without having to re-enroll each time when logging into a different machine. This is accomplished by creating a profile containing a shared credential that can roam between different machines within the Active Directory.

The typical use case in one in which non-persistent Windows desktops, joined to an Active Directory domain, are provisioned to Users through virtual desktop infrastructure (VDI).

Once configured, the credential in the roaming profile is available and viewable in the Authenticator whenever a user logs into a new non-persistent VDI Windows instance within the same Active Directory. Clicking on “About this Profile” will display information that the credential is stored in software (protected by the Windows operating system).

To allow a user to share credentials across different machines, the system administrator must perform the following steps **in order**:

1.  Create a new `key/value` for Beyond Identity in the Windows Registry on each host computer.
    1. This registry key ensures that when the User enrolls in the Platform Authenticator, the Beyond Identity credential is written by Windows to a folder in the User’s roaming profile, protected by the Windows operating system.
	2. This registry key is set per-machine.
	3. See the instructions in the table below for creating the registry key.

2. Install the Windows Platform Authenticator.

3. Enroll the user.

4. Share the folders in the user’s roaming profile that contain the data and keys associated with the User’s Beyond Identity credential and configuration.

Create the Registry Key
-----------------------

Create the following registry key as follows: Testing

| **Item** | **Value** |
|-----|------|
| **Registry Key** |`HKEY\_LOCAL\_MACHINE\\SOFTWARE\\Policies\\BeyondIdentity\\Authenticator` |
| **Registry Key Value** |`SHARED\_PROFILES` |
| **Type** |DWORD |
| **Value** | 0 = Disables shared profiles | Non-zero = Enables shared profiles|

When **Value** is not present, the default is Disabled.

Share the User’s Roaming Profile Folders
----------------------------------------

Share the following folders by right-clicking on the folder and setting the appropriate access option. See [File sharing over a network in Windows 10 (microsoft.com)](https://support.microsoft.com/en-us/windows/file-sharing-over-a-network-in-windows-10-b58704b2-f53a-4b82-7bc1-80f9994725bf) for more information on file sharing.

*   `%appdata%\\Microsoft\\Crypto`

*   `%appdata%\\BeyondIdentity`


Notes
-----

*   These procedures must be performed on each installed Authenticator to enable support for roaming profiles.

*   The Registry Key is set per machine.

*   The Beyond Identity shared folder in the User’s roaming profile contains configuration data for the Platform Authenticator and the User.

*   The Microsoft shared folder in the User’s roaming profile contains the User’s Beyond Identity credential.

*   Enabling the User’s roaming profile in Active Directory in combination with a VDI environment is outside the scope of the Beyond Identity Platform Authenticator.