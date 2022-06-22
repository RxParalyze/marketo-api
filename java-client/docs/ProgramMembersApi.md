# ProgramMembersApi

All URIs are relative to *https://marketo.swagger.io/bulk/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelProgramManagerExportJob**](ProgramMembersApi.md#cancelProgramManagerExportJob) | **GET** /program/members/export/{exportId}/cancel.json | Cancel Export Job
[**exportProgramMemberRequest**](ProgramMembersApi.md#exportProgramMemberRequest) | **POST** /program/members/export/create.json | Create Export Leads Job (Step 1)
[**getExportProgramManagerJobStatus**](ProgramMembersApi.md#getExportProgramManagerJobStatus) | **GET** /program/members/export/{exportId}/status.json | Obtain Status of Custom Object Export Job (Step 2.1, optional)
[**getProgramManagerExportJobFile**](ProgramMembersApi.md#getProgramManagerExportJobFile) | **GET** /program/members/export/{exportId}/file.json | Retrieve Export Job (Step 3)
[**queueProgramManagerJob**](ProgramMembersApi.md#queueProgramManagerJob) | **GET** /program/members/export/{exportId}/enqueue.json | Place Export Job in Queue (Step 2)


<a name="cancelProgramManagerExportJob"></a>
# **cancelProgramManagerExportJob**
> cancelProgramManagerExportJob(exportId)

Cancel Export Job

Cancel export job. Required Permissions: Read-Only Activity

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ProgramMembersApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

ProgramMembersApi apiInstance = new ProgramMembersApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.cancelProgramManagerExportJob(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling ProgramMembersApi#cancelProgramManagerExportJob");
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

<a name="exportProgramMemberRequest"></a>
# **exportProgramMemberRequest**
> exportProgramMemberRequest(body)

Create Export Leads Job (Step 1)

Create export job for search criteria defined via \&quot;filter\&quot; parameter. Request returns the \&quot;exportId\&quot; which is passed as a parameter in subsequent calls to Bulk Export Program Members endpoints. Use Enqueue Export Program Member Job endpoint to queue the export job for processing. Use Get Export Program Member Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Lead

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ProgramMembersApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

ProgramMembersApi apiInstance = new ProgramMembersApi();
ExportProgramMemberRequest body = new ExportProgramMemberRequest(); // ExportProgramMemberRequest | Create new exportProgramMemberRequest
try {
    apiInstance.exportProgramMemberRequest(body);
} catch (ApiException e) {
    System.err.println("Exception when calling ProgramMembersApi#exportProgramMemberRequest");
    e.printStackTrace();
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ExportProgramMemberRequest**](ExportProgramMemberRequest.md)| Create new exportProgramMemberRequest |

### Return type

null (empty response body)

### Authorization

[marketo_auth](../README.md#marketo_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getExportProgramManagerJobStatus"></a>
# **getExportProgramManagerJobStatus**
> getExportProgramManagerJobStatus(exportId)

Obtain Status of Custom Object Export Job (Step 2.1, optional)

Returns status of an export job. Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Lead

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ProgramMembersApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

ProgramMembersApi apiInstance = new ProgramMembersApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.getExportProgramManagerJobStatus(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling ProgramMembersApi#getExportProgramManagerJobStatus");
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

<a name="getProgramManagerExportJobFile"></a>
# **getProgramManagerExportJobFile**
> getProgramManagerExportJobFile(exportId)

Retrieve Export Job (Step 3)

Returns the file content of an export job. The export job must be in \&quot;Completed\&quot; state. Use Get Export Program Member Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Lead. The file format is specified by calling the Create Export Program Member Job endpoint. The following is an example of the default file format (\&quot;CSV\&quot;).

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ProgramMembersApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

ProgramMembersApi apiInstance = new ProgramMembersApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.getProgramManagerExportJobFile(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling ProgramMembersApi#getProgramManagerExportJobFile");
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

<a name="queueProgramManagerJob"></a>
# **queueProgramManagerJob**
> queueProgramManagerJob(exportId)

Place Export Job in Queue (Step 2)

Enqueue export job. This will place export job in queue, and will start the job when computing resources become available. The export job must be in \&quot;Created\&quot; state. Use Get Export Program Member Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Lead

### Example
```java
// Import classes:
//import io.swagger.client.ApiClient;
//import io.swagger.client.ApiException;
//import io.swagger.client.Configuration;
//import io.swagger.client.auth.*;
//import io.swagger.client.api.ProgramMembersApi;

ApiClient defaultClient = Configuration.getDefaultApiClient();

// Configure OAuth2 access token for authorization: marketo_auth
OAuth marketo_auth = (OAuth) defaultClient.getAuthentication("marketo_auth");
marketo_auth.setAccessToken("YOUR ACCESS TOKEN");

ProgramMembersApi apiInstance = new ProgramMembersApi();
Integer exportId = 56; // Integer | Export ID
try {
    apiInstance.queueProgramManagerJob(exportId);
} catch (ApiException e) {
    System.err.println("Exception when calling ProgramMembersApi#queueProgramManagerJob");
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

