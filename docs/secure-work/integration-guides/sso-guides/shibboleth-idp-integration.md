---
title: Shibboleth IdP Integration
sidebar_position: 1
---
  

Shibboleth IdP Integration
==========================

This guide provides information on how to configure Shibboleth IdP as a SAML proxy with Beyond Identity as the delegate IdP.

**Note**: This guide makes no assumptions about the existing Shibboleth IdP authentication configuration or customized attributes and schemas. The examples given in the guide are based on the examples in the how-to article in Shibboleth IdP 4.1 documentation "Using SAML Proxying to Another IdP" (see [https://shibboleth.atlassian.net/wiki/spaces/KB/pages/1459979597/Using+SAML+Proxying+to+another+IdP](https://shibboleth.atlassian.net/wiki/spaces/KB/pages/1459979597/Using+SAML+Proxying+to+another+IdP)). Please refer to Shibboleth documentation for examples specific to your configuration (mileage may vary).  
 

Prerequisites
-------------

*   Ensure that you have a working Shibboleth IdP instance version 4.0 or 4.1.
*   Ensure the Admin Console Passwordless Login option has been enabled on your Beyond Identity tenant account, and that you have enrolled a valid credential for admin console login (see Admin Console Authentication below).
*   A working SP configured on the Shibboleth IdP.
*   The Shibboleth IdP must have a data connector (LDAP or database) configured for attribute resolution. There must be a "joining" attribute shared between Shibboleth and Beyond Identity used to look up additional attributes required by the SP. This attribute must be unique and (preferably) immutable in the directory or database. All of the examples in this guide will use "uid" as the unique user directory attribute.
*   The following table lists the information you need to provide to the Beyond Identity team.  
     
    
    Information to provide to Beyond Identity
    
    Your Company Name
    
    Your Shibboleth IDP Entity ID. For example:  
    `https://sso.shibboleth.example.edu`
    
    Beyond Identity Admin Console Credentials
    
    *   SSO Client Id
        
    *   SSO Client Secret
        
    
    Beyond Identity User Console Application Credentials (This will be updated by the customer directly in Beyond Identity Admin Console.)
    
    *   SSO Client Id
        
    *   SSO Client Secret
        
    
    (Optional) A logo for your corporation  
    Logo requirements:
    
    *   (Optional) A logo for your corporation
        
        Logo requirements:
        
    *   300 x 150 pixels or less
        
    *   File size of 10kb or less
        
    *   File types accepted:
        
        *   SVG
            
        *   PNG
            
        *   JPG
            
        *   GIF
            
    

Document Conventions
--------------------

Config Files (.xml, .properties, .props, code blocks) - monospace font in shaded text box.

**Example**

`#idp.service.attribute.registry.resources = shibboleth.AttributeRegistryResources`

`#idp.service.attribute.registry.failFast = false`

`idp.service.attribute.registry.checkInterval = PT15M`

`# Default control of whether to encode XML attribute data with xsi:type`

`idp.service.attribute.registry.encodeType = false`

Inline code / CLI / commands / variables - monospace font over shaded background.

**Example**  
**`` `${idp.home}/bin/status.sh` ``**

### Important Variables

`${idp.home}` - The default installation location of Shibboleth IdP. In this guide, the absolute path to `${idp.home} is /opt/shibboleth-idp/`.

Beyond Identity Configuration
-----------------------------

The following sections are performed on the Beyond Identity side.

### User Authentication Configuration

The following steps will create the IdP metadata for passwordless user authentication using the Beyond Identity platform authenticator.

1.  Log into the Beyond Identity Admin Console and select **Integrations** from the left menu.
2.  From the **Integrations** page, select **SAML** and then click **Add SAML Connection**.
3.  From the **Add SAML Connection** dialog, configure the settings for the Shibboleth instance:
    1.  **SP Single Sign On URL:** `https://${MY-SHIBBOLETH-HOSTNAME}/idp/profile/Authn/SAML2/POST`
    2.  **SP Audience URI:**  `https://${MY-SHIBBOLETH-ENTITY-ID}`
    3.  **Name ID Format:**  `emailAddress`
    4.  **Subject User Attribute:** `Email` (**Note:** Any source **Subjec**t attribute may be used as long as it provides immutability and uniqueness in the target directory. This attribute will be used to lookup a unique user in the target directory.)  
        ![]/images/Integrations/shibboleth/saml_connection_add.png)
4.  Under **Attribute Statements**, click **+Add** and configure the following settings in the fields that appear:
    1.  **Name**: Type `**uid**`
    2.  **Name format**: Select `**basic**` from the drop-down menu
    3.  **Value**: Select either `**{{Email}}**` or `**{{ExternalId}}**` from the drop-down menu. The value to select depends of which of these is mapped to the `uid` in the Shibboleth directory instance.  
        ![]/images/Integrations/shibboleth/saml_connection_add_1.PNG)
