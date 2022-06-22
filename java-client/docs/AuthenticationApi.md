# AuthenticationApi

All URIs are relative to *https://marketo.swagger.io/bulk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**requestAuthenticationToken**](AuthenticationApi.md#requestAuthenticationToken) | **GET** /identity/oauth/token | Request an Authentication Token


<a name="requestAuthenticationToken"></a>
# **requestAuthenticationToken**
> requestAuthenticationToken(body)

Request an Authentication Token

Retrieve an access token from Marketo. Calls to this endpoint are not counted towards API call limit.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.AuthenticationApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

AuthenticationApi apiInstance = new AuthenticationApi();
RequestToken body = new RequestToken(); // RequestToken | Request a Token
try {
    apiInstance.requestAuthenticationToken(body);
} catch (ApiException e) {
    System.err.println("Exception when calling AuthenticationApi#requestAuthenticationToken");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**RequestToken**](RequestToken.md)| Request a Token |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

