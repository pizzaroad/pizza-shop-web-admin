/**
 * PizzaShop
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { Role } from './role';

export interface Group { 
    id: number;
    name: string;
    /**
     * List of assigned `Role'
     */
    roles?: Array<Role>;
}