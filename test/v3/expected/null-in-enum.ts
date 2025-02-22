/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  '/test': {
    get: {
      responses: {
        /** A list of types. */
        200: unknown
      }
    }
  }
}

export interface components {
  schemas: {
    /** @description Enum with null and nullable */
    MyType: {
      /** @enum {string|null} */
      myField?: ('foo' | 'bar' | null) | null
    }
    /** @description Enum with null */
    MyTypeNotNullable: {
      /** @enum {string} */
      myField?: 'foo' | 'bar' | null
    }
    /** @description Enum with null */
    MyTypeNotNullableNotNull: {
      /** @enum {string} */
      myField?: 'foo' | 'bar'
    }
    /** @description Enum with null */
    MyTypeMixed: {
      /** @enum {string} */
      myField?: 'foo' | 2 | false | null
    }
  }
}

export interface operations {}

export interface external {}
