
# ExportLeadRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columnHeaderNames** | **Object** |  |  [optional]
**fields** | **List&lt;String&gt;** |  | 
**filter** | **Object** |  | 
**format** | **String** |  |  [optional]
**status** | [**StatusEnum**](#StatusEnum) | Export Job Status |  [optional]


<a name="StatusEnum"></a>
## Enum: StatusEnum
Name | Value
---- | -----
CREATED | &quot;Created&quot;
QUEUED | &quot;Queued&quot;
PROCESSING | &quot;Processing&quot;
CANCELED | &quot;Canceled&quot;
COMPLETED | &quot;Completed&quot;
FAILED | &quot;Failed&quot;



