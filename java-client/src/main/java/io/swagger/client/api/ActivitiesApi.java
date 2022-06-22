/*
 * Marketo Bulk Export
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


package io.swagger.client.api;

import io.swagger.client.ApiCallback;
import io.swagger.client.ApiClient;
import io.swagger.client.ApiException;
import io.swagger.client.ApiResponse;
import io.swagger.client.Configuration;
import io.swagger.client.Pair;
import io.swagger.client.ProgressRequestBody;
import io.swagger.client.ProgressResponseBody;

import com.google.gson.reflect.TypeToken;

import java.io.IOException;


import io.swagger.client.model.ExportActivityRequest;

import java.lang.reflect.Type;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ActivitiesApi {
    private ApiClient apiClient;

    public ActivitiesApi() {
        this(Configuration.getDefaultApiClient());
    }

    public ActivitiesApi(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    public ApiClient getApiClient() {
        return apiClient;
    }

    public void setApiClient(ApiClient apiClient) {
        this.apiClient = apiClient;
    }

    /**
     * Build call for cancelActivityJob
     * @param exportId Export ID (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call cancelActivityJobCall(Integer exportId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/activities/export/{exportId}/cancel.json"
            .replaceAll("\\{" + "exportId" + "\\}", apiClient.escapeString(exportId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "marketo_auth" };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call cancelActivityJobValidateBeforeCall(Integer exportId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'exportId' is set
        if (exportId == null) {
            throw new ApiException("Missing the required parameter 'exportId' when calling cancelActivityJob(Async)");
        }
        

        com.squareup.okhttp.Call call = cancelActivityJobCall(exportId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Cancel Export Job
     * Cancel export job. Required Permissions: Read-Only Activity
     * @param exportId Export ID (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public void cancelActivityJob(Integer exportId) throws ApiException {
        cancelActivityJobWithHttpInfo(exportId);
    }

    /**
     * Cancel Export Job
     * Cancel export job. Required Permissions: Read-Only Activity
     * @param exportId Export ID (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Void> cancelActivityJobWithHttpInfo(Integer exportId) throws ApiException {
        com.squareup.okhttp.Call call = cancelActivityJobValidateBeforeCall(exportId, null, null);
        return apiClient.execute(call);
    }

    /**
     * Cancel Export Job (asynchronously)
     * Cancel export job. Required Permissions: Read-Only Activity
     * @param exportId Export ID (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call cancelActivityJobAsync(Integer exportId, final ApiCallback<Void> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = cancelActivityJobValidateBeforeCall(exportId, progressListener, progressRequestListener);
        apiClient.executeAsync(call, callback);
        return call;
    }
    /**
     * Build call for exportActivityRequest
     * @param body Create new exportActivityRequest (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call exportActivityRequestCall(ExportActivityRequest body, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = body;

        // create path and map variables
        String localVarPath = "/activities/export/create.json";

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            "application/json"
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "marketo_auth" };
        return apiClient.buildCall(localVarPath, "POST", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call exportActivityRequestValidateBeforeCall(ExportActivityRequest body, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'body' is set
        if (body == null) {
            throw new ApiException("Missing the required parameter 'body' when calling exportActivityRequest(Async)");
        }
        

        com.squareup.okhttp.Call call = exportActivityRequestCall(body, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Create Export Activity Job (Step 1)
     * Create export job for search criteria defined via \&quot;filter\&quot; parameter. Request returns the \&quot;exportId\&quot; which is passed as a parameter in subsequent calls to Bulk Export Activities endpoints. Use Enqueue Export Activity Job endpoint to queue the export job for processing. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity
     * @param body Create new exportActivityRequest (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public void exportActivityRequest(ExportActivityRequest body) throws ApiException {
        exportActivityRequestWithHttpInfo(body);
    }

    /**
     * Create Export Activity Job (Step 1)
     * Create export job for search criteria defined via \&quot;filter\&quot; parameter. Request returns the \&quot;exportId\&quot; which is passed as a parameter in subsequent calls to Bulk Export Activities endpoints. Use Enqueue Export Activity Job endpoint to queue the export job for processing. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity
     * @param body Create new exportActivityRequest (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Void> exportActivityRequestWithHttpInfo(ExportActivityRequest body) throws ApiException {
        com.squareup.okhttp.Call call = exportActivityRequestValidateBeforeCall(body, null, null);
        return apiClient.execute(call);
    }

    /**
     * Create Export Activity Job (Step 1) (asynchronously)
     * Create export job for search criteria defined via \&quot;filter\&quot; parameter. Request returns the \&quot;exportId\&quot; which is passed as a parameter in subsequent calls to Bulk Export Activities endpoints. Use Enqueue Export Activity Job endpoint to queue the export job for processing. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity
     * @param body Create new exportActivityRequest (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call exportActivityRequestAsync(ExportActivityRequest body, final ApiCallback<Void> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = exportActivityRequestValidateBeforeCall(body, progressListener, progressRequestListener);
        apiClient.executeAsync(call, callback);
        return call;
    }
    /**
     * Build call for getActivityJobFile
     * @param exportId Export ID (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getActivityJobFileCall(Integer exportId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/activities/export/{exportId}/file.json"
            .replaceAll("\\{" + "exportId" + "\\}", apiClient.escapeString(exportId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "marketo_auth" };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call getActivityJobFileValidateBeforeCall(Integer exportId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'exportId' is set
        if (exportId == null) {
            throw new ApiException("Missing the required parameter 'exportId' when calling getActivityJobFile(Async)");
        }
        

        com.squareup.okhttp.Call call = getActivityJobFileCall(exportId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Retrieve Export Job (Step 3)
     * Returns the file content of an export job. The export job must be in \&quot;Completed\&quot; state. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity. The file format is specified by calling the Create Export Activity Job endpoint. The following is an example of the default file format (\&quot;CSV\&quot;). Note that the \&quot;attributes\&quot; field is formatted as JSON.
     * @param exportId Export ID (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public void getActivityJobFile(Integer exportId) throws ApiException {
        getActivityJobFileWithHttpInfo(exportId);
    }

    /**
     * Retrieve Export Job (Step 3)
     * Returns the file content of an export job. The export job must be in \&quot;Completed\&quot; state. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity. The file format is specified by calling the Create Export Activity Job endpoint. The following is an example of the default file format (\&quot;CSV\&quot;). Note that the \&quot;attributes\&quot; field is formatted as JSON.
     * @param exportId Export ID (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Void> getActivityJobFileWithHttpInfo(Integer exportId) throws ApiException {
        com.squareup.okhttp.Call call = getActivityJobFileValidateBeforeCall(exportId, null, null);
        return apiClient.execute(call);
    }

    /**
     * Retrieve Export Job (Step 3) (asynchronously)
     * Returns the file content of an export job. The export job must be in \&quot;Completed\&quot; state. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity. The file format is specified by calling the Create Export Activity Job endpoint. The following is an example of the default file format (\&quot;CSV\&quot;). Note that the \&quot;attributes\&quot; field is formatted as JSON.
     * @param exportId Export ID (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getActivityJobFileAsync(Integer exportId, final ApiCallback<Void> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = getActivityJobFileValidateBeforeCall(exportId, progressListener, progressRequestListener);
        apiClient.executeAsync(call, callback);
        return call;
    }
    /**
     * Build call for getActivityJobStatus
     * @param exportId Export ID (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call getActivityJobStatusCall(Integer exportId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/activities/export/{exportId}/status.json"
            .replaceAll("\\{" + "exportId" + "\\}", apiClient.escapeString(exportId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "marketo_auth" };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call getActivityJobStatusValidateBeforeCall(Integer exportId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'exportId' is set
        if (exportId == null) {
            throw new ApiException("Missing the required parameter 'exportId' when calling getActivityJobStatus(Async)");
        }
        

        com.squareup.okhttp.Call call = getActivityJobStatusCall(exportId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Obtain Status of Export Job (Step 2.1, optional)
     * Returns status of an export job. Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Activity
     * @param exportId Export ID (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public void getActivityJobStatus(Integer exportId) throws ApiException {
        getActivityJobStatusWithHttpInfo(exportId);
    }

    /**
     * Obtain Status of Export Job (Step 2.1, optional)
     * Returns status of an export job. Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Activity
     * @param exportId Export ID (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Void> getActivityJobStatusWithHttpInfo(Integer exportId) throws ApiException {
        com.squareup.okhttp.Call call = getActivityJobStatusValidateBeforeCall(exportId, null, null);
        return apiClient.execute(call);
    }

    /**
     * Obtain Status of Export Job (Step 2.1, optional) (asynchronously)
     * Returns status of an export job. Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Activity
     * @param exportId Export ID (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call getActivityJobStatusAsync(Integer exportId, final ApiCallback<Void> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = getActivityJobStatusValidateBeforeCall(exportId, progressListener, progressRequestListener);
        apiClient.executeAsync(call, callback);
        return call;
    }
    /**
     * Build call for queueActivityJob
     * @param exportId Export ID (required)
     * @param progressListener Progress listener
     * @param progressRequestListener Progress request listener
     * @return Call to execute
     * @throws ApiException If fail to serialize the request body object
     */
    public com.squareup.okhttp.Call queueActivityJobCall(Integer exportId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        Object localVarPostBody = null;

        // create path and map variables
        String localVarPath = "/activities/export/{exportId}/enqueue.json"
            .replaceAll("\\{" + "exportId" + "\\}", apiClient.escapeString(exportId.toString()));

        List<Pair> localVarQueryParams = new ArrayList<Pair>();
        List<Pair> localVarCollectionQueryParams = new ArrayList<Pair>();

        Map<String, String> localVarHeaderParams = new HashMap<String, String>();

        Map<String, Object> localVarFormParams = new HashMap<String, Object>();

        final String[] localVarAccepts = {
            "application/json"
        };
        final String localVarAccept = apiClient.selectHeaderAccept(localVarAccepts);
        if (localVarAccept != null) localVarHeaderParams.put("Accept", localVarAccept);

        final String[] localVarContentTypes = {
            
        };
        final String localVarContentType = apiClient.selectHeaderContentType(localVarContentTypes);
        localVarHeaderParams.put("Content-Type", localVarContentType);

        if(progressListener != null) {
            apiClient.getHttpClient().networkInterceptors().add(new com.squareup.okhttp.Interceptor() {
                @Override
                public com.squareup.okhttp.Response intercept(com.squareup.okhttp.Interceptor.Chain chain) throws IOException {
                    com.squareup.okhttp.Response originalResponse = chain.proceed(chain.request());
                    return originalResponse.newBuilder()
                    .body(new ProgressResponseBody(originalResponse.body(), progressListener))
                    .build();
                }
            });
        }

        String[] localVarAuthNames = new String[] { "marketo_auth" };
        return apiClient.buildCall(localVarPath, "GET", localVarQueryParams, localVarCollectionQueryParams, localVarPostBody, localVarHeaderParams, localVarFormParams, localVarAuthNames, progressRequestListener);
    }

    @SuppressWarnings("rawtypes")
    private com.squareup.okhttp.Call queueActivityJobValidateBeforeCall(Integer exportId, final ProgressResponseBody.ProgressListener progressListener, final ProgressRequestBody.ProgressRequestListener progressRequestListener) throws ApiException {
        
        // verify the required parameter 'exportId' is set
        if (exportId == null) {
            throw new ApiException("Missing the required parameter 'exportId' when calling queueActivityJob(Async)");
        }
        

        com.squareup.okhttp.Call call = queueActivityJobCall(exportId, progressListener, progressRequestListener);
        return call;

    }

    /**
     * Place Export Job in Queue (Step 2)
     * Enqueue export job. This will place export job in queue, and will start the job when computing resources become available. The export job must be in \&quot;Created\&quot; state. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity
     * @param exportId Export ID (required)
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public void queueActivityJob(Integer exportId) throws ApiException {
        queueActivityJobWithHttpInfo(exportId);
    }

    /**
     * Place Export Job in Queue (Step 2)
     * Enqueue export job. This will place export job in queue, and will start the job when computing resources become available. The export job must be in \&quot;Created\&quot; state. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity
     * @param exportId Export ID (required)
     * @return ApiResponse&lt;Void&gt;
     * @throws ApiException If fail to call the API, e.g. server error or cannot deserialize the response body
     */
    public ApiResponse<Void> queueActivityJobWithHttpInfo(Integer exportId) throws ApiException {
        com.squareup.okhttp.Call call = queueActivityJobValidateBeforeCall(exportId, null, null);
        return apiClient.execute(call);
    }

    /**
     * Place Export Job in Queue (Step 2) (asynchronously)
     * Enqueue export job. This will place export job in queue, and will start the job when computing resources become available. The export job must be in \&quot;Created\&quot; state. Use Get Export Activity Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Activity
     * @param exportId Export ID (required)
     * @param callback The callback to be executed when the API call finishes
     * @return The request call
     * @throws ApiException If fail to process the API call, e.g. serializing the request body object
     */
    public com.squareup.okhttp.Call queueActivityJobAsync(Integer exportId, final ApiCallback<Void> callback) throws ApiException {

        ProgressResponseBody.ProgressListener progressListener = null;
        ProgressRequestBody.ProgressRequestListener progressRequestListener = null;

        if (callback != null) {
            progressListener = new ProgressResponseBody.ProgressListener() {
                @Override
                public void update(long bytesRead, long contentLength, boolean done) {
                    callback.onDownloadProgress(bytesRead, contentLength, done);
                }
            };

            progressRequestListener = new ProgressRequestBody.ProgressRequestListener() {
                @Override
                public void onRequestProgress(long bytesWritten, long contentLength, boolean done) {
                    callback.onUploadProgress(bytesWritten, contentLength, done);
                }
            };
        }

        com.squareup.okhttp.Call call = queueActivityJobValidateBeforeCall(exportId, progressListener, progressRequestListener);
        apiClient.executeAsync(call, callback);
        return call;
    }
}
