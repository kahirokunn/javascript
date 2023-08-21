/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * OpenAPI spec version: release-1.25
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* NonResourceAttributes includes the authorization attributes available for non-resource requests to the Authorizer interface
*/
export class V1NonResourceAttributes {
    /**
    * Path is the URL path of the request
    */
    'path'?: string;
    /**
    * Verb is the standard HTTP verb
    */
    'verb'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string",
            "format": ""
        },
        {
            "name": "verb",
            "baseName": "verb",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return V1NonResourceAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}