5.  Click **Save Changes**. The connection is added to the **SAML Connections** list on the **Integrations** page.
6.  Hover over the empty space in the connection just created. Three icons are displayed. Select the **Download Metadata** button and save the metadata file to `${idp.home}/conf/idp-beyond-identity-metadata.xml` on the Shibboleth instance.  
    ![]/images/Integrations/shibboleth/shibboleth_download_metadata.png)  
     

### Admin Console Authentication Configuration

The following steps will configure Shibboleth as the IdP for admin console authentication.

**Note:** The authentication configuration for the Beyond Identity Admin Console may be configured many different ways on Shibboleth IDP. These instructions apply to the Password flow. Mileage may vary depending on other applicable flows configured on your Shibboleth instance.

1.  In the Beyond Identity Admin Console, select **Settings** from the left menu.
2.  From the **Settings** page, click **CONSOLE LOGIN**.
3.  Under **Admin Console SSO Configurations**, click **\+ Add SAML SSO**.
4.  From the **Add Configuration** dialog, add the following values:
    1.  **Name:** `Shibboleth IdP`
    2.  **IDP Url:**  `https://${MY-SHIBBOLETH-HOSTNAME}/idp/profile/Authn/SAML2/POST/SSO`
    3.  **Name ID Format:**  `emailAddress`
    4.  **Subject User Attribute:** `Email` (**Note:** Any source **Subject** attribute may be used as long as it provides immutability and uniqueness in the target directory. This attribute will be used to lookup a unique user in the target directory. )
    5.  **Request Binding:** `http post`
    6.  **Signed Response:** `enabled`
    7.  **X509 Signing Certificate:** Upload your Shibboleth IdP public SAML signing certificate.
5.  Click **Save Changes**.
6.  Under **Admin Console SSO Configuration**, click **View Details** next to the newly-created SSO integration, and copy the `SP SAML Metadata URL`.
7.  Click **Close**.
8.  Either paste the URL into a browser, or use a command-line utility such as `cURL` to download the XML metadata file, and copy it to `${idp.home}/conf/sp-beyond-identity-admin-metadata.xml` on the Shibboleth instance.
9.  Configure an authentication flow to support admin console authentication via this new metadata. Any successful authentication through this flow will grant users the ability to login to the Admin Console, so please take appropriate measures to control access via role or group membership.

:::note
Refer to the steps under Shibboleth Configuration below for attribute filter and resolver configuration for mapping the email address attribute from the source directory. For any additional requirements, refer to the Shibboleth IdP guide (see References).
:::

Shibboleth Configuration
------------------------

The following section is performed on the Shibboleth side.

### Update Shibboleth IdP metadata to support the SP role with Beyond Identity as the delegate IdP

The IdP must act as a SAML SP when operating as a SAML proxy. The following configuration allows Shibboleth IdP to accept the upstream IdP's SAML protocol responses.

