---
title: Curity Integration
sidebar_position: 1
--- 

Curity Integration
==================

This guide provides details on how to configure Beyond Identity as an Identity Provider on a Curity Identity Server.

Prerequisites
-------------

Before configuring Beyond Identity as an IdP, make sure sure you have:

*   Installed the Curity Identity Server. Refer to the [Getting Started Guide](https://curity.io/resources/getting-started/) for information on installing the server.
    
*   Access to a Beyond Identity Tenant and have configured an [OIDC client](https://developer.beyondidentity.com/docs/oidc-configuration). Make sure to note the Client ID & Client Secret. Request a tenant here if you do not already have access.
    
*   Installed the [Beyond Identity Platform Authenticator](https://developer.beyondidentity.com/docs/platform-authenticator).
    

Configuration
-------------

Configuration is performed on both the Beyond Identity and the Curity Identity Server side.

### Beyond Identity

Other than the prerequisites mentioned above, the only configuration needed on the Beyond Identity side is to make sure an appropriate `redirect_uri` is configured in the OIDC client that is going to be used. For example: `https://idsvr.example.com/authn/authentication/beyond/ callback`

*   `https://idsvr.example.com` is the baseURL configured in the Curity Identity Server.
*   `/authn/authentication` is the default authentication endpoint.
*   `/beyond` is the ID of the OpenID Authenticator configured in the Curity Identity Server.
*   `/callback` is indicating that this is the callback where the Beyond Identity Platform Authenticator should redirect back to when user authentication is completed.

### The Curity Identity Server

After following the Getting Started Guide, an OAuth client should now be configured. A new Authenticator needs to be configured.

1.  Navigate to **Profiles>Authentication Service>Authenticators** and select **New Authenticator**.
2.  Give it a name ( for example, beyond), choose OIDC as the type, and click **Next**.
3.  Add the the Configuration URL:  
    `https://auth.byndid.com/v2/.well-known/openid-configuration`
4.  Add the `Client ID` obtained from the Beyond Identity Admin Console.
5.  Add the `Client Secret` obtained from the Beyond Identity Admin Console.
6.  Set **Client Authentication Method** to `client-secret`.
7.  Enable **Use HTTP Basic Authentication**.

Test using OAuth.tools
----------------------

1.  Assign the new authenticator to an OAuth client that has the Code Flow enabled in the Curity Identity Server.
2.  Using that client in OAuth.tools, initiate a Code Flow.
    1.  If multiple authenticators are configured for the client, select the previously created OIDC Authenticator (Beyond).

![](/images/curity_code_flow.PNG)

The flow should automatically trigger the Beyond Identity Platform Authenticator, authenticate the user, and then direct back to OAuth.tools. If Auto-redeem code is enabled an Access Token, Refresh Token, and optionally an ID Token should be issued.

![](/images/curity_identity_verified.PNG)