# CustomObjectsApi

All URIs are relative to *https://marketo.swagger.io/bulk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelCustomObjectExportJob**](CustomObjectsApi.md#cancelCustomObjectExportJob) | **GET** /customobjects/{apiName}/export/{exportId}/cancel.json | Cancel Export Job
[**exportCustomObjectRequest**](CustomObjectsApi.md#exportCustomObjectRequest) | **POST** /customobjects/{apiName}/export/create.json | Create Export Custom Object Job (Step 1)
[**getCustomObjectExportJobFile**](CustomObjectsApi.md#getCustomObjectExportJobFile) | **GET** /customobjects/{apiName}/export/{exportId}/file.json | Retrieve Export Job (Step 3)
[**getExportCustomObjectJobStatus**](CustomObjectsApi.md#getExportCustomObjectJobStatus) | **GET** /customobjects/{apiName}/export/{exportId}/status.json | Obtain Status of Custom Object Export Job (Step 2.1, optional)
[**queueCustomObjectJob**](CustomObjectsApi.md#queueCustomObjectJob) | **GET** /customobjects/{apiName}/export/{exportId}/enqueue.json | Place Export Job in Queue (Step 2)


<a name="cancelCustomObjectExportJob"></a>
# **cancelCustomObjectExportJob**
> cancelCustomObjectExportJob(exportId, apiName)

Cancel Export Job

Cancel export job. Required Permissions: Read-Only Activity

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CustomObjectsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

CustomObjectsApi apiInstance = new CustomObjectsApi();
Integer exportId = 56; // Integer | Export ID
String apiName = "apiName_example"; // String | API Name
try {
    apiInstance.cancelCustomObjectExportJob(exportId, apiName);
} catch (ApiException e) {
    System.err.println("Exception when calling CustomObjectsApi#cancelCustomObjectExportJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **Integer**| Export ID |
 **apiName** | **String**| API Name |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="exportCustomObjectRequest"></a>
# **exportCustomObjectRequest**
> exportCustomObjectRequest(body, apiName)

Create Export Custom Object Job (Step 1)

Create export job for search criteria defined via \&quot;filter\&quot; parameter. Request returns the \&quot;exportId\&quot; which is passed as a parameter in subsequent calls to Bulk Export Custom Object endpoints. Use Enqueue Export Custom Object Job endpoint to queue the export job for processing. Use Get Export Custom Object Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Custom Object

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CustomObjectsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

CustomObjectsApi apiInstance = new CustomObjectsApi();
ExportCustomObjectRequest body = new ExportCustomObjectRequest(); // ExportCustomObjectRequest | Create new exportCustomObjectRequest
String apiName = "apiName_example"; // String | API Name
try {
    apiInstance.exportCustomObjectRequest(body, apiName);
} catch (ApiException e) {
    System.err.println("Exception when calling CustomObjectsApi#exportCustomObjectRequest");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExportCustomObjectRequest**](ExportCustomObjectRequest.md)| Create new exportCustomObjectRequest |
 **apiName** | **String**| API Name |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomObjectExportJobFile"></a>
# **getCustomObjectExportJobFile**
> getCustomObjectExportJobFile(exportId, apiName)

Retrieve Export Job (Step 3)

Returns the file content of an export job. The export job must be in \&quot;Completed\&quot; state. Use Get Export Custom Object Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only. Custom Object The file format is specified by calling the Create Export Custom Object Job endpoint. The following is an example of the default file format (\&quot;CSV\&quot;).

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CustomObjectsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

CustomObjectsApi apiInstance = new CustomObjectsApi();
Integer exportId = 56; // Integer | Export ID
String apiName = "apiName_example"; // String | API Name
try {
    apiInstance.getCustomObjectExportJobFile(exportId, apiName);
} catch (ApiException e) {
    System.err.println("Exception when calling CustomObjectsApi#getCustomObjectExportJobFile");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **Integer**| Export ID |
 **apiName** | **String**| API Name |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getExportCustomObjectJobStatus"></a>
# **getExportCustomObjectJobStatus**
> getExportCustomObjectJobStatus(exportId, apiName)

Obtain Status of Custom Object Export Job (Step 2.1, optional)

Returns status of an export job. Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Custom Object

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CustomObjectsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

CustomObjectsApi apiInstance = new CustomObjectsApi();
Integer exportId = 56; // Integer | Export ID
String apiName = "apiName_example"; // String | API Name
try {
    apiInstance.getExportCustomObjectJobStatus(exportId, apiName);
} catch (ApiException e) {
    System.err.println("Exception when calling CustomObjectsApi#getExportCustomObjectJobStatus");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **Integer**| Export ID |
 **apiName** | **String**| API Name |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queueCustomObjectJob"></a>
# **queueCustomObjectJob**
> queueCustomObjectJob(exportId, apiName)

Place Export Job in Queue (Step 2)

Enqueue export job. This will place export job in queue, and will start the job when computing resources become available. The export job must be in \&quot;Created\&quot; state. Use Get Export Custom Object Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Custom Object

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.CustomObjectsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

CustomObjectsApi apiInstance = new CustomObjectsApi();
Integer exportId = 56; // Integer | Export ID
String apiName = "apiName_example"; // String | API Name
try {
    apiInstance.queueCustomObjectJob(exportId, apiName);
} catch (ApiException e) {
    System.err.println("Exception when calling CustomObjectsApi#queueCustomObjectJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **Integer**| Export ID |
 **apiName** | **String**| API Name |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

