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

import io.swagger.client.model.RequestToken;
import org.junit.Test;
import org.junit.Ignore;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * API tests for AuthenticationApi
 */
@Ignore
public class AuthenticationApiTest {

    private final AuthenticationApi api = new AuthenticationApi();

    
    /**
     * Request an Authentication Token
     *
     * Retrieve an access token from Marketo. Calls to this endpoint are not counted towards API call limit.
     *
     * @throws Exception
     *          if the Api call fails
     */
    @Test
    public void requestAuthenticationTokenTest() throws Exception {
        RequestToken body = null;
        api.requestAuthenticationToken(body);

        // TODO: test validations
    }
    
}