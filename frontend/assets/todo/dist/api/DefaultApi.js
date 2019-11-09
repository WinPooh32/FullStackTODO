"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Error = _interopRequireDefault(require("../model/Error"));

var _Task = _interopRequireDefault(require("../model/Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Default service.
* @module api/DefaultApi
* @version 0.0.1
*/
var DefaultApi =
/*#__PURE__*/
function () {
  /**
  * Constructs a new DefaultApi. 
  * @alias module:api/DefaultApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DefaultApi(apiClient) {
    _classCallCheck(this, DefaultApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Gets all TODO tasks.
   * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Task>} and HTTP response
   */


  _createClass(DefaultApi, [{
    key: "listGetWithHttpInfo",
    value: function listGetWithHttpInfo() {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Task["default"]];
      return this.apiClient.callApi('/list', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Gets all TODO tasks.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Task>}
     */

  }, {
    key: "listGet",
    value: function listGet() {
      return this.listGetWithHttpInfo().then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Deletes task by id.
     * @param {module:model/Task} task 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "taskDeleteWithHttpInfo",
    value: function taskDeleteWithHttpInfo(task) {
      var postBody = task; // verify the required parameter 'task' is set

      if (task === undefined || task === null) {
        throw new _Error["default"]("Missing the required parameter 'task' when calling taskDelete");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/task', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Deletes task by id.
     * @param {module:model/Task} task 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "taskDelete",
    value: function taskDelete(task) {
      return this.taskDeleteWithHttpInfo(task).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
    /**
     * Adds or update TODO task.
     * @param {module:model/Task} task 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */

  }, {
    key: "taskPutWithHttpInfo",
    value: function taskPutWithHttpInfo(task) {
      var postBody = task; // verify the required parameter 'task' is set

      if (task === undefined || task === null) {
        throw new _Error["default"]("Missing the required parameter 'task' when calling taskPut");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/task', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null);
    }
    /**
     * Adds or update TODO task.
     * @param {module:model/Task} task 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */

  }, {
    key: "taskPut",
    value: function taskPut(task) {
      return this.taskPutWithHttpInfo(task).then(function (response_and_data) {
        return response_and_data.data;
      });
    }
  }]);

  return DefaultApi;
}();

exports["default"] = DefaultApi;