1.  Add the following example `` `<SPSSODescriptor>` `` block to `${idp.home}/conf/idp-metadata.xml` with your Shibboleth URL. Add the `<SPSSODescriptor>` block anywhere within `<EntityDescriptor>`. The signing and encryption certificates may be assigned as needed. Replace **`MY-IDP-HOSTNAME`** with your Shibboleth base URL, and `MY-SHIBBOLETH-ENTITY-ID` with the `entityID` value from your IdP metadata file.
`    
    <EntityDescriptor  xmlns="urn:oasis:names:tc:SAML:2.0:metadata" entityID="https://MY-SHIBBOLETH-ENTITY-ID"  
     ...omitted for brevity...>
    
      <SPSSODescriptor protocolSupportEnumeration="urn:oasis:names:tc:SAML:2.0:protocol">         <KeyDescriptor use="signing">              <ds:KeyInfo>                      <ds:X509Data>                          <ds:X509Certificate>   ...<Add Signing Cert here>...                          </ds:X509Certificate>                      </ds:X509Data>              </ds:KeyInfo>` ``
    
          </KeyDescriptor>
    
           <KeyDescriptor use="encryption">              <ds:KeyInfo>                      <ds:X509Data>                          <ds:X509Certificate>   ...<Add Encryption Cert here>...                          </ds:X509Certificate>                      </ds:X509Data>              </ds:KeyInfo>          </KeyDescriptor>          <AssertionConsumerService Binding="urn:oasis:names:tc:SAML:2.0:bindings:HTTP-POST" Location="https://MY-IDP-HOSTNAME/idp/profile/Authn/SAML2/POST/SSO" index="0"/>      </SPSSODescriptor>
    
    **...**  
    `</EntityDescriptor>`

    
2.  Add the following to `` `${idp.home}/conf/metadata-providers.xml` `` anywhere within the `<MetadataProvider id="ShibbolethMetadata" ...>` tag:
    
    `<AttributeFilterPolicy id="saml-proxy-pass-through">`
    
        ``` <PolicyRequirementRule `` `xsi:type=`"Issuer" value="https://auth.byndid.com/saml/v0/abcdef01-0123-4567-89ab-cdecf0123456/sso/metadata.xml" /> `` ```
    
        `<AttributeRule attributeID="uid" permitAny="true" />`
    
    `</AttributeFilterPolicy>`
    
3.  Enable the SAML Authentication flow. This enables the Beyond Identity IdP to be delegated to as part of the SAML flow. The attribute filter policy must also be updated to allow the IdP to ingest the attributes from the delegate IdP.
    1.  Edit `${idp.home}/conf/authn/saml-authn-config.xml` to set the upstream Beyond Identity IDP. The `c:target` value can be obtained from the `${idp.home}/metadata/idp-beyond-identity-metadata.xml` file as the `entityID` value.
        
        `<?xml version="1.0" encoding="UTF-8"?>   <beans xmlns="http://www.springframework.org/schema/beans"          xmlns:context="http://www.springframework.org/schema/context"          xmlns:util="http://www.springframework.org/schema/util"          xmlns:p="http://www.springframework.org/schema/p"          xmlns:c="http://www.springframework.org/schema/c"          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"          xsi:schemaLocation="http://www.springframework.org/schema/beans http://www.springframework.org/schema/beans/spring-beans.xsd                              http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd                              http://www.springframework.org/schema/util http://www.springframework.org/schema/util/spring-util.xsd"                                        default-init-method="initialize"          default-destroy-method="destroy">`
        
            ``**`<bean id="shibboleth.authn.SAML.discoveryFunction"             parent="shibboleth.Functions.Constant"   c:target="https://auth.byndid.com/saml/v0/abcdef01-0123-4567-89ab-cdecf0123456/sso/metadata.xml" />`**   ...   </beans>``
        
    2.  Enable the SAML IdP flow by adding SAML to the authentication flow.
    3.  Update `${idp.home}/conf/attribute-filter.xml`. Add the following anywhere within the `<AttributeFilterPolicyGroup>` tag. Replace the issuer value with your Beyond Identity SAML entity ID:
        
        ```` ```<AttributeFilterPolicy id="saml-proxy-pass-through">       <PolicyRequirementRule `` `xsi:type=`"Issuer" value="https://auth.byndid.com/saml/v0/abcdef01-0123-4567-89ab-cdecf0123456/sso/metadata.xml" /> ``       <AttributeRule attributeID="uid" permitAny="true" />   </AttributeFilterPolicy>``` ````
        
