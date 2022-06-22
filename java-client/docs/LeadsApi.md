# LeadsApi

All URIs are relative to *https://marketo.swagger.io/bulk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelLeadExportJob**](LeadsApi.md#cancelLeadExportJob) | **GET** /leads/export/{exportId}/cancel.json | Cancel Export Job
[**exportLeadRequest**](LeadsApi.md#exportLeadRequest) | **POST** /leads/export/create.json | Create Export Leads Job (Step 1)
[**getExportLeadJobStatus**](LeadsApi.md#getExportLeadJobStatus) | **GET** /leads/export/{exportId}/status.json | Obtain Status of Custom Object Export Job (Step 2.1, optional)
[**getLeadExportJobFile**](LeadsApi.md#getLeadExportJobFile) | **GET** /leads/export/{exportId}/file.json | Retrieve Export Job (Step 3)
[**queueLeadJob**](LeadsApi.md#queueLeadJob) | **GET** /leads/export/{exportId}/enqueue.json | Place Export Job in Queue (Step 2)


<a name="cancelLeadExportJob"></a>
# **cancelLeadExportJob**
> cancelLeadExportJob(exportId)

Cancel Export Job

Cancel export job. Required Permissions: Read-Only Activity

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.LeadsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

LeadsApi apiInstance = new LeadsApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.cancelLeadExportJob(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling LeadsApi#cancelLeadExportJob");
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

<a name="exportLeadRequest"></a>
# **exportLeadRequest**
> exportLeadRequest(body)

Create Export Leads Job (Step 1)

Create export job for search criteria defined via \&quot;filter\&quot; parameter. Request returns the \&quot;exportId\&quot; which is passed as a parameter in subsequent calls to Bulk Export Leads endpoints. Use Enqueue Export Lead Job endpoint to queue the export job for processing. Use Get Export Lead Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Lead

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.LeadsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

LeadsApi apiInstance = new LeadsApi();
ExportLeadRequest body = new ExportLeadRequest(); // ExportLeadRequest | Create new exportLeadRequest
try {
    apiInstance.exportLeadRequest(body);
} catch (ApiException e) {
    System.err.println("Exception when calling LeadsApi#exportLeadRequest");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExportLeadRequest**](ExportLeadRequest.md)| Create new exportLeadRequest |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExportLeadJobStatus"></a>
# **getExportLeadJobStatus**
> getExportLeadJobStatus(exportId)

Obtain Status of Custom Object Export Job (Step 2.1, optional)

Returns status of an export job. Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Lead

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.LeadsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

LeadsApi apiInstance = new LeadsApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.getExportLeadJobStatus(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling LeadsApi#getExportLeadJobStatus");
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

<a name="getLeadExportJobFile"></a>
# **getLeadExportJobFile**
> getLeadExportJobFile(exportId)

Retrieve Export Job (Step 3)

Returns the file content of an export job. The export job must be in \&quot;Completed\&quot; state. Use Get Export Lead Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Lead. The file format is specified by calling the Create Export Lead Job endpoint. The following is an example of the default file format (\&quot;CSV\&quot;).

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.LeadsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

LeadsApi apiInstance = new LeadsApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.getLeadExportJobFile(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling LeadsApi#getLeadExportJobFile");
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

<a name="queueLeadJob"></a>
# **queueLeadJob**
> queueLeadJob(exportId)

Place Export Job in Queue (Step 2)

Enqueue export job. This will place export job in queue, and will start the job when computing resources become available. The export job must be in \&quot;Created\&quot; state. Use Get Export Lead Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Lead

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.LeadsApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

LeadsApi apiInstance = new LeadsApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.queueLeadJob(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling LeadsApi#queueLeadJob");
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

