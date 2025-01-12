# Learning CORS

This repository documents my learning journey about Cross-Origin Resource Sharing (CORS) and its different request types.

## What is CORS?
CORS is a mechanism that allows a server to indicate which origins (domains) are permitted to access its resources. It is a critical concept in web development for enabling or restricting resource sharing between different origins.

## Types of CORS Requests

### 1. Simple Requests
- **Criteria**: A request is classified as a simple request if:
  - The HTTP method is `GET`, `POST`, or `HEAD`.
  - The request headers are limited to `Accept`, `Accept-Language`, `Content-Language`, `Content-Type` (with values `text/plain`, `multipart/form-data`, or `application/x-www-form-urlencoded`).
- **Behavior**: The browser directly sends the request without a preflight check.

### 2. Preflight Requests
- **Criteria**: A request triggers a preflight if:
  - It uses HTTP methods other than `GET`, `POST`, or `HEAD`.
  - It includes custom headers or content types outside the "simple" criteria.
- **Behavior**: The browser sends an HTTP `OPTIONS` request (the preflight request) to the server to determine whether the actual request is safe to send. The server must respond with the appropriate CORS headers to allow the request.

### 3. Requests with Credentials
- **Criteria**: These requests include credentials such as cookies or HTTP authentication.
- **Behavior**: To enable credentialed requests, the server must:
  - Set the `Access-Control-Allow-Credentials` header to `true`.
  - Ensure the `Access-Control-Allow-Origin` header matches the exact origin of the request (wildcards like `*` are not allowed).

## Key CORS Headers
- **`Access-Control-Allow-Origin`**: Specifies the origin(s) allowed to access the resource.
- **`Access-Control-Allow-Methods`**: Lists the HTTP methods permitted when accessing the resource.
- **`Access-Control-Allow-Headers`**: Lists the headers that the server permits in the request.
- **`Access-Control-Allow-Credentials`**: Indicates whether credentials are allowed.
- **`Access-Control-Expose-Headers`**: Identifies which headers can be accessed by the client.

## Example Scenarios
1. **Simple Request**:
   - Fetching public data via `GET` without special headers.
2. **Preflight Request**:
   - Uploading a file with a `PUT` method and a custom header.
3. **Request with Credentials**:
   - Making an authenticated API call with cookies included.

## Conclusion
Understanding CORS and its request types is crucial for developing secure and functional web applications. This knowledge ensures compliance with browser security policies while enabling cross-origin interactions where needed.

