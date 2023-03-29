---
title: Configure RBAC
id: configure-rbac
description: ''
slug: /configure-rbac 
keywords: 
 - faq
 - help
pagination_next: null
pagination_prev: null
last_update: 
   date: 03/29/2023
   author: Patricia McPhee
draft: true
doc_type: how-to
displayed_sidebar: secureWorkforceSidebar
---

Role-based access control (RBAC) allows a tenant administrator to grant access to certain Admin Console features to different users based on predefined roles. When configured, users will have access privileges to perform tasks associated with the group. For example, users can be added to a group that provides them the ability to perform all administrative tasks or to a group that only provides them with the ability to view information (for example, to view policy configuration). A user can be added to more than one group.

**Note:**  At least one user must be configured as a **Super Administrator** to be able to access and perform all Admin functions. The initial Super Administrator is set up during the account and tenant creating process with a Beyond Identity team member. Other users can then be added to that group by the initial Super Administrator.

  
To configure role-based access control:

1.  From the [Admin Console](/docs/secure-work/workforce-settings/admin-console/admin-console-login), select the **Settings** tab.
2.  From the **Settings** page, click **Console Access Console**. The nine pre-defined groups are displayed.  
    ![](/images/access/console_access_control.png)  
    The following table provides information about each group. A user can be in multiple groups. 
    
             
    |Permissions| Super Admin | Directory Administrators | Directory Read Only | Integrations Administrators | Integrations Read Only | Policy Administrators | Policy Read Only |  Help Desk | Analytics |
	|-----|------|-----|------|-----|------|-----|------|-----|------|
    |Add users to other predefined RBAC groups | ✔ | | | | | | | | |
	|Modify user, group, and device configuration settings | ✔ |  ✔ | | | | | | | |
	|Read user, group, and device configuration settings | ✔ | ✔ | ✔ | | | | | |
    |Modify SAML, OIDC, Okta, and MDM configurations settings |✔ | | |   ✔ | | | | | |
    |Read SAML, OIDC, Okta, and MDM configuration settings |  ✔| | | ✔ | ✔ | | | | |
    |Modify policy configuration settings |✔ | | | | | ✔ | | | | |
    |Read policy configuration settings | ✔ | | | | | | ✔ | | | |
    |View users, groups, device, policy, and event logs | ✔ | | | | | | | ✔| | |
    |Suspend and unsuspend users | ✔ | | | | | | | ✔| | |
    |Send enrollment emails | ✔ | | | | | | | ✔| | |
    |View the insights dashboard and event logs | ✔ | | | | | | | | ✔ | |
    
   
3.  Click on the appropriate group, in this example, **Directory Administrators**.  
    ![](/images/access/console_access_control_dir_admin.png)
4.  The page provides additional information on the access privileges for the group and the users assigned to the group. Click **Assign users to role**.  
    ![](/images/admin/admin_directory_administrators1.png)
5.  Type the name of each user to add or use the drop-down menu to select each user you want to add. Multiple users can be added. Click **Assign users to role**.  
    ![](/images/access/assign_users_role_drop_down_jdoe.png)
6.  The dialog closes and the **Directory Administrators** page is updated to reflect the number of users in the group.  
    ![](/images/access/admin_directory_administrators_J_Doe.png)