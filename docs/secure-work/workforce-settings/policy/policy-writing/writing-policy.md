---
title: Writing Policy
sidebar_position: 1
---

Writing Policy
==============

Beyond Identity provides an extensive rule-based decision policy engine that allows you to customize access decisions based on a variety of attributes from various sources, such as user, device, event, and from third party integrations.

To allow or restrict access to devices and apps, you write policy rules. Policy rules can be configured to allow or restrict access based on user, device, and event behavior. This ensures that users attempting a specific transaction, such as authenticating to web apps or adding a device, must meet the policy rule requirements that have been defined to gain access. Policy can be leveraged for a variety of use cases. For example, a company may enforce a policy that requires a firewall turned on, management software installed, or a specific operating system installed on devices to authenticate and allow access.

You can create rules that apply to all transactions that occur or for a specific transaction type. Transaction types include:

*   Authentication
    
*   Device Add
    

Authentication transactions include rules to authenticate to web apps or SSO providers integrated with Beyond Identity. Device Add transactions include rules related to end users’ ability to add additional devices. Rules can be written for a specific transaction type as well as across transaction types.

Until a rule allowing access is defined, access is denied. Any number of rules can be added. A single rule can consist of any number of transaction-based attributes related to the following:

*   User
    
*   Device
    
*   Integration
    
*   Authentication version
    

When a transaction is initiated, each defined rule is evaluated in numerical order. Once an exact rule is found, access is allowed or restricted based on the criteria defined in the rule. No further searching through the remaining rules is necessary. If a match is not found after searching through all rules, the default deny rule is matched and access is denied.

For example, a rule has been defined allowing access when authenticating from a macOS device that has a firewall turned on. The Policy engine searches through the rules starting with Rule 1 and when it finds a match, it stops searching and allows access. In this example, a match is found in Rule 3. The Policy engine does not need to continue searching through the remainder of the rules.

![](/images/policy/policy_rule_order.png)

## Creating Rules


To create a rule:

