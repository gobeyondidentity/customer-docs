---
title: Linux
id: install-authenticator-on-linux
description: ''
slug: /install-authenticator-on-linux
keywords: 
 - installation
 - authenticator
 - linux
 - debian
 - ubuntu
 - rpm
 - centos
pagination_next: null
pagination_prev: installation/install-platform-authenticator
last_update: 
   date: 03/30/2022
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---

# Install Authenticator on Linux

A download and registration email will be sent from your IT department to download Beyond Identity and register your device. The dialogs displayed below may vary depending on your OS version.

1.  Navigate to the download site at [https://app.byndid.com/downloads.](https://app.byndid.com/downloads "https://app.byndid.com/downloads")
2.  From the Downloads page, select **Linux**. You will be directed to the information described here.

Refer to the appropriate section for information on distributing and installing the Linux Authenticator package. The Linux Authenticator currently supports the following Linux packages:

*   [Debian (ubuntu)](/docs/secure-work/installation/debian-distribution)
    
*   [RPM (CentOS)](/docs/secure-work/installation/rpm-distribution)



## Debian (Ubuntu)

Distribution of the packages can be done using one of the following methods:

*   Automatically (recommended)
    
*   Specific distribution, release/version, or architecture
    
*   Manually
    

### Automatic


To quickly set up the repository automatically:

							
`curl -1sLf \     'https://packages.beyondidentity.com/public/linux-authenticator/setup.deb.sh' \     | sudo -E bash`

### Specific Distribution, Release/Version, or Architecture

`curl -1sLf \     'https://packages.beyondidentity.com/public/linux-authenticator/setup.deb.sh' \     | sudo -E distro=some-distro codename=some-codename arch=some-arch bash`

### Manual

To provide more control of the distribution, use the following method before installing packages:

  
`apt-get install -y debian-keyring  # debian only   apt-get install -y debian-archive-keyring  # debian only   apt-get install -y apt-transport-https   curl -1sLf 'https://packages.beyondidentity.com/public/linux-authenticator/gpg.878C21C541554254.key' | apt-key add -   curl -1sLf 'https://packages.beyondidentity.com/public/linux-authenticator/config.deb.txt?distro=ubuntu&codename=focal' > /etc/apt/sources.list.d/beyond-identity-linux-authenticator.list   apt-get update`

:::note
Replace **ubuntu** and **focal** above with your actual operating system (distribution and distribution release/version).
:::

#### Install the Authenticator


To install the Authenticator, issue the following command:

sudo `apt install beyond-identity`

#### Update the Linux Authenticator


To update the Authenticator, issue the following command:

sudo `apt install beyond-identity`

#### Remove the Repository


To remove the repository, issue the following commands. Once the repository is removed you will no longer receive updates.

`rm /etc/apt/sources.list.d/beyond-identity-linux-authenticator.list   2apt-get clean   3rm -rf /var/lib/apt/lists/*   4apt-get update`

#### Uninstall the Linux Authenticator Package


To uninstall the Authenticator package, issue the following command:

sudo `apt remove beyond-identity`

## RPM (CentOS)

Distribution of the packages can be done using one of the following methods:

*   Automatically (recommended)
    
*   Specific distribution, release/version, or architecture
    
*   Manually
    

### Automatic


To quickly set up the repository automatically:


`curl -1sLf \     'https://packages.beyondidentity.com/public/linux-authenticator/setup.rpm.sh' \     | sudo -E bash`

### Specific Distribution, Release/Version, or Architecture


If your system is compatible but not identical, you can force a specific distribution, release/version, or architecture, use the following method:


`curl -1sLf \     'https://packages.beyondidentity.com/public/linux-authenticator/setup.rpm.sh' \     | sudo -E distro=some-distro codename=some-codename arch=some-arch bash`

### Manual


To provide more control of the distribution, use the following method before installing packages:

`yum install yum-utils pygpgme   rpm --import 'https://packages.beyondidentity.com/public/linux-authenticator/gpg.878C21C541554254.key'   curl -1sLf 'https://packages.beyondidentity.com/public/linux-authenticator/config.rpm.txt?distro=el&codename=7' > /tmp/beyond-identity-linux-authenticator.repo   yum-config-manager --add-repo '/tmp/beyond-identity-linux-authenticator.repo'   yum -q makecache -y --disablerepo='*' --enablerepo='beyond-identity-linux-authenticator'`

:::note
Replace **el** and **7** above with your actual distribution/version and use Wildcards when enabling multiple repos.
:::

#### Install the Authenticator


To install the Authenticator, issue the following command:

`sudo yum install beyond-identity`

#### Update the Linux Authenticator


To update the Authenticator, issue the following command:

`yum update beyond-identity`

#### Remove the Repository


To remove the repository, issue the following commands. Once the repository is removed you will no longer receive updates.

`rm /etc/yum.repos.d/beyond-identity-linux-authenticator.repo   rm /etc/yum.repos.d/beyond-identity-linux-authenticator-source.repo`

#### Uninstall the Linux Authenticator Package


To uninstall the Authenticator package, issue the following command:

`sudo yum remove beyond-identity`


## Commands

Various CLI commands are available for use with the Linux Authenticator. To view all available command operations, issue the following command:

`beyond-identity help`

The following table provides a list of common commands:

| **Command Function** | **Command** |
|-----|------|
| View the installed authenticator version |`beyond-identity --version` |
| Import existing credential | `beyond-identity credential import <IMPORT-CODE>` |
| View registered/imported credentials | `beyond-identity credentials` |
| Export credential | `beyond-identity credential export <HANDLE (tenant name)>` |
| Delete credential | `beyond-identity credential delete <HANDLE (tenant name)>` |