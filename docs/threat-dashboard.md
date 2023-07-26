---
title: Threat Dashboard
id: threat-dashboard
description: 'Learn how to identify users, passkeys, and authentications that have displayed some risk over the last 0-90 days. Risky entities are added to low, medium, and high groups based on their score from 0-100. You can filter the view of this dashboard and the accompanying table based on these groups. '
slug: /threat-dashboard
keywords: 
- threat dashboard
pagination_next: null
pagination_prev: null
last_update: 
    date: 07/26/2023  
    author: John Canneto  
draft: false
doc_type: overview
displayed_sidebar: secureWorkforceSidebar
---


The threat dashboard provides easy-to-use and intuitive threat intelligence analytics. This new dashboard will help you identify users, passkeys, and authentications that have displayed some risk over the last 0-90 days. 

The dashboard includes interactive filters, weighting controls, and widgets displaying IDs, devices, and authentications associated with risk. Risky entities are added to low, medium, and high groups based on their score from 0-100. You can drill down into details and export or share the dashboard. 

- Additional information about each entity's risk can be viewed by clicking on the associated row in the table below the bar chart.

- If a user or passkey is of higher risk, you can navigate to the user's profile or the passkey and revoke them.

- The risk overview also helps build policy based on the vulnerabilities observed across your fleet.


## Distribution of scored entities

This view displays the distribution of scored entities (users, passkeys, or authentications) across the fleet. We score each entity at the time of authentication, and you can adjust the authentication window to see how each entity is scored over time. 


![Screenshot showing the distribution of scored entities (users, passkeys or authentications) across the fleet.](./images/authentication-risk-activity.png)


The table below the bar chart represents the list of users, passkeys, or authentications summarized in the bar chart above. Clicking on any row will expand the view, providing more information about the vulnerabilities observed for each.

![Screenshot showing the list of users, passkeys, or authentications summarized in the bar chart above](./images/list-of-users-passkeys-or-authentications.png)

## Filtering

This view shows the interactive filtering options available. You can choose which view you want on the right; choose between user, passkey, and authentication risk distributions. On the right, you can select the date range of authentication activity.

![Screenshot showing the Risk Overview filtering on Risk score group.](./images/risk-overview-filter.png )



## How it works

Beyond Identity uses several risk signals to quantify security risks and identify suspicious behaviors. Each signal is designed to assign a score to individual authentication events. Risk reports aggregate these scores across tenants, providing an initial overview of the security risks present.

However, the challenge lies in the fact that most risk signals score authentications or devices, and their output values lack consistent meaning, except that higher values indicate higher risk. Beyond Identity has implemented a risk aggregation approach to address this issue and provide more interpretable scores at various levels (authentication, device, identity, and tenant).

In this risk aggregation process, outputs from individual risk signals are aggregated into Z-scores, representing deviations from models representing normal risk behavior. Positive Z-scores indicate higher-than-average risk, while negative Z-scores indicate higher-than-average trustworthiness. The models used for aggregation are either manually specified or inferred by analyzing the collective data from all customers.

Beyond Identity utilizes Stouffer's method to combine Z-scores from different signals effectively. This approach allows us to comprehensively assess the overall risk posture at the authentication, device, identity, and tenant levels.

As an example, consider the "Firewall Status" risk signal. It outputs a value of 1 if no firewall is detected on a device and 0 if a firewall is present. Let's say a tenant has 100 devices, and 60 lack a firewall, resulting in a SUM of signal outputs equal to 60. The model used for this signal assumes that firewalls should protect 50% of devices.

By applying the risk aggregation methodology, Beyond Identity can generate meaningful and interpretable risk scores that provide insights into security risks at different levels. This enables them to better understand and address potential security threats and enhance the overall security posture for their customers.