4.  Subject Canonicalization must be performed after ingesting the "uid" in attribute-filter.xml. This requires a new `<AttributeDefinition>` element in `${idp.home}/conf/attribute-resolver.xml`. It also requires the attribute resolver to map in the internal attribute name, `proxied-uid` in this case, as the joining attribute. Once that is done, this attribute will be used for the Data Connector lookup defined in `attribute-resolver.xml`.  
    **Note:** These steps do not accommodate for all of the Subject Name Identifier (NameID) combinations currently configured on your Shibboleth instance. It may be configured for transient or persistent NameID, and individual SPs may require either. These steps only apply to persistent identifiers. Mileage may vary.
    1.  In $`{idp.home}/conf/attribute-resolver.xml` add the following attribute definition anywhere within the `<AttributeResolver .../>` tag:
        
        ``` `` `<AttributeDefinition xsi:type="SubjectDerivedAttribute"` `` ```
        
            `` `forCanonicalization="true"           principalAttributeName="uid"       id="proxied-uid"   />` ``
        
    2.  In `${idp.home}/conf/c14n/subject-c14n.properties`, verify that the "joining" attribute (uid in the examples) has been added to the `idp.c14n.attribute.attributesToResolve` setting. For example:
        
        `idp.c14n.attribute.attributesToResolve = eduPersonPrincipalName,mail,uid,...`
        
    3.  This step assumes that a Data Connector of type LDAPDirectory has already been configured. If necessary, update the existing LDAP filter in `${idp.home}/conf/ldap.properties` in the setting `idp.attribute.resolver.LDAP.searchFilter`. For example:
        
        `` idp.attribute.resolver.LDAP.searchFilter = `(|(eduPersonPrincipalName=$resolutionContext.principal)(mail=$resolutionContext.principal)(isMemberOf=CN=Beyond Identity Users,OU=Groups,OU=People,DC=example,DC=edu)(uid=$resolutionContext.principal))` ``
        
    4.  In `${idp.home}/conf/c14n/subject-c14n.xml`, enable the SAML2ProxyTransform post-login canonicalization flow. This enables the IdP to map the principal directly from the incoming SAML 2.0 NameID from Beyond Identity. Add the following bean anywhere within the `<util:list id="shibboleth.PostLoginSubjectCanonicalizationFlows">` tag:
        
        <``util:list id="shibboleth.PostLoginSubjectCanonicalizationFlows">       `<ref bean="c14n/SAML2ProxyTransform" />`      ...   </util:list>``
        
5.  At this point, any SP can be wired to use a passwordless flow by assigning the SAML authentication flow in `${idp.home}/conf/relying-party.xml`. For example:
    
    ``<bean parent="RelyingPartyByName" c:relyingPartyIds="https://sp.example.com/SAML2/SP">         <property name="profileConfigurations">             <list>               <bean                  `parent="SAML2.SSO"                             p:authenticationFlows="#{{'SAML'}}"`                 p:encryptAssertions="false"                  p:encryptNameIDs="false" />             </list>         </property>   </bean>``
    

SCIM Provisioning
-----------------

Users from the authoritative source directory queried by Shibboleth may be provisioned to the Beyond Identity User directory using the standard SCIM 2.0 protocol. This guide makes no assumptions about the backend directory used by Shibboleth or its SCIM capabilities. However, the examples given in this guide reference a "Beyond Identity Users" group in both the LDAP filter and "Setting up test users" section below.   
The respective SCIM 2.0 API endpoints for user and groups are:

*   [https://api.bynid.com/v0/users](https://api.bynid.com/v0/users)
*   [https://api.byndid.com/v0/groups](https://api.byndid.com/v0/groups)

The tenant API key provided by your Beyond Identity sales team must be included as an HTTP Bearer token for authorization to these APIs.

For more information on SCIM 2.0, see: 

*   [http://www.simplecloud.info/](http://www.simplecloud.info/)
*   [https://datatracker.ietf.org/doc/html/rfc7644](https://datatracker.ietf.org/doc/html/rfc7644)

Enrolling Users
---------------

Before users can utilize Beyond Identity, they must be enrolled. To enroll a user to the Beyond Identity IdP:

1.  Assign the user to the "Beyond Identity Users" LDAP group in your directory.
2.  The enrolled user will receive an email from Beyond Identity welcoming them to the new Identity Provider.
3.  Each user will be asked to:
    1.  Download and install the Beyond Identity Authenticator on their device.
    2.  Register the credential in the Beyond Identity IdP.

See Also

[Installing the Authenticator](../Secure_Work/Installation/Installing_the_Authenticator.htm)