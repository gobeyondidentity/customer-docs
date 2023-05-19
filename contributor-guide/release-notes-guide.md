# Release notes guide

Learn how Secure Workforce release notes are constructed, how to generate and submit them. 

## Release notes template

The release notes follow a similar pattern for each release. The following template takes v2.77.0 as an example. 

```
## Cloud


### What's new

The following attributes are available in the Beyond Identity Policy Engine:

- **Location-based** - includes Continents and Countries and is based on the source IP Address of the authenticating device. Use these attributes to permit, restrict, or monitor location-based transactions.

- **Egress IP Address Match Within Subnet** - use this attribute to enforce or monitor that source IP addresses of both devices in an add device transaction are within a specific range of IP addresses of each other.

- **Impossible Travel** - use this attribute if two authentications have been performed by single user from locations not reasonable to travel between.

### Updated

- Add device transaction events now include egress IP address information.

- Upon saving policies with a Crowdstrike integration attribute configured, the policy engine now validates the configuration of the Crowdstrike integration and connectivity to the Crowdstrike cloud.


## Desktop Login

import SupportedOsAuthenticatorWindowsOnly from '../../static/includes/_supported-os-authenticator-windows-only.mdx';

<SupportedOsAuthenticatorWindowsOnly />

### Updated

New Windows Desktop Login installations using the MSI method no longer require a reboot. For previously installed versions, v2.76.0 or earlier, you can safely bypass the Windows reboot by executing the following msiexec command when upgrading to v2.77.0:

```
msiexec.exe [install_options] <path_to_package> /norestart
```

Future Windows Desktop Login software versions will not require the `msiexec /norestart` option.

### Resolved

When a host \[source\] is accessing a Windows system \[destination\] through Microsoft Remote Desktop Protocol (RDP), the Windows Desktop Login will not allow enrollment on the destination machine. Disallowing enrollment from the RDP session ensures the security and integrity of the destination machine.


```

## Release notes process
