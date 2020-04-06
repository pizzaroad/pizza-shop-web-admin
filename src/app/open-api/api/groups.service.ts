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
 *//* tslint:disable:no-unused-variable member-ordering */

import { Inject, Injectable, Optional }                      from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams,
         HttpResponse, HttpEvent }                           from '@angular/common/http';
import { CustomHttpUrlEncodingCodec }                        from '../encoder';

import { Observable }                                        from 'rxjs';

import { Group } from '../model/group';

import { BASE_PATH, COLLECTION_FORMATS }                     from '../variables';
import { Configuration }                                     from '../configuration';


@Injectable()
export class GroupsService {

    protected basePath = 'https://virtserver.swaggerhub.com/fattazzo/pizza-shop/1.0.0';
    public defaultHeaders = new HttpHeaders();
    public configuration = new Configuration();

    constructor(protected httpClient: HttpClient, @Optional()@Inject(BASE_PATH) basePath: string, @Optional() configuration: Configuration) {
        if (basePath) {
            this.basePath = basePath;
        }
        if (configuration) {
            this.configuration = configuration;
            this.basePath = basePath || configuration.basePath || this.basePath;
        }
    }

    /**
     * @param consumes string[] mime-types
     * @return true: consumes contains 'multipart/form-data', false: otherwise
     */
    private canConsumeForm(consumes: string[]): boolean {
        const form = 'multipart/form-data';
        for (const consume of consumes) {
            if (form === consume) {
                return true;
            }
        }
        return false;
    }


    /**
     * Create a Group
     * Creates a new instance of a &#x60;Group&#x60;.
     * @param body A new &#x60;Group&#x60; to be created.
     * @param companyId A unique identifier for a &#x60;Company&#x60;.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public createGroup(body: Group, companyId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public createGroup(body: Group, companyId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public createGroup(body: Group, companyId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public createGroup(body: Group, companyId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling createGroup.');
        }

        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling createGroup.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authentication) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('post',`${this.basePath}/companies/${encodeURIComponent(String(companyId))}/groups`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Delete a Group
     * Deletes an existing &#x60;Group&#x60;.
     * @param companyId A unique identifier for a &#x60;Company&#x60;.
     * @param groupId A unique identifier for a &#x60;Group&#x60;.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public deleteGroup(companyId: number, groupId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public deleteGroup(companyId: number, groupId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public deleteGroup(companyId: number, groupId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public deleteGroup(companyId: number, groupId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling deleteGroup.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling deleteGroup.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authentication) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<any>('delete',`${this.basePath}/companies/${encodeURIComponent(String(companyId))}/groups/${encodeURIComponent(String(groupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Get a Group
     * Gets the details of a single instance of a &#x60;Group&#x60;.
     * @param companyId A unique identifier for a &#x60;Company&#x60;.
     * @param groupId A unique identifier for a &#x60;Group&#x60;.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGroup(companyId: number, groupId: number, observe?: 'body', reportProgress?: boolean): Observable<Group>;
    public getGroup(companyId: number, groupId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Group>>;
    public getGroup(companyId: number, groupId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Group>>;
    public getGroup(companyId: number, groupId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling getGroup.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling getGroup.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authentication) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Group>('get',`${this.basePath}/companies/${encodeURIComponent(String(companyId))}/groups/${encodeURIComponent(String(groupId))}`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * List All groups
     * Gets a list of all &#x60;Group&#x60; entities.
     * @param companyId A unique identifier for a &#x60;Company&#x60;.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public getGroups(companyId: number, observe?: 'body', reportProgress?: boolean): Observable<Array<Group>>;
    public getGroups(companyId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<Array<Group>>>;
    public getGroups(companyId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<Array<Group>>>;
    public getGroups(companyId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling getGroups.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authentication) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
            'application/json'
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
        ];

        return this.httpClient.request<Array<Group>>('get',`${this.basePath}/companies/${encodeURIComponent(String(companyId))}/groups`,
            {
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

    /**
     * Update a Group
     * Updates an existing &#x60;Group&#x60;.
     * @param body Updated &#x60;Group&#x60; information.
     * @param companyId A unique identifier for a &#x60;Company&#x60;.
     * @param groupId A unique identifier for a &#x60;Group&#x60;.
     * @param observe set whether or not to return the data Observable as the body, response or events. defaults to returning the body.
     * @param reportProgress flag to report request and response progress.
     */
    public updateGroup(body: Group, companyId: number, groupId: number, observe?: 'body', reportProgress?: boolean): Observable<any>;
    public updateGroup(body: Group, companyId: number, groupId: number, observe?: 'response', reportProgress?: boolean): Observable<HttpResponse<any>>;
    public updateGroup(body: Group, companyId: number, groupId: number, observe?: 'events', reportProgress?: boolean): Observable<HttpEvent<any>>;
    public updateGroup(body: Group, companyId: number, groupId: number, observe: any = 'body', reportProgress: boolean = false ): Observable<any> {

        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling updateGroup.');
        }

        if (companyId === null || companyId === undefined) {
            throw new Error('Required parameter companyId was null or undefined when calling updateGroup.');
        }

        if (groupId === null || groupId === undefined) {
            throw new Error('Required parameter groupId was null or undefined when calling updateGroup.');
        }

        let headers = this.defaultHeaders;

        // authentication (Authentication) required
        if (this.configuration.accessToken) {
            const accessToken = typeof this.configuration.accessToken === 'function'
                ? this.configuration.accessToken()
                : this.configuration.accessToken;
            headers = headers.set('Authorization', 'Bearer ' + accessToken);
        }
        // to determine the Accept header
        let httpHeaderAccepts: string[] = [
        ];
        const httpHeaderAcceptSelected: string | undefined = this.configuration.selectHeaderAccept(httpHeaderAccepts);
        if (httpHeaderAcceptSelected != undefined) {
            headers = headers.set('Accept', httpHeaderAcceptSelected);
        }

        // to determine the Content-Type header
        const consumes: string[] = [
            'application/json'
        ];
        const httpContentTypeSelected: string | undefined = this.configuration.selectHeaderContentType(consumes);
        if (httpContentTypeSelected != undefined) {
            headers = headers.set('Content-Type', httpContentTypeSelected);
        }

        return this.httpClient.request<any>('put',`${this.basePath}/companies/${encodeURIComponent(String(companyId))}/groups/${encodeURIComponent(String(groupId))}`,
            {
                body: body,
                withCredentials: this.configuration.withCredentials,
                headers: headers,
                observe: observe,
                reportProgress: reportProgress
            }
        );
    }

}