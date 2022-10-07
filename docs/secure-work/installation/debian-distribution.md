---
title: Debian Distribution
sidebar_position: 5
--- 

Debian Distribution
===================

Distribution of the packages can be done using one of the following methods:

*   Automatically (recommended)
    
*   Specific distribution, release/version, or architecture
    
*   Manually
    

Automatic
---------

To quickly set up the repository automatically:

`cURL

`` `curl -1sLf \     'https://packages.beyondidentity.com/public/linux-authenticator/setup.deb.sh' \     | sudo -E bash` ``

### Specific Distribution, Release/Version, or Architecture

``` `` `cURL` `` ```

`` `curl -1sLf \     'https://packages.beyondidentity.com/public/linux-authenticator/setup.deb.sh' \     | sudo -E distro=some-distro codename=some-codename arch=some-arch bash` ``

### Manual

To provide more control of the distribution, use the following method before installing packages:

  
`` `apt-get install -y debian-keyring  # debian only   apt-get install -y debian-archive-keyring  # debian only   apt-get install -y apt-transport-https   curl -1sLf 'https://packages.beyondidentity.com/public/linux-authenticator/gpg.878C21C541554254.key' | apt-key add -   curl -1sLf 'https://packages.beyondidentity.com/public/linux-authenticator/config.deb.txt?distro=ubuntu&codename=focal' > /etc/apt/sources.list.d/beyond-identity-linux-authenticator.list   apt-get update` ``

:::note
Replace **ubuntu** and **focal** above with your actual operating system (distribution and distribution release/version).
:::

Installing the Authenticator
----------------------------

To install the Authenticator, issue the following command:

sudo `apt install beyond-identity`

Updating the Linux Authenticator
--------------------------------

To update the Authenticator, issue the following command:

sudo `apt install beyond-identity`

Removing the Repository
-----------------------

To remove the repository, issue the following commands. Once the repository is removed you will no longer receive updates.

`rm /etc/apt/sources.list.d/beyond-identity-linux-authenticator.list   2apt-get clean   3rm -rf /var/lib/apt/lists/*   4apt-get update`

Uninstalling the Linux Authenticator Package
--------------------------------------------

To uninstall the Authenticator package, issue the following command:

sudo `apt remove beyond-identity`

#### Related Topics

[Installing the Authenticator on a Linux Device](Installing_the_Linux_Authenticator.htm)

[RPM Distribution](RPM_Distribution_Linux.htm)

[CLI Commands](CLI_Commands.htm)