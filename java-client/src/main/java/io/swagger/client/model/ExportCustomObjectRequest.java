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


package io.swagger.client.model;

import java.util.Objects;
import java.util.Arrays;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

/**
 * ExportCustomObjectRequest
 */
@javax.annotation.Generated(value = "io.swagger.codegen.languages.JavaClientCodegen", date = "2022-06-09T19:17:27.109Z")
public class ExportCustomObjectRequest {
  @SerializedName("columnHeaderNames")
  private Object columnHeaderNames = null;

  @SerializedName("fields")
  private List<String> fields = new ArrayList<String>();

  @SerializedName("filter")
  private Object filter = null;

  @SerializedName("format")
  private String format = null;

  /**
   * Export Job Status
   */
  @JsonAdapter(StatusEnum.Adapter.class)
  public enum StatusEnum {
    CREATED("Created"),
    
    QUEUED("Queued"),
    
    PROCESSING("Processing"),
    
    CANCELED("Canceled"),
    
    COMPLETED("Completed"),
    
    FAILED("Failed");

    private String value;

    StatusEnum(String value) {
      this.value = value;
    }

    public String getValue() {
      return value;
    }

    @Override
    public String toString() {
      return String.valueOf(value);
    }

    public static StatusEnum fromValue(String text) {
      for (StatusEnum b : StatusEnum.values()) {
        if (String.valueOf(b.value).equals(text)) {
          return b;
        }
      }
      return null;
    }

    public static class Adapter extends TypeAdapter<StatusEnum> {
      @Override
      public void write(final JsonWriter jsonWriter, final StatusEnum enumeration) throws IOException {
        jsonWriter.value(enumeration.getValue());
      }

      @Override
      public StatusEnum read(final JsonReader jsonReader) throws IOException {
        String value = jsonReader.nextString();
        return StatusEnum.fromValue(String.valueOf(value));
      }
    }
  }

  @SerializedName("status")
  private StatusEnum status = null;

  public ExportCustomObjectRequest columnHeaderNames(Object columnHeaderNames) {
    this.columnHeaderNames = columnHeaderNames;
    return this;
  }

   /**
   * Get columnHeaderNames
   * @return columnHeaderNames
  **/
  @ApiModelProperty(value = "")
  public Object getColumnHeaderNames() {
    return columnHeaderNames;
  }

  public void setColumnHeaderNames(Object columnHeaderNames) {
    this.columnHeaderNames = columnHeaderNames;
  }

  public ExportCustomObjectRequest fields(List<String> fields) {
    this.fields = fields;
    return this;
  }

  public ExportCustomObjectRequest addFieldsItem(String fieldsItem) {
    this.fields.add(fieldsItem);
    return this;
  }

   /**
   * Get fields
   * @return fields
  **/
  @ApiModelProperty(required = true, value = "")
  public List<String> getFields() {
    return fields;
  }

  public void setFields(List<String> fields) {
    this.fields = fields;
  }

  public ExportCustomObjectRequest filter(Object filter) {
    this.filter = filter;
    return this;
  }

   /**
   * Get filter
   * @return filter
  **/
  @ApiModelProperty(required = true, value = "")
  public Object getFilter() {
    return filter;
  }

  public void setFilter(Object filter) {
    this.filter = filter;
  }

  public ExportCustomObjectRequest format(String format) {
    this.format = format;
    return this;
  }

   /**
   * Get format
   * @return format
  **/
  @ApiModelProperty(value = "")
  public String getFormat() {
    return format;
  }

  public void setFormat(String format) {
    this.format = format;
  }

  public ExportCustomObjectRequest status(StatusEnum status) {
    this.status = status;
    return this;
  }

   /**
   * Export Job Status
   * @return status
  **/
  @ApiModelProperty(value = "Export Job Status")
  public StatusEnum getStatus() {
    return status;
  }

  public void setStatus(StatusEnum status) {
    this.status = status;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ExportCustomObjectRequest exportCustomObjectRequest = (ExportCustomObjectRequest) o;
    return Objects.equals(this.columnHeaderNames, exportCustomObjectRequest.columnHeaderNames) &&
        Objects.equals(this.fields, exportCustomObjectRequest.fields) &&
        Objects.equals(this.filter, exportCustomObjectRequest.filter) &&
        Objects.equals(this.format, exportCustomObjectRequest.format) &&
        Objects.equals(this.status, exportCustomObjectRequest.status);
  }

  @Override
  public int hashCode() {
    return Objects.hash(columnHeaderNames, fields, filter, format, status);
  }


  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ExportCustomObjectRequest {\n");
    
    sb.append("    columnHeaderNames: ").append(toIndentedString(columnHeaderNames)).append("\n");
    sb.append("    fields: ").append(toIndentedString(fields)).append("\n");
    sb.append("    filter: ").append(toIndentedString(filter)).append("\n");
    sb.append("    format: ").append(toIndentedString(format)).append("\n");
    sb.append("    status: ").append(toIndentedString(status)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }

}
