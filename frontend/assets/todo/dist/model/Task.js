"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Task model module.
 * @module model/Task
 * @version 0.0.1
 */
var Task =
/*#__PURE__*/
function () {
  /**
   * Constructs a new <code>Task</code>.
   * Task item body.
   * @alias module:model/Task
   * @param id {Number} 
   * @param lable {String} 
   * @param isComplete {Boolean} 
   */
  function Task(id, lable, isComplete) {
    _classCallCheck(this, Task);

    Task.initialize(this, id, lable, isComplete);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Task, null, [{
    key: "initialize",
    value: function initialize(obj, id, lable, isComplete) {
      obj['id'] = id;
      obj['lable'] = lable;
      obj['isComplete'] = isComplete;
    }
    /**
     * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Task} obj Optional instance to populate.
     * @return {module:model/Task} The populated <code>Task</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Task();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'Number');
        }

        if (data.hasOwnProperty('lable')) {
          obj['lable'] = _ApiClient["default"].convertToType(data['lable'], 'String');
        }

        if (data.hasOwnProperty('isComplete')) {
          obj['isComplete'] = _ApiClient["default"].convertToType(data['isComplete'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return Task;
}();
/**
 * @member {Number} id
 */


Task.prototype['id'] = undefined;
/**
 * @member {String} lable
 */

Task.prototype['lable'] = undefined;
/**
 * @member {Boolean} isComplete
 */

Task.prototype['isComplete'] = undefined;
var _default = Task;
exports["default"] = _default;