1.  Log into the [Admin console]<!-- (../Admin_Console) --> and from the Home screen, select the **Policy** tab.
2.  The [Policy page](#policy-page) displays a list of current rules that have been configured. Click **Edit Policy.**  
    ![](/images/policy/policy_rule_order_5_rules.png)
3.  From the **Edit Policy** page, click **Add Rule**.  
    ![](/images/policy/policy_rules_add_rule_allow.PNG)
4.  The **Add Rule** dialog is displayed.  
    ![](/images/policy/add_rule_dialog.PNG)  
    The Add Rule dialog provides attributes for setting policy related to:
    *   The type of transaction
        
    *   The user attempting to authenticate
        
    *   The platform on the device
        
    *   The type of integration
        
    *   The Beyond Identity Authentication version installed
        

:::note
The **user**, **device platform**, and **integration** attributes can be defined with additional sub attributes.
:::

Keep the following points in mind when creating rules:

*   Policy rules can be edited and deleted, however, the last remaining policy rule in a set cannot be deleted. It can only be edited.
    
*   The default rule denying authentication and device add cannot be deleted.
    
*   Only attributes and options applicable to the specific item you select are available. For example, Android attributes and options are not available when you are defining a rule for a Mac device.
    
*   The following sections provide examples for creating:
    
*   Rules that apply to a specific transaction type
    
*   Rules that apply to all transaction types
    

### Transaction-Specific Rules

The following section provides examples for writing:

*   An authentication transaction rule
    
*   A device transaction rule
    

#### Example 1: Creating an Authentication Transaction Rule

This example creates a rule to allow access to users that are part of the Admin Group and are authenticating from an Android device that is registered with Intune and running an Authenticator version greater than version 2.49.0.

1.  After logging into the Admin console and opening the Add Rule dialog, select the attributes that are required for authentication for your organization. In this example, we are selecting the following attributes to allow authentication:
    1.  The **Transaction** type is `Authentication`.
    2.  The **user** is the `Admin Console Access` in the user group.
        
    3.  The **device platform** is `Android`.
        
    4.  The **integration** type is `registered` with `Intune`.
        
    5.  The **Authentication version** is `greater than 2.49.0`.
        
2.  To select the attributes, click the `Add attribute` button associated with the desired attribute and select or type in a value as follows:
    1.  For **transaction**, select `Authentication` from the drop-down menu.
        
    2.  For **user**, select `is in user group` and `Admin Console Access` from the drop-down menus.
        
    3.  For **device platform**, select `Android` from the drop-down menu.
        
    4.  For **integration**, select `Intune Registration is Registered` from the drop-down menus.
        
    5.  For **authenticator version**, select `is greater than` from the drop-down menu and then type in `2.49.0`.
        
3.  Leave the default `Allow` setting.  
    ![](/images/policy/add_rule_allow_authentication_example.PNG)
4.  Click **Add** when done. The rule is added to the Policy Rules list.  
    ![](/images/policy/policy_rules_authetication_example_added.PNG)
5.  Create additional rules as needed.

:::note
For the rule to be preserved upon exiting the Admin Console, the rule must be published. See [**Publishing Rules**](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules).  
Multiple rules can be defined before publishing them.
:::

#### Example 2: Creating a Device Transaction Rule

1.  After logging into the Admin console and opening the Add Rule dialog, select the attributes that are required to allow users to add devices. In this example, we are selecting the following attributes:
    1.  The **Transaction** type is `Device`.
        
    2.  The **user** is `any user`.
        
    3.  The **device platform** is `iOS` with `Device Jailbreak` set to `Not Detected`.
        
    4.  The **integration** is `JAMF** **Connection` set to `Available`.
        
    5.  The **authenticator version** is `greater than or equal to 2.51.0`.
        
2.  To select the attributes, click the **Add attribute** button associated with the desired attribute and select or type in a value as follows:
    1.  For **transaction**, select `Add Device` from the drop-down menu.
    2.  For **user**, leave the default setting. (Defaults to `any user`)
    3.  For **device platform:**
        1.  Select `iOS` from the drop-down menu.
        2.  Click **Add attribute** and select `Device Jailbreak is` and `Not Detected` from the drop-down menus.
    4.  For **integration**, select `JAMF**, **Connection is`, and `Available` from the drop-down menus.
    5.  For **authenticator version**:
        1.  Select `is greater than or equal to` from the drop-down menu.
        2.  Type in `2.51.0`.
3.  Leave the default `Allow` setting.  
    ![](/images/policy/add_rule_allow_device_example.PNG) 
4.  Click **Add** when done. The rule is added to the Policy Rules list.  
    ![](/images/policy/policy_rules_device_example_added.PNG)

:::note
For the rule to be preserved upon exiting the Admin Console, the rule must be published. See [**Publishing Rules**](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules).  
Multiple rules can be defined before publishing them.
:::

### All Transaction Type Rules

In addition to setting policy for a specific transaction type, you can set policy that applies for all transaction types. The following provides an example that writes a policy that denies authentication for any transaction type that matches the criteria set in the policy.

### Example: Creating a Rule to Deny Authentication

This example creates a rule that denies users from the QA Group attempting to authenticate or add a device that is installed with an Authenticator version less than 2.49.0.

1.  After logging into the Admin console and opening the Add Rule dialog, select the attributes that deny authentication or the ability to add devices that match your requirements. In this example, we are selecting the following attributes:
    1.  The **Transaction** type is `Any`. (Does not need to be specified. Default value of `Any` is implied.)
        
    2.  The **user** is in the `QA Group`.
        
    3.  The **authenticator** **version** is `less than 2.49.0`.
        
2.  To select the attributes, click the **Add attribute** button associated with the desired attribute and select or type in a value as follows:
    1.  For **user**, select `QA Group` from the drop-down menu.
    2.  For **authenticator version**:
        1.  Select `is less than` from the drop-down menu.
        2.  Type in `2.49.0`.
3.  For **Then**, select `Deny` from the drop-down menu.
4.  Add an optional message in the **Customized notification** box that is displayed to inform the user why the authentication or device add function was denied. For example, "The Authenticator version installed on the device is below the minimum allowed. Please upgrade your Authenticator version to 2.49.0 or greater.”  
    ![](/images/policy/add_rule_deny_auth_device_example.PNG)
5.  Click **Add** when done. The rule is added to the Policy Rules list.  
    ![](/images/policy/policy_rules_example_deny.PNG)
6.  Create additional rules as needed.

:::note
For the rule to be preserved upon exiting the Admin Console, the rule must be published. See [**Publishing Rules**](/docs/secure-work/workforce-settings/policy/policy-publish-rules/publishing-rules).  
Multiple rules can be defined before publishing them.
:::