---
title: Jamf  Pro Integration
sidebar_position: 1
---

Jamf Integration
================

This guide describes the steps to configure Jamf Pro integration to work with the Beyond Identity Admin Console.

Requirements
------------

Before beginning, make sure the following requirements have been met:

*   Jamf Pro
    
*   Beyond Identity Admin Console
    
*   Active Beyond Identity Subscription
    

#### Step 1. Configure Jamf Settings

1.  Log in to the Jamf Pro Admin Console.
    
2.  Navigate to **All Settings ` Jamf Pro User Account & Groups**.
    
3.  Create a **Standard Account**.
    
4.  Click **New+**.
    
5.  Click **Next**.
    
6.  Configure the account with the following information:
    
    1.  Username: bi-api-user.
        
    2.  Privilege Set: Customer / Administrator
        
    3.  Access Status: Enable
        
    4.  Full Name: API User
        
    5.  Email address: `Your\_Email\_Address`
        
    6.  Password: `Set_Password`
	
	7.  Verify Password: `Set_Password`
        
    8.  Change password at next login: Uncheck

7.  Under the Privileges tab, fill in the following information:

    1.  Click Jamf Pro Server Objects.
        
    2.  Select “READ” permissions for all.
        
    3.  Leave other permissions unchecked.
        
8.  Click Save.
    

#### Step 2. Configure Beyond Identity for Jamf

1.  Log into the Beyond Identity Admin Console and select **Integrations** from the left pane.
    
2.  From the Integrations page, select **ENDPOINT MANAGEMENT**.
    
3.  Click the **Install this service** icon that appears when hovering to the right of the JAMF row.  
    ![](/images/Integrations/jamf/jamf_install_service.png)
    
4.  Enter the information obtained from Jamf Pro Admin UI in the Install JAMF dialog:
    
    *   API URL: e.g., https://``Yourjamfinstance.jamfcloud.com``

    *   Username: `Username that was created in jamf`
   
	*   Password: ```Password associated with the Username``` 
		![](/images/Integrations/jamf/jamf_install_dialog.PNG)
 
5.  Click **Save Changes**.
    

#### Step 3. Configure MDM Authentication Policy

1.  From the Beyond Identity Admin Console, select Policy from the left pane.
2.  From the Policy page, click Edit Policy.  
    ![](/images/policy/edit_policy.PNG)
3.  From the Edit Policy, click Add rule.  
    ![](/images/policy/add_rule.PNG)
4.  Create a rule to deny authentication if the device is not in a “managed state.”  
    ![](/images/policy/jamf_not_managed_deny.PNG)
5.  Click Add. The rule is added to the Policy Rules list.
6.  To permanently save the rule, click [Publish Rule](../Secure_Work/Admin_Functions/Policy/Publishing_Rules.htm).

#### Step 4. Test the MDM Authentication Policy

1.  Log into the Beyond Identity Admin Console from a computer that is enrolled in Jamf Pro and then from a computer that is not enrolled in Jamf Pro.
    
2.  Confirm that the policy behavior is as expected.
    
3.  Check the Events tab to ensure the correct rule is triggered.