# ApiTodoList.DefaultApi

All URIs are relative to *http://127.0.0.1:8181/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**listGet**](DefaultApi.md#listGet) | **GET** /list | Gets all TODO tasks.
[**taskDelete**](DefaultApi.md#taskDelete) | **DELETE** /task | Deletes task by id.
[**taskPut**](DefaultApi.md#taskPut) | **PUT** /task | Adds or update TODO task.



## listGet

> [Task] listGet()

Gets all TODO tasks.

### Example

```javascript
import ApiTodoList from 'api_todo_list';

let apiInstance = new ApiTodoList.DefaultApi();
apiInstance.listGet().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[Task]**](Task.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## taskDelete

> taskDelete(task)

Deletes task by id.

### Example

```javascript
import ApiTodoList from 'api_todo_list';

let apiInstance = new ApiTodoList.DefaultApi();
let task = new ApiTodoList.Task(); // Task | 
apiInstance.taskDelete(task).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | [**Task**](Task.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## taskPut

> taskPut(task)

Adds or update TODO task.

### Example

```javascript
import ApiTodoList from 'api_todo_list';

let apiInstance = new ApiTodoList.DefaultApi();
let task = new ApiTodoList.Task(); // Task | 
apiInstance.taskPut(task).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **task** | [**Task**](Task.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

