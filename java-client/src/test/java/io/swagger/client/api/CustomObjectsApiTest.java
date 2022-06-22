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

import io.swagger.client.model.ExportCustomObjectRequest;
import org.junit.Test;
import org.junit.Ignore;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for CustomObjectsApi
 */
@Ignore
public class CustomObjectsApiTest {

    private final CustomObjectsApi api = new CustomObjectsApi();

    
    /**
     * Cancel Export Job
     *
     * Cancel export job. Required Permissions: Read-Only Activity
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void cancelCustomObjectExportJobTest() throws Exception {
        Integer exportId = null;
        String apiName = null;
        api.cancelCustomObjectExportJob(exportId, apiName);

        // TODO: test validations
    }
    
    /**
     * Create Export Custom Object Job (Step 1)
     *
     * Create export job for search criteria defined via \&quot;filter\&quot; parameter. Request returns the \&quot;exportId\&quot; which is passed as a parameter in subsequent calls to Bulk Export Custom Object endpoints. Use Enqueue Export Custom Object Job endpoint to queue the export job for processing. Use Get Export Custom Object Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Custom Object
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void exportCustomObjectRequestTest() throws Exception {
        ExportCustomObjectRequest body = null;
        String apiName = null;
        api.exportCustomObjectRequest(body, apiName);

        // TODO: test validations
    }
    
    /**
     * Retrieve Export Job (Step 3)
     *
     * Returns the file content of an export job. The export job must be in \&quot;Completed\&quot; state. Use Get Export Custom Object Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only. Custom Object The file format is specified by calling the Create Export Custom Object Job endpoint. The following is an example of the default file format (\&quot;CSV\&quot;).
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void getCustomObjectExportJobFileTest() throws Exception {
        Integer exportId = null;
        String apiName = null;
        api.getCustomObjectExportJobFile(exportId, apiName);

        // TODO: test validations
    }
    
    /**
     * Obtain Status of Custom Object Export Job (Step 2.1, optional)
     *
     * Returns status of an export job. Job status is available for 30 days after Completed or Failed status was reached. Required Permissions: Read-Only Custom Object
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void getExportCustomObjectJobStatusTest() throws Exception {
        Integer exportId = null;
        String apiName = null;
        api.getExportCustomObjectJobStatus(exportId, apiName);

        // TODO: test validations
    }
    
    /**
     * Place Export Job in Queue (Step 2)
     *
     * Enqueue export job. This will place export job in queue, and will start the job when computing resources become available. The export job must be in \&quot;Created\&quot; state. Use Get Export Custom Object Job Status endpoint to retrieve status of export job. Required Permissions: Read-Only Custom Object
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void queueCustomObjectJobTest() throws Exception {
        Integer exportId = null;
        String apiName = null;
        api.queueCustomObjectJob(exportId, apiName);

        // TODO: test validations
    }
    
}
