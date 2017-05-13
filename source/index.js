'use strict'

/**
 * @typedef {Object.<string, function(*):boolean>} TypeMap
 */

/**
 * Get the type of the value in lowercase
 * @param {*} value
 * @param {TypeMap} [customTypeMap] a custom type map
 * @returns {?string}
 */
function getType (value, customTypeMap) {
   // Cycle through our type map
   for (const key in customTypeMap) {
      if (customTypeMap.hasOwnProperty(key)) {
         if (customTypeMap[key](value)) {
            return key
         }
      }
   }

   // No type was successful
   return null
}

/**
 * Get the type of the value in lowercase
 * @param {*} value
 * @param {Object.<string, function(*):boolean>} [customTypeMap] a custom type map
 * @returns {?string}
 */
function getTypeWorkaround (value, customTypeMap) {
   // Cycle through our type map
   for (const key in customTypeMap) {
      if (customTypeMap.hasOwnProperty(key)) {
         if (customTypeMap[key](value)) {
            return key
         }
      }
   }

   // No type was successful
   return null
}
