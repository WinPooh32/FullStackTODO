/**
 * API TODO list
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: winpooh32@yandex.ru
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The Task model module.
 * @module model/Task
 * @version 0.0.1
 */
class Task {
    /**
     * Constructs a new <code>Task</code>.
     * Task item body.
     * @alias module:model/Task
     * @param id {Number} 
     * @param lable {String} 
     * @param isComplete {Boolean} 
     */
    constructor(id, lable, isComplete) { 
        
        Task.initialize(this, id, lable, isComplete);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, lable, isComplete) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Task();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('lable')) {
                obj['lable'] = ApiClient.convertToType(data['lable'], 'String');
            }
            if (data.hasOwnProperty('isComplete')) {
                obj['isComplete'] = ApiClient.convertToType(data['isComplete'], 'Boolean');
            }
        }
        return obj;
    }


}

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






export default Task;

