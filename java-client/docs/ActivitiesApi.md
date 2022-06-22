# ActivitiesApi

All URIs are relative to *https://marketo.swagger.io/bulk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelActivityJob**](ActivitiesApi.md#cancelActivityJob) | **GET** /activities/export/{exportId}/cancel.json | Cancel Export Job
[**exportActivityRequest**](ActivitiesApi.md#exportActivityRequest) | **POST** /activities/export/create.json | Create Export Activity Job (Step 1)
[**getActivityJobFile**](ActivitiesApi.md#getActivityJobFile) | **GET** /activities/export/{exportId}/file.json | Retrieve Export Job (Step 3)
[**getActivityJobStatus**](ActivitiesApi.md#getActivityJobStatus) | **GET** /activities/export/{exportId}/status.json | Obtain Status of Export Job (Step 2.1, optional)
[**queueActivityJob**](ActivitiesApi.md#queueActivityJob) | **GET** /activities/export/{exportId}/enqueue.json | Place Export Job in Queue (Step 2)


<a name="cancelActivityJob"></a>
# **cancelActivityJob**
> cancelActivityJob(exportId)

Cancel Export Job

Cancel export job. Required Permissions: Read-Only Activity

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ActivitiesApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

ActivitiesApi apiInstance = new ActivitiesApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.cancelActivityJob(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling ActivitiesApi#cancelActivityJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **Integer**| Export ID |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="exportActivityRequest"></a>
# **exportActivityRequest**
> exportActivityRequest(body)

Create Export Activity Job (Step 1)

Create export job for search criteria defined via \&quot;filter\&quot; parameter. Request returns the \&quot;exportId\&quot; which is passed as a parameter in subsequent calls to Bulk Export Activities endpoints. Use Enqueue Export Activity Job endpoint to queue the export job for processing. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ActivitiesApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

ActivitiesApi apiInstance = new ActivitiesApi();
ExportActivityRequest body = new ExportActivityRequest(); // ExportActivityRequest | Create new exportActivityRequest
try {
    apiInstance.exportActivityRequest(body);
} catch (ApiException e) {
    System.err.println("Exception when calling ActivitiesApi#exportActivityRequest");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExportActivityRequest**](ExportActivityRequest.md)| Create new exportActivityRequest |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getActivityJobFile"></a>
# **getActivityJobFile**
> getActivityJobFile(exportId)

Retrieve Export Job (Step 3)

Returns the file content of an export job. The export job must be in \&quot;Completed\&quot; state. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity. The file format is specified by calling the Create Export Activity Job endpoint. The following is an example of the default file format (\&quot;CSV\&quot;). Note that the \&quot;attributes\&quot; field is formatted as JSON.

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ActivitiesApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

ActivitiesApi apiInstance = new ActivitiesApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.getActivityJobFile(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling ActivitiesApi#getActivityJobFile");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **Integer**| Export ID |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getActivityJobStatus"></a>
# **getActivityJobStatus**
> getActivityJobStatus(exportId)

Obtain Status of Export Job (Step 2.1, optional)

Returns status of an export job. Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Activity

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ActivitiesApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

ActivitiesApi apiInstance = new ActivitiesApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.getActivityJobStatus(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling ActivitiesApi#getActivityJobStatus");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **Integer**| Export ID |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="queueActivityJob"></a>
# **queueActivityJob**
> queueActivityJob(exportId)

Place Export Job in Queue (Step 2)

Enqueue export job. This will place export job in queue, and will start the job when computing resources become available. The export job must be in \&quot;Created\&quot; state. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ActivitiesApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

ActivitiesApi apiInstance = new ActivitiesApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.queueActivityJob(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling ActivitiesApi#queueActivityJob");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **exportId** | **Integer**| Export ID |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

