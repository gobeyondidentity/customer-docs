---
title: RPM Distribution
sidebar_position: 6
--- 
RPM Distribution
================

Distribution of the packages can be done using one of the following methods:

*   Automatically (recommended)
    
*   Specific distribution, release/version, or architecture
    
*   Manually
    

Automatic
---------

To quickly set up the repository automatically:


`curl -1sLf \     'https://packages.beyondidentity.com/public/linux-authenticator/setup.rpm.sh' \     | sudo -E bash`

Specific Distribution, Release/Version, or Architecture
-------------------------------------------------------

If your system is compatible but not identical, you can force a specific distribution, release/version, or architecture, use the following method:


`curl -1sLf \     'https://packages.beyondidentity.com/public/linux-authenticator/setup.rpm.sh' \     | sudo -E distro=some-distro codename=some-codename arch=some-arch bash`

Manual
------

To provide more control of the distribution, use the following method before installing packages:

`yum install yum-utils pygpgme   rpm --import 'https://packages.beyondidentity.com/public/linux-authenticator/gpg.878C21C541554254.key'   curl -1sLf 'https://packages.beyondidentity.com/public/linux-authenticator/config.rpm.txt?distro=el&codename=7' > /tmp/beyond-identity-linux-authenticator.repo   yum-config-manager --add-repo '/tmp/beyond-identity-linux-authenticator.repo'   yum -q makecache -y --disablerepo='*' --enablerepo='beyond-identity-linux-authenticator'`

:::note
Replace **el** and **7** above with your actual distribution/version and use Wildcards when enabling multiple repos.
:::

Installing the Authenticator
----------------------------

To install the Authenticator, issue the following command:

`sudo yum install beyond-identity`

Updating the Linux Authenticator
--------------------------------

To update the Authenticator, issue the following command:

`yum update beyond-identity`

Removing the Repository
-----------------------

To remove the repository, issue the following commands. Once the repository is removed you will no longer receive updates.

`rm /etc/yum.repos.d/beyond-identity-linux-authenticator.repo   rm /etc/yum.repos.d/beyond-identity-linux-authenticator-source.repo`

Uninstalling the Linux Authenticator Package
--------------------------------------------

To uninstall the Authenticator package, issue the following command:

`sudo yum remove beyond-identity`
#### Related Topics

[Installing the Authenticator on a Linux Device](installing-the-authenticator-on-a-linux-device)

[Debian Distribution](debian-distribution)

[CLI Commands](cli-commands)