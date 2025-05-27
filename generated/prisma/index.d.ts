
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model services
 * 
 */
export type services = $Result.DefaultSelection<Prisma.$servicesPayload>
/**
 * Model stock_categories
 * 
 */
export type stock_categories = $Result.DefaultSelection<Prisma.$stock_categoriesPayload>
/**
 * Model stock_images
 * 
 */
export type stock_images = $Result.DefaultSelection<Prisma.$stock_imagesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Services
 * const services = await prisma.services.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Services
   * const services = await prisma.services.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.services`: Exposes CRUD operations for the **services** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.services.findMany()
    * ```
    */
  get services(): Prisma.servicesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock_categories`: Exposes CRUD operations for the **stock_categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stock_categories
    * const stock_categories = await prisma.stock_categories.findMany()
    * ```
    */
  get stock_categories(): Prisma.stock_categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stock_images`: Exposes CRUD operations for the **stock_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Stock_images
    * const stock_images = await prisma.stock_images.findMany()
    * ```
    */
  get stock_images(): Prisma.stock_imagesDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    services: 'services',
    stock_categories: 'stock_categories',
    stock_images: 'stock_images'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "services" | "stock_categories" | "stock_images"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      services: {
        payload: Prisma.$servicesPayload<ExtArgs>
        fields: Prisma.servicesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.servicesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.servicesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findFirst: {
            args: Prisma.servicesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.servicesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          findMany: {
            args: Prisma.servicesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          create: {
            args: Prisma.servicesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          createMany: {
            args: Prisma.servicesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.servicesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          delete: {
            args: Prisma.servicesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          update: {
            args: Prisma.servicesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          deleteMany: {
            args: Prisma.servicesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.servicesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.servicesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>[]
          }
          upsert: {
            args: Prisma.servicesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$servicesPayload>
          }
          aggregate: {
            args: Prisma.ServicesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServices>
          }
          groupBy: {
            args: Prisma.servicesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicesGroupByOutputType>[]
          }
          count: {
            args: Prisma.servicesCountArgs<ExtArgs>
            result: $Utils.Optional<ServicesCountAggregateOutputType> | number
          }
        }
      }
      stock_categories: {
        payload: Prisma.$stock_categoriesPayload<ExtArgs>
        fields: Prisma.stock_categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stock_categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stock_categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload>
          }
          findFirst: {
            args: Prisma.stock_categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stock_categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload>
          }
          findMany: {
            args: Prisma.stock_categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload>[]
          }
          create: {
            args: Prisma.stock_categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload>
          }
          createMany: {
            args: Prisma.stock_categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stock_categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload>[]
          }
          delete: {
            args: Prisma.stock_categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload>
          }
          update: {
            args: Prisma.stock_categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload>
          }
          deleteMany: {
            args: Prisma.stock_categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stock_categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stock_categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload>[]
          }
          upsert: {
            args: Prisma.stock_categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_categoriesPayload>
          }
          aggregate: {
            args: Prisma.Stock_categoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock_categories>
          }
          groupBy: {
            args: Prisma.stock_categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stock_categoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.stock_categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Stock_categoriesCountAggregateOutputType> | number
          }
        }
      }
      stock_images: {
        payload: Prisma.$stock_imagesPayload<ExtArgs>
        fields: Prisma.stock_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.stock_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.stock_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload>
          }
          findFirst: {
            args: Prisma.stock_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.stock_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload>
          }
          findMany: {
            args: Prisma.stock_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload>[]
          }
          create: {
            args: Prisma.stock_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload>
          }
          createMany: {
            args: Prisma.stock_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.stock_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload>[]
          }
          delete: {
            args: Prisma.stock_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload>
          }
          update: {
            args: Prisma.stock_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload>
          }
          deleteMany: {
            args: Prisma.stock_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.stock_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.stock_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload>[]
          }
          upsert: {
            args: Prisma.stock_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$stock_imagesPayload>
          }
          aggregate: {
            args: Prisma.Stock_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStock_images>
          }
          groupBy: {
            args: Prisma.stock_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Stock_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.stock_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Stock_imagesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    services?: servicesOmit
    stock_categories?: stock_categoriesOmit
    stock_images?: stock_imagesOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type Stock_categoriesCountOutputType
   */

  export type Stock_categoriesCountOutputType = {
    stock_images: number
  }

  export type Stock_categoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_images?: boolean | Stock_categoriesCountOutputTypeCountStock_imagesArgs
  }

  // Custom InputTypes
  /**
   * Stock_categoriesCountOutputType without action
   */
  export type Stock_categoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Stock_categoriesCountOutputType
     */
    select?: Stock_categoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Stock_categoriesCountOutputType without action
   */
  export type Stock_categoriesCountOutputTypeCountStock_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_imagesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model services
   */

  export type AggregateServices = {
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  export type ServicesAvgAggregateOutputType = {
    id: number | null
    texture_aspect_width: number | null
    texture_aspect_height: number | null
  }

  export type ServicesSumAggregateOutputType = {
    id: number | null
    texture_aspect_width: number | null
    texture_aspect_height: number | null
  }

  export type ServicesMinAggregateOutputType = {
    id: number | null
    service_name: string | null
    uv_url: string | null
    texture_aspect_width: number | null
    texture_aspect_height: number | null
    model_url: string | null
    image_url: string | null
    description: string | null
    title: string | null
    is_available: boolean | null
    icon_url: string | null
  }

  export type ServicesMaxAggregateOutputType = {
    id: number | null
    service_name: string | null
    uv_url: string | null
    texture_aspect_width: number | null
    texture_aspect_height: number | null
    model_url: string | null
    image_url: string | null
    description: string | null
    title: string | null
    is_available: boolean | null
    icon_url: string | null
  }

  export type ServicesCountAggregateOutputType = {
    id: number
    service_name: number
    uv_url: number
    texture_aspect_width: number
    texture_aspect_height: number
    model_url: number
    image_url: number
    description: number
    title: number
    is_available: number
    icon_url: number
    _all: number
  }


  export type ServicesAvgAggregateInputType = {
    id?: true
    texture_aspect_width?: true
    texture_aspect_height?: true
  }

  export type ServicesSumAggregateInputType = {
    id?: true
    texture_aspect_width?: true
    texture_aspect_height?: true
  }

  export type ServicesMinAggregateInputType = {
    id?: true
    service_name?: true
    uv_url?: true
    texture_aspect_width?: true
    texture_aspect_height?: true
    model_url?: true
    image_url?: true
    description?: true
    title?: true
    is_available?: true
    icon_url?: true
  }

  export type ServicesMaxAggregateInputType = {
    id?: true
    service_name?: true
    uv_url?: true
    texture_aspect_width?: true
    texture_aspect_height?: true
    model_url?: true
    image_url?: true
    description?: true
    title?: true
    is_available?: true
    icon_url?: true
  }

  export type ServicesCountAggregateInputType = {
    id?: true
    service_name?: true
    uv_url?: true
    texture_aspect_width?: true
    texture_aspect_height?: true
    model_url?: true
    image_url?: true
    description?: true
    title?: true
    is_available?: true
    icon_url?: true
    _all?: true
  }

  export type ServicesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to aggregate.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned services
    **/
    _count?: true | ServicesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicesMaxAggregateInputType
  }

  export type GetServicesAggregateType<T extends ServicesAggregateArgs> = {
        [P in keyof T & keyof AggregateServices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServices[P]>
      : GetScalarType<T[P], AggregateServices[P]>
  }




  export type servicesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: servicesWhereInput
    orderBy?: servicesOrderByWithAggregationInput | servicesOrderByWithAggregationInput[]
    by: ServicesScalarFieldEnum[] | ServicesScalarFieldEnum
    having?: servicesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicesCountAggregateInputType | true
    _avg?: ServicesAvgAggregateInputType
    _sum?: ServicesSumAggregateInputType
    _min?: ServicesMinAggregateInputType
    _max?: ServicesMaxAggregateInputType
  }

  export type ServicesGroupByOutputType = {
    id: number
    service_name: string
    uv_url: string
    texture_aspect_width: number
    texture_aspect_height: number
    model_url: string
    image_url: string | null
    description: string
    title: string
    is_available: boolean
    icon_url: string | null
    _count: ServicesCountAggregateOutputType | null
    _avg: ServicesAvgAggregateOutputType | null
    _sum: ServicesSumAggregateOutputType | null
    _min: ServicesMinAggregateOutputType | null
    _max: ServicesMaxAggregateOutputType | null
  }

  type GetServicesGroupByPayload<T extends servicesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicesGroupByOutputType[P]>
            : GetScalarType<T[P], ServicesGroupByOutputType[P]>
        }
      >
    >


  export type servicesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_name?: boolean
    uv_url?: boolean
    texture_aspect_width?: boolean
    texture_aspect_height?: boolean
    model_url?: boolean
    image_url?: boolean
    description?: boolean
    title?: boolean
    is_available?: boolean
    icon_url?: boolean
  }, ExtArgs["result"]["services"]>

  export type servicesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_name?: boolean
    uv_url?: boolean
    texture_aspect_width?: boolean
    texture_aspect_height?: boolean
    model_url?: boolean
    image_url?: boolean
    description?: boolean
    title?: boolean
    is_available?: boolean
    icon_url?: boolean
  }, ExtArgs["result"]["services"]>

  export type servicesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    service_name?: boolean
    uv_url?: boolean
    texture_aspect_width?: boolean
    texture_aspect_height?: boolean
    model_url?: boolean
    image_url?: boolean
    description?: boolean
    title?: boolean
    is_available?: boolean
    icon_url?: boolean
  }, ExtArgs["result"]["services"]>

  export type servicesSelectScalar = {
    id?: boolean
    service_name?: boolean
    uv_url?: boolean
    texture_aspect_width?: boolean
    texture_aspect_height?: boolean
    model_url?: boolean
    image_url?: boolean
    description?: boolean
    title?: boolean
    is_available?: boolean
    icon_url?: boolean
  }

  export type servicesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "service_name" | "uv_url" | "texture_aspect_width" | "texture_aspect_height" | "model_url" | "image_url" | "description" | "title" | "is_available" | "icon_url", ExtArgs["result"]["services"]>

  export type $servicesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "services"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      service_name: string
      uv_url: string
      texture_aspect_width: number
      texture_aspect_height: number
      model_url: string
      image_url: string | null
      description: string
      title: string
      is_available: boolean
      icon_url: string | null
    }, ExtArgs["result"]["services"]>
    composites: {}
  }

  type servicesGetPayload<S extends boolean | null | undefined | servicesDefaultArgs> = $Result.GetResult<Prisma.$servicesPayload, S>

  type servicesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<servicesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicesCountAggregateInputType | true
    }

  export interface servicesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['services'], meta: { name: 'services' } }
    /**
     * Find zero or one Services that matches the filter.
     * @param {servicesFindUniqueArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends servicesFindUniqueArgs>(args: SelectSubset<T, servicesFindUniqueArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Services that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {servicesFindUniqueOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends servicesFindUniqueOrThrowArgs>(args: SelectSubset<T, servicesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends servicesFindFirstArgs>(args?: SelectSubset<T, servicesFindFirstArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Services that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindFirstOrThrowArgs} args - Arguments to find a Services
     * @example
     * // Get one Services
     * const services = await prisma.services.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends servicesFindFirstOrThrowArgs>(args?: SelectSubset<T, servicesFindFirstOrThrowArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.services.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.services.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicesWithIdOnly = await prisma.services.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends servicesFindManyArgs>(args?: SelectSubset<T, servicesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Services.
     * @param {servicesCreateArgs} args - Arguments to create a Services.
     * @example
     * // Create one Services
     * const Services = await prisma.services.create({
     *   data: {
     *     // ... data to create a Services
     *   }
     * })
     * 
     */
    create<T extends servicesCreateArgs>(args: SelectSubset<T, servicesCreateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {servicesCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends servicesCreateManyArgs>(args?: SelectSubset<T, servicesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {servicesCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const services = await prisma.services.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends servicesCreateManyAndReturnArgs>(args?: SelectSubset<T, servicesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Services.
     * @param {servicesDeleteArgs} args - Arguments to delete one Services.
     * @example
     * // Delete one Services
     * const Services = await prisma.services.delete({
     *   where: {
     *     // ... filter to delete one Services
     *   }
     * })
     * 
     */
    delete<T extends servicesDeleteArgs>(args: SelectSubset<T, servicesDeleteArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Services.
     * @param {servicesUpdateArgs} args - Arguments to update one Services.
     * @example
     * // Update one Services
     * const services = await prisma.services.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends servicesUpdateArgs>(args: SelectSubset<T, servicesUpdateArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {servicesDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.services.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends servicesDeleteManyArgs>(args?: SelectSubset<T, servicesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends servicesUpdateManyArgs>(args: SelectSubset<T, servicesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {servicesUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const services = await prisma.services.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const servicesWithIdOnly = await prisma.services.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends servicesUpdateManyAndReturnArgs>(args: SelectSubset<T, servicesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Services.
     * @param {servicesUpsertArgs} args - Arguments to update or create a Services.
     * @example
     * // Update or create a Services
     * const services = await prisma.services.upsert({
     *   create: {
     *     // ... data to create a Services
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Services we want to update
     *   }
     * })
     */
    upsert<T extends servicesUpsertArgs>(args: SelectSubset<T, servicesUpsertArgs<ExtArgs>>): Prisma__servicesClient<$Result.GetResult<Prisma.$servicesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.services.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends servicesCountArgs>(
      args?: Subset<T, servicesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicesAggregateArgs>(args: Subset<T, ServicesAggregateArgs>): Prisma.PrismaPromise<GetServicesAggregateType<T>>

    /**
     * Group by Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {servicesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends servicesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: servicesGroupByArgs['orderBy'] }
        : { orderBy?: servicesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, servicesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the services model
   */
  readonly fields: servicesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for services.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__servicesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the services model
   */
  interface servicesFieldRefs {
    readonly id: FieldRef<"services", 'Int'>
    readonly service_name: FieldRef<"services", 'String'>
    readonly uv_url: FieldRef<"services", 'String'>
    readonly texture_aspect_width: FieldRef<"services", 'Int'>
    readonly texture_aspect_height: FieldRef<"services", 'Int'>
    readonly model_url: FieldRef<"services", 'String'>
    readonly image_url: FieldRef<"services", 'String'>
    readonly description: FieldRef<"services", 'String'>
    readonly title: FieldRef<"services", 'String'>
    readonly is_available: FieldRef<"services", 'Boolean'>
    readonly icon_url: FieldRef<"services", 'String'>
  }
    

  // Custom InputTypes
  /**
   * services findUnique
   */
  export type servicesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findUniqueOrThrow
   */
  export type servicesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services findFirst
   */
  export type servicesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findFirstOrThrow
   */
  export type servicesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of services.
     */
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services findMany
   */
  export type servicesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter, which services to fetch.
     */
    where?: servicesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of services to fetch.
     */
    orderBy?: servicesOrderByWithRelationInput | servicesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing services.
     */
    cursor?: servicesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` services.
     */
    skip?: number
    distinct?: ServicesScalarFieldEnum | ServicesScalarFieldEnum[]
  }

  /**
   * services create
   */
  export type servicesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data needed to create a services.
     */
    data: XOR<servicesCreateInput, servicesUncheckedCreateInput>
  }

  /**
   * services createMany
   */
  export type servicesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * services createManyAndReturn
   */
  export type servicesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to create many services.
     */
    data: servicesCreateManyInput | servicesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * services update
   */
  export type servicesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data needed to update a services.
     */
    data: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
    /**
     * Choose, which services to update.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services updateMany
   */
  export type servicesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * services updateManyAndReturn
   */
  export type servicesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The data used to update services.
     */
    data: XOR<servicesUpdateManyMutationInput, servicesUncheckedUpdateManyInput>
    /**
     * Filter which services to update
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to update.
     */
    limit?: number
  }

  /**
   * services upsert
   */
  export type servicesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * The filter to search for the services to update in case it exists.
     */
    where: servicesWhereUniqueInput
    /**
     * In case the services found by the `where` argument doesn't exist, create a new services with this data.
     */
    create: XOR<servicesCreateInput, servicesUncheckedCreateInput>
    /**
     * In case the services was found with the provided `where` argument, update it with this data.
     */
    update: XOR<servicesUpdateInput, servicesUncheckedUpdateInput>
  }

  /**
   * services delete
   */
  export type servicesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
    /**
     * Filter which services to delete.
     */
    where: servicesWhereUniqueInput
  }

  /**
   * services deleteMany
   */
  export type servicesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which services to delete
     */
    where?: servicesWhereInput
    /**
     * Limit how many services to delete.
     */
    limit?: number
  }

  /**
   * services without action
   */
  export type servicesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the services
     */
    select?: servicesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the services
     */
    omit?: servicesOmit<ExtArgs> | null
  }


  /**
   * Model stock_categories
   */

  export type AggregateStock_categories = {
    _count: Stock_categoriesCountAggregateOutputType | null
    _avg: Stock_categoriesAvgAggregateOutputType | null
    _sum: Stock_categoriesSumAggregateOutputType | null
    _min: Stock_categoriesMinAggregateOutputType | null
    _max: Stock_categoriesMaxAggregateOutputType | null
  }

  export type Stock_categoriesAvgAggregateOutputType = {
    id: number | null
  }

  export type Stock_categoriesSumAggregateOutputType = {
    id: number | null
  }

  export type Stock_categoriesMinAggregateOutputType = {
    id: number | null
    categoryName: string | null
    description: string | null
  }

  export type Stock_categoriesMaxAggregateOutputType = {
    id: number | null
    categoryName: string | null
    description: string | null
  }

  export type Stock_categoriesCountAggregateOutputType = {
    id: number
    categoryName: number
    description: number
    _all: number
  }


  export type Stock_categoriesAvgAggregateInputType = {
    id?: true
  }

  export type Stock_categoriesSumAggregateInputType = {
    id?: true
  }

  export type Stock_categoriesMinAggregateInputType = {
    id?: true
    categoryName?: true
    description?: true
  }

  export type Stock_categoriesMaxAggregateInputType = {
    id?: true
    categoryName?: true
    description?: true
  }

  export type Stock_categoriesCountAggregateInputType = {
    id?: true
    categoryName?: true
    description?: true
    _all?: true
  }

  export type Stock_categoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_categories to aggregate.
     */
    where?: stock_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_categories to fetch.
     */
    orderBy?: stock_categoriesOrderByWithRelationInput | stock_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stock_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stock_categories
    **/
    _count?: true | Stock_categoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stock_categoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stock_categoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stock_categoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stock_categoriesMaxAggregateInputType
  }

  export type GetStock_categoriesAggregateType<T extends Stock_categoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateStock_categories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock_categories[P]>
      : GetScalarType<T[P], AggregateStock_categories[P]>
  }




  export type stock_categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_categoriesWhereInput
    orderBy?: stock_categoriesOrderByWithAggregationInput | stock_categoriesOrderByWithAggregationInput[]
    by: Stock_categoriesScalarFieldEnum[] | Stock_categoriesScalarFieldEnum
    having?: stock_categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stock_categoriesCountAggregateInputType | true
    _avg?: Stock_categoriesAvgAggregateInputType
    _sum?: Stock_categoriesSumAggregateInputType
    _min?: Stock_categoriesMinAggregateInputType
    _max?: Stock_categoriesMaxAggregateInputType
  }

  export type Stock_categoriesGroupByOutputType = {
    id: number
    categoryName: string
    description: string | null
    _count: Stock_categoriesCountAggregateOutputType | null
    _avg: Stock_categoriesAvgAggregateOutputType | null
    _sum: Stock_categoriesSumAggregateOutputType | null
    _min: Stock_categoriesMinAggregateOutputType | null
    _max: Stock_categoriesMaxAggregateOutputType | null
  }

  type GetStock_categoriesGroupByPayload<T extends stock_categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stock_categoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stock_categoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stock_categoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Stock_categoriesGroupByOutputType[P]>
        }
      >
    >


  export type stock_categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    description?: boolean
    stock_images?: boolean | stock_categories$stock_imagesArgs<ExtArgs>
    _count?: boolean | Stock_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_categories"]>

  export type stock_categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    description?: boolean
  }, ExtArgs["result"]["stock_categories"]>

  export type stock_categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    categoryName?: boolean
    description?: boolean
  }, ExtArgs["result"]["stock_categories"]>

  export type stock_categoriesSelectScalar = {
    id?: boolean
    categoryName?: boolean
    description?: boolean
  }

  export type stock_categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "categoryName" | "description", ExtArgs["result"]["stock_categories"]>
  export type stock_categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_images?: boolean | stock_categories$stock_imagesArgs<ExtArgs>
    _count?: boolean | Stock_categoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type stock_categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type stock_categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $stock_categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock_categories"
    objects: {
      stock_images: Prisma.$stock_imagesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      categoryName: string
      description: string | null
    }, ExtArgs["result"]["stock_categories"]>
    composites: {}
  }

  type stock_categoriesGetPayload<S extends boolean | null | undefined | stock_categoriesDefaultArgs> = $Result.GetResult<Prisma.$stock_categoriesPayload, S>

  type stock_categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stock_categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stock_categoriesCountAggregateInputType | true
    }

  export interface stock_categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock_categories'], meta: { name: 'stock_categories' } }
    /**
     * Find zero or one Stock_categories that matches the filter.
     * @param {stock_categoriesFindUniqueArgs} args - Arguments to find a Stock_categories
     * @example
     * // Get one Stock_categories
     * const stock_categories = await prisma.stock_categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stock_categoriesFindUniqueArgs>(args: SelectSubset<T, stock_categoriesFindUniqueArgs<ExtArgs>>): Prisma__stock_categoriesClient<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock_categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stock_categoriesFindUniqueOrThrowArgs} args - Arguments to find a Stock_categories
     * @example
     * // Get one Stock_categories
     * const stock_categories = await prisma.stock_categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stock_categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, stock_categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stock_categoriesClient<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_categoriesFindFirstArgs} args - Arguments to find a Stock_categories
     * @example
     * // Get one Stock_categories
     * const stock_categories = await prisma.stock_categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stock_categoriesFindFirstArgs>(args?: SelectSubset<T, stock_categoriesFindFirstArgs<ExtArgs>>): Prisma__stock_categoriesClient<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_categoriesFindFirstOrThrowArgs} args - Arguments to find a Stock_categories
     * @example
     * // Get one Stock_categories
     * const stock_categories = await prisma.stock_categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stock_categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, stock_categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__stock_categoriesClient<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stock_categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stock_categories
     * const stock_categories = await prisma.stock_categories.findMany()
     * 
     * // Get first 10 Stock_categories
     * const stock_categories = await prisma.stock_categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stock_categoriesWithIdOnly = await prisma.stock_categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stock_categoriesFindManyArgs>(args?: SelectSubset<T, stock_categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock_categories.
     * @param {stock_categoriesCreateArgs} args - Arguments to create a Stock_categories.
     * @example
     * // Create one Stock_categories
     * const Stock_categories = await prisma.stock_categories.create({
     *   data: {
     *     // ... data to create a Stock_categories
     *   }
     * })
     * 
     */
    create<T extends stock_categoriesCreateArgs>(args: SelectSubset<T, stock_categoriesCreateArgs<ExtArgs>>): Prisma__stock_categoriesClient<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stock_categories.
     * @param {stock_categoriesCreateManyArgs} args - Arguments to create many Stock_categories.
     * @example
     * // Create many Stock_categories
     * const stock_categories = await prisma.stock_categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stock_categoriesCreateManyArgs>(args?: SelectSubset<T, stock_categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stock_categories and returns the data saved in the database.
     * @param {stock_categoriesCreateManyAndReturnArgs} args - Arguments to create many Stock_categories.
     * @example
     * // Create many Stock_categories
     * const stock_categories = await prisma.stock_categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stock_categories and only return the `id`
     * const stock_categoriesWithIdOnly = await prisma.stock_categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stock_categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, stock_categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock_categories.
     * @param {stock_categoriesDeleteArgs} args - Arguments to delete one Stock_categories.
     * @example
     * // Delete one Stock_categories
     * const Stock_categories = await prisma.stock_categories.delete({
     *   where: {
     *     // ... filter to delete one Stock_categories
     *   }
     * })
     * 
     */
    delete<T extends stock_categoriesDeleteArgs>(args: SelectSubset<T, stock_categoriesDeleteArgs<ExtArgs>>): Prisma__stock_categoriesClient<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock_categories.
     * @param {stock_categoriesUpdateArgs} args - Arguments to update one Stock_categories.
     * @example
     * // Update one Stock_categories
     * const stock_categories = await prisma.stock_categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stock_categoriesUpdateArgs>(args: SelectSubset<T, stock_categoriesUpdateArgs<ExtArgs>>): Prisma__stock_categoriesClient<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stock_categories.
     * @param {stock_categoriesDeleteManyArgs} args - Arguments to filter Stock_categories to delete.
     * @example
     * // Delete a few Stock_categories
     * const { count } = await prisma.stock_categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stock_categoriesDeleteManyArgs>(args?: SelectSubset<T, stock_categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stock_categories
     * const stock_categories = await prisma.stock_categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stock_categoriesUpdateManyArgs>(args: SelectSubset<T, stock_categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_categories and returns the data updated in the database.
     * @param {stock_categoriesUpdateManyAndReturnArgs} args - Arguments to update many Stock_categories.
     * @example
     * // Update many Stock_categories
     * const stock_categories = await prisma.stock_categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stock_categories and only return the `id`
     * const stock_categoriesWithIdOnly = await prisma.stock_categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stock_categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, stock_categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock_categories.
     * @param {stock_categoriesUpsertArgs} args - Arguments to update or create a Stock_categories.
     * @example
     * // Update or create a Stock_categories
     * const stock_categories = await prisma.stock_categories.upsert({
     *   create: {
     *     // ... data to create a Stock_categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock_categories we want to update
     *   }
     * })
     */
    upsert<T extends stock_categoriesUpsertArgs>(args: SelectSubset<T, stock_categoriesUpsertArgs<ExtArgs>>): Prisma__stock_categoriesClient<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stock_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_categoriesCountArgs} args - Arguments to filter Stock_categories to count.
     * @example
     * // Count the number of Stock_categories
     * const count = await prisma.stock_categories.count({
     *   where: {
     *     // ... the filter for the Stock_categories we want to count
     *   }
     * })
    **/
    count<T extends stock_categoriesCountArgs>(
      args?: Subset<T, stock_categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stock_categoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_categoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stock_categoriesAggregateArgs>(args: Subset<T, Stock_categoriesAggregateArgs>): Prisma.PrismaPromise<GetStock_categoriesAggregateType<T>>

    /**
     * Group by Stock_categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stock_categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stock_categoriesGroupByArgs['orderBy'] }
        : { orderBy?: stock_categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stock_categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_categoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock_categories model
   */
  readonly fields: stock_categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock_categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stock_categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock_images<T extends stock_categories$stock_imagesArgs<ExtArgs> = {}>(args?: Subset<T, stock_categories$stock_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stock_categories model
   */
  interface stock_categoriesFieldRefs {
    readonly id: FieldRef<"stock_categories", 'Int'>
    readonly categoryName: FieldRef<"stock_categories", 'String'>
    readonly description: FieldRef<"stock_categories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * stock_categories findUnique
   */
  export type stock_categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which stock_categories to fetch.
     */
    where: stock_categoriesWhereUniqueInput
  }

  /**
   * stock_categories findUniqueOrThrow
   */
  export type stock_categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which stock_categories to fetch.
     */
    where: stock_categoriesWhereUniqueInput
  }

  /**
   * stock_categories findFirst
   */
  export type stock_categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which stock_categories to fetch.
     */
    where?: stock_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_categories to fetch.
     */
    orderBy?: stock_categoriesOrderByWithRelationInput | stock_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_categories.
     */
    cursor?: stock_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_categories.
     */
    distinct?: Stock_categoriesScalarFieldEnum | Stock_categoriesScalarFieldEnum[]
  }

  /**
   * stock_categories findFirstOrThrow
   */
  export type stock_categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which stock_categories to fetch.
     */
    where?: stock_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_categories to fetch.
     */
    orderBy?: stock_categoriesOrderByWithRelationInput | stock_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_categories.
     */
    cursor?: stock_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_categories.
     */
    distinct?: Stock_categoriesScalarFieldEnum | Stock_categoriesScalarFieldEnum[]
  }

  /**
   * stock_categories findMany
   */
  export type stock_categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_categoriesInclude<ExtArgs> | null
    /**
     * Filter, which stock_categories to fetch.
     */
    where?: stock_categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_categories to fetch.
     */
    orderBy?: stock_categoriesOrderByWithRelationInput | stock_categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stock_categories.
     */
    cursor?: stock_categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_categories.
     */
    skip?: number
    distinct?: Stock_categoriesScalarFieldEnum | Stock_categoriesScalarFieldEnum[]
  }

  /**
   * stock_categories create
   */
  export type stock_categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a stock_categories.
     */
    data: XOR<stock_categoriesCreateInput, stock_categoriesUncheckedCreateInput>
  }

  /**
   * stock_categories createMany
   */
  export type stock_categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stock_categories.
     */
    data: stock_categoriesCreateManyInput | stock_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_categories createManyAndReturn
   */
  export type stock_categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many stock_categories.
     */
    data: stock_categoriesCreateManyInput | stock_categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_categories update
   */
  export type stock_categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a stock_categories.
     */
    data: XOR<stock_categoriesUpdateInput, stock_categoriesUncheckedUpdateInput>
    /**
     * Choose, which stock_categories to update.
     */
    where: stock_categoriesWhereUniqueInput
  }

  /**
   * stock_categories updateMany
   */
  export type stock_categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stock_categories.
     */
    data: XOR<stock_categoriesUpdateManyMutationInput, stock_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which stock_categories to update
     */
    where?: stock_categoriesWhereInput
    /**
     * Limit how many stock_categories to update.
     */
    limit?: number
  }

  /**
   * stock_categories updateManyAndReturn
   */
  export type stock_categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * The data used to update stock_categories.
     */
    data: XOR<stock_categoriesUpdateManyMutationInput, stock_categoriesUncheckedUpdateManyInput>
    /**
     * Filter which stock_categories to update
     */
    where?: stock_categoriesWhereInput
    /**
     * Limit how many stock_categories to update.
     */
    limit?: number
  }

  /**
   * stock_categories upsert
   */
  export type stock_categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the stock_categories to update in case it exists.
     */
    where: stock_categoriesWhereUniqueInput
    /**
     * In case the stock_categories found by the `where` argument doesn't exist, create a new stock_categories with this data.
     */
    create: XOR<stock_categoriesCreateInput, stock_categoriesUncheckedCreateInput>
    /**
     * In case the stock_categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stock_categoriesUpdateInput, stock_categoriesUncheckedUpdateInput>
  }

  /**
   * stock_categories delete
   */
  export type stock_categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_categoriesInclude<ExtArgs> | null
    /**
     * Filter which stock_categories to delete.
     */
    where: stock_categoriesWhereUniqueInput
  }

  /**
   * stock_categories deleteMany
   */
  export type stock_categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_categories to delete
     */
    where?: stock_categoriesWhereInput
    /**
     * Limit how many stock_categories to delete.
     */
    limit?: number
  }

  /**
   * stock_categories.stock_images
   */
  export type stock_categories$stock_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
    where?: stock_imagesWhereInput
    orderBy?: stock_imagesOrderByWithRelationInput | stock_imagesOrderByWithRelationInput[]
    cursor?: stock_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Stock_imagesScalarFieldEnum | Stock_imagesScalarFieldEnum[]
  }

  /**
   * stock_categories without action
   */
  export type stock_categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_categories
     */
    select?: stock_categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_categories
     */
    omit?: stock_categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_categoriesInclude<ExtArgs> | null
  }


  /**
   * Model stock_images
   */

  export type AggregateStock_images = {
    _count: Stock_imagesCountAggregateOutputType | null
    _avg: Stock_imagesAvgAggregateOutputType | null
    _sum: Stock_imagesSumAggregateOutputType | null
    _min: Stock_imagesMinAggregateOutputType | null
    _max: Stock_imagesMaxAggregateOutputType | null
  }

  export type Stock_imagesAvgAggregateOutputType = {
    id: number | null
    category: number | null
    price: Decimal | null
  }

  export type Stock_imagesSumAggregateOutputType = {
    id: number | null
    category: number | null
    price: Decimal | null
  }

  export type Stock_imagesMinAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    compressedImageUrl: string | null
    category: number | null
    price: Decimal | null
    backgroundColor: string | null
    createdAt: Date | null
  }

  export type Stock_imagesMaxAggregateOutputType = {
    id: number | null
    imageUrl: string | null
    compressedImageUrl: string | null
    category: number | null
    price: Decimal | null
    backgroundColor: string | null
    createdAt: Date | null
  }

  export type Stock_imagesCountAggregateOutputType = {
    id: number
    imageUrl: number
    compressedImageUrl: number
    category: number
    price: number
    backgroundColor: number
    createdAt: number
    _all: number
  }


  export type Stock_imagesAvgAggregateInputType = {
    id?: true
    category?: true
    price?: true
  }

  export type Stock_imagesSumAggregateInputType = {
    id?: true
    category?: true
    price?: true
  }

  export type Stock_imagesMinAggregateInputType = {
    id?: true
    imageUrl?: true
    compressedImageUrl?: true
    category?: true
    price?: true
    backgroundColor?: true
    createdAt?: true
  }

  export type Stock_imagesMaxAggregateInputType = {
    id?: true
    imageUrl?: true
    compressedImageUrl?: true
    category?: true
    price?: true
    backgroundColor?: true
    createdAt?: true
  }

  export type Stock_imagesCountAggregateInputType = {
    id?: true
    imageUrl?: true
    compressedImageUrl?: true
    category?: true
    price?: true
    backgroundColor?: true
    createdAt?: true
    _all?: true
  }

  export type Stock_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_images to aggregate.
     */
    where?: stock_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_images to fetch.
     */
    orderBy?: stock_imagesOrderByWithRelationInput | stock_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: stock_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned stock_images
    **/
    _count?: true | Stock_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Stock_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Stock_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Stock_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Stock_imagesMaxAggregateInputType
  }

  export type GetStock_imagesAggregateType<T extends Stock_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateStock_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStock_images[P]>
      : GetScalarType<T[P], AggregateStock_images[P]>
  }




  export type stock_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: stock_imagesWhereInput
    orderBy?: stock_imagesOrderByWithAggregationInput | stock_imagesOrderByWithAggregationInput[]
    by: Stock_imagesScalarFieldEnum[] | Stock_imagesScalarFieldEnum
    having?: stock_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Stock_imagesCountAggregateInputType | true
    _avg?: Stock_imagesAvgAggregateInputType
    _sum?: Stock_imagesSumAggregateInputType
    _min?: Stock_imagesMinAggregateInputType
    _max?: Stock_imagesMaxAggregateInputType
  }

  export type Stock_imagesGroupByOutputType = {
    id: number
    imageUrl: string
    compressedImageUrl: string
    category: number
    price: Decimal
    backgroundColor: string
    createdAt: Date
    _count: Stock_imagesCountAggregateOutputType | null
    _avg: Stock_imagesAvgAggregateOutputType | null
    _sum: Stock_imagesSumAggregateOutputType | null
    _min: Stock_imagesMinAggregateOutputType | null
    _max: Stock_imagesMaxAggregateOutputType | null
  }

  type GetStock_imagesGroupByPayload<T extends stock_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Stock_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Stock_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Stock_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Stock_imagesGroupByOutputType[P]>
        }
      >
    >


  export type stock_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    compressedImageUrl?: boolean
    category?: boolean
    price?: boolean
    backgroundColor?: boolean
    createdAt?: boolean
    stock_categories?: boolean | stock_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_images"]>

  export type stock_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    compressedImageUrl?: boolean
    category?: boolean
    price?: boolean
    backgroundColor?: boolean
    createdAt?: boolean
    stock_categories?: boolean | stock_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_images"]>

  export type stock_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    imageUrl?: boolean
    compressedImageUrl?: boolean
    category?: boolean
    price?: boolean
    backgroundColor?: boolean
    createdAt?: boolean
    stock_categories?: boolean | stock_categoriesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stock_images"]>

  export type stock_imagesSelectScalar = {
    id?: boolean
    imageUrl?: boolean
    compressedImageUrl?: boolean
    category?: boolean
    price?: boolean
    backgroundColor?: boolean
    createdAt?: boolean
  }

  export type stock_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "imageUrl" | "compressedImageUrl" | "category" | "price" | "backgroundColor" | "createdAt", ExtArgs["result"]["stock_images"]>
  export type stock_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_categories?: boolean | stock_categoriesDefaultArgs<ExtArgs>
  }
  export type stock_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_categories?: boolean | stock_categoriesDefaultArgs<ExtArgs>
  }
  export type stock_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stock_categories?: boolean | stock_categoriesDefaultArgs<ExtArgs>
  }

  export type $stock_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "stock_images"
    objects: {
      stock_categories: Prisma.$stock_categoriesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      imageUrl: string
      compressedImageUrl: string
      category: number
      price: Prisma.Decimal
      backgroundColor: string
      createdAt: Date
    }, ExtArgs["result"]["stock_images"]>
    composites: {}
  }

  type stock_imagesGetPayload<S extends boolean | null | undefined | stock_imagesDefaultArgs> = $Result.GetResult<Prisma.$stock_imagesPayload, S>

  type stock_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<stock_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Stock_imagesCountAggregateInputType | true
    }

  export interface stock_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['stock_images'], meta: { name: 'stock_images' } }
    /**
     * Find zero or one Stock_images that matches the filter.
     * @param {stock_imagesFindUniqueArgs} args - Arguments to find a Stock_images
     * @example
     * // Get one Stock_images
     * const stock_images = await prisma.stock_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends stock_imagesFindUniqueArgs>(args: SelectSubset<T, stock_imagesFindUniqueArgs<ExtArgs>>): Prisma__stock_imagesClient<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Stock_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {stock_imagesFindUniqueOrThrowArgs} args - Arguments to find a Stock_images
     * @example
     * // Get one Stock_images
     * const stock_images = await prisma.stock_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends stock_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, stock_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__stock_imagesClient<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_imagesFindFirstArgs} args - Arguments to find a Stock_images
     * @example
     * // Get one Stock_images
     * const stock_images = await prisma.stock_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends stock_imagesFindFirstArgs>(args?: SelectSubset<T, stock_imagesFindFirstArgs<ExtArgs>>): Prisma__stock_imagesClient<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Stock_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_imagesFindFirstOrThrowArgs} args - Arguments to find a Stock_images
     * @example
     * // Get one Stock_images
     * const stock_images = await prisma.stock_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends stock_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, stock_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__stock_imagesClient<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Stock_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Stock_images
     * const stock_images = await prisma.stock_images.findMany()
     * 
     * // Get first 10 Stock_images
     * const stock_images = await prisma.stock_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stock_imagesWithIdOnly = await prisma.stock_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends stock_imagesFindManyArgs>(args?: SelectSubset<T, stock_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Stock_images.
     * @param {stock_imagesCreateArgs} args - Arguments to create a Stock_images.
     * @example
     * // Create one Stock_images
     * const Stock_images = await prisma.stock_images.create({
     *   data: {
     *     // ... data to create a Stock_images
     *   }
     * })
     * 
     */
    create<T extends stock_imagesCreateArgs>(args: SelectSubset<T, stock_imagesCreateArgs<ExtArgs>>): Prisma__stock_imagesClient<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Stock_images.
     * @param {stock_imagesCreateManyArgs} args - Arguments to create many Stock_images.
     * @example
     * // Create many Stock_images
     * const stock_images = await prisma.stock_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends stock_imagesCreateManyArgs>(args?: SelectSubset<T, stock_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Stock_images and returns the data saved in the database.
     * @param {stock_imagesCreateManyAndReturnArgs} args - Arguments to create many Stock_images.
     * @example
     * // Create many Stock_images
     * const stock_images = await prisma.stock_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Stock_images and only return the `id`
     * const stock_imagesWithIdOnly = await prisma.stock_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends stock_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, stock_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Stock_images.
     * @param {stock_imagesDeleteArgs} args - Arguments to delete one Stock_images.
     * @example
     * // Delete one Stock_images
     * const Stock_images = await prisma.stock_images.delete({
     *   where: {
     *     // ... filter to delete one Stock_images
     *   }
     * })
     * 
     */
    delete<T extends stock_imagesDeleteArgs>(args: SelectSubset<T, stock_imagesDeleteArgs<ExtArgs>>): Prisma__stock_imagesClient<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Stock_images.
     * @param {stock_imagesUpdateArgs} args - Arguments to update one Stock_images.
     * @example
     * // Update one Stock_images
     * const stock_images = await prisma.stock_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends stock_imagesUpdateArgs>(args: SelectSubset<T, stock_imagesUpdateArgs<ExtArgs>>): Prisma__stock_imagesClient<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Stock_images.
     * @param {stock_imagesDeleteManyArgs} args - Arguments to filter Stock_images to delete.
     * @example
     * // Delete a few Stock_images
     * const { count } = await prisma.stock_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends stock_imagesDeleteManyArgs>(args?: SelectSubset<T, stock_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Stock_images
     * const stock_images = await prisma.stock_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends stock_imagesUpdateManyArgs>(args: SelectSubset<T, stock_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Stock_images and returns the data updated in the database.
     * @param {stock_imagesUpdateManyAndReturnArgs} args - Arguments to update many Stock_images.
     * @example
     * // Update many Stock_images
     * const stock_images = await prisma.stock_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Stock_images and only return the `id`
     * const stock_imagesWithIdOnly = await prisma.stock_images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends stock_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, stock_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Stock_images.
     * @param {stock_imagesUpsertArgs} args - Arguments to update or create a Stock_images.
     * @example
     * // Update or create a Stock_images
     * const stock_images = await prisma.stock_images.upsert({
     *   create: {
     *     // ... data to create a Stock_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Stock_images we want to update
     *   }
     * })
     */
    upsert<T extends stock_imagesUpsertArgs>(args: SelectSubset<T, stock_imagesUpsertArgs<ExtArgs>>): Prisma__stock_imagesClient<$Result.GetResult<Prisma.$stock_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Stock_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_imagesCountArgs} args - Arguments to filter Stock_images to count.
     * @example
     * // Count the number of Stock_images
     * const count = await prisma.stock_images.count({
     *   where: {
     *     // ... the filter for the Stock_images we want to count
     *   }
     * })
    **/
    count<T extends stock_imagesCountArgs>(
      args?: Subset<T, stock_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Stock_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Stock_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Stock_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Stock_imagesAggregateArgs>(args: Subset<T, Stock_imagesAggregateArgs>): Prisma.PrismaPromise<GetStock_imagesAggregateType<T>>

    /**
     * Group by Stock_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {stock_imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends stock_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: stock_imagesGroupByArgs['orderBy'] }
        : { orderBy?: stock_imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, stock_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStock_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the stock_images model
   */
  readonly fields: stock_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for stock_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__stock_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stock_categories<T extends stock_categoriesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, stock_categoriesDefaultArgs<ExtArgs>>): Prisma__stock_categoriesClient<$Result.GetResult<Prisma.$stock_categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the stock_images model
   */
  interface stock_imagesFieldRefs {
    readonly id: FieldRef<"stock_images", 'Int'>
    readonly imageUrl: FieldRef<"stock_images", 'String'>
    readonly compressedImageUrl: FieldRef<"stock_images", 'String'>
    readonly category: FieldRef<"stock_images", 'Int'>
    readonly price: FieldRef<"stock_images", 'Decimal'>
    readonly backgroundColor: FieldRef<"stock_images", 'String'>
    readonly createdAt: FieldRef<"stock_images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * stock_images findUnique
   */
  export type stock_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
    /**
     * Filter, which stock_images to fetch.
     */
    where: stock_imagesWhereUniqueInput
  }

  /**
   * stock_images findUniqueOrThrow
   */
  export type stock_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
    /**
     * Filter, which stock_images to fetch.
     */
    where: stock_imagesWhereUniqueInput
  }

  /**
   * stock_images findFirst
   */
  export type stock_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
    /**
     * Filter, which stock_images to fetch.
     */
    where?: stock_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_images to fetch.
     */
    orderBy?: stock_imagesOrderByWithRelationInput | stock_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_images.
     */
    cursor?: stock_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_images.
     */
    distinct?: Stock_imagesScalarFieldEnum | Stock_imagesScalarFieldEnum[]
  }

  /**
   * stock_images findFirstOrThrow
   */
  export type stock_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
    /**
     * Filter, which stock_images to fetch.
     */
    where?: stock_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_images to fetch.
     */
    orderBy?: stock_imagesOrderByWithRelationInput | stock_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for stock_images.
     */
    cursor?: stock_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of stock_images.
     */
    distinct?: Stock_imagesScalarFieldEnum | Stock_imagesScalarFieldEnum[]
  }

  /**
   * stock_images findMany
   */
  export type stock_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
    /**
     * Filter, which stock_images to fetch.
     */
    where?: stock_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of stock_images to fetch.
     */
    orderBy?: stock_imagesOrderByWithRelationInput | stock_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing stock_images.
     */
    cursor?: stock_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` stock_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` stock_images.
     */
    skip?: number
    distinct?: Stock_imagesScalarFieldEnum | Stock_imagesScalarFieldEnum[]
  }

  /**
   * stock_images create
   */
  export type stock_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a stock_images.
     */
    data: XOR<stock_imagesCreateInput, stock_imagesUncheckedCreateInput>
  }

  /**
   * stock_images createMany
   */
  export type stock_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many stock_images.
     */
    data: stock_imagesCreateManyInput | stock_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * stock_images createManyAndReturn
   */
  export type stock_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many stock_images.
     */
    data: stock_imagesCreateManyInput | stock_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * stock_images update
   */
  export type stock_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a stock_images.
     */
    data: XOR<stock_imagesUpdateInput, stock_imagesUncheckedUpdateInput>
    /**
     * Choose, which stock_images to update.
     */
    where: stock_imagesWhereUniqueInput
  }

  /**
   * stock_images updateMany
   */
  export type stock_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update stock_images.
     */
    data: XOR<stock_imagesUpdateManyMutationInput, stock_imagesUncheckedUpdateManyInput>
    /**
     * Filter which stock_images to update
     */
    where?: stock_imagesWhereInput
    /**
     * Limit how many stock_images to update.
     */
    limit?: number
  }

  /**
   * stock_images updateManyAndReturn
   */
  export type stock_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * The data used to update stock_images.
     */
    data: XOR<stock_imagesUpdateManyMutationInput, stock_imagesUncheckedUpdateManyInput>
    /**
     * Filter which stock_images to update
     */
    where?: stock_imagesWhereInput
    /**
     * Limit how many stock_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * stock_images upsert
   */
  export type stock_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the stock_images to update in case it exists.
     */
    where: stock_imagesWhereUniqueInput
    /**
     * In case the stock_images found by the `where` argument doesn't exist, create a new stock_images with this data.
     */
    create: XOR<stock_imagesCreateInput, stock_imagesUncheckedCreateInput>
    /**
     * In case the stock_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<stock_imagesUpdateInput, stock_imagesUncheckedUpdateInput>
  }

  /**
   * stock_images delete
   */
  export type stock_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
    /**
     * Filter which stock_images to delete.
     */
    where: stock_imagesWhereUniqueInput
  }

  /**
   * stock_images deleteMany
   */
  export type stock_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which stock_images to delete
     */
    where?: stock_imagesWhereInput
    /**
     * Limit how many stock_images to delete.
     */
    limit?: number
  }

  /**
   * stock_images without action
   */
  export type stock_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the stock_images
     */
    select?: stock_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the stock_images
     */
    omit?: stock_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: stock_imagesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ServicesScalarFieldEnum: {
    id: 'id',
    service_name: 'service_name',
    uv_url: 'uv_url',
    texture_aspect_width: 'texture_aspect_width',
    texture_aspect_height: 'texture_aspect_height',
    model_url: 'model_url',
    image_url: 'image_url',
    description: 'description',
    title: 'title',
    is_available: 'is_available',
    icon_url: 'icon_url'
  };

  export type ServicesScalarFieldEnum = (typeof ServicesScalarFieldEnum)[keyof typeof ServicesScalarFieldEnum]


  export const Stock_categoriesScalarFieldEnum: {
    id: 'id',
    categoryName: 'categoryName',
    description: 'description'
  };

  export type Stock_categoriesScalarFieldEnum = (typeof Stock_categoriesScalarFieldEnum)[keyof typeof Stock_categoriesScalarFieldEnum]


  export const Stock_imagesScalarFieldEnum: {
    id: 'id',
    imageUrl: 'imageUrl',
    compressedImageUrl: 'compressedImageUrl',
    category: 'category',
    price: 'price',
    backgroundColor: 'backgroundColor',
    createdAt: 'createdAt'
  };

  export type Stock_imagesScalarFieldEnum = (typeof Stock_imagesScalarFieldEnum)[keyof typeof Stock_imagesScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type servicesWhereInput = {
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    id?: IntFilter<"services"> | number
    service_name?: StringFilter<"services"> | string
    uv_url?: StringFilter<"services"> | string
    texture_aspect_width?: IntFilter<"services"> | number
    texture_aspect_height?: IntFilter<"services"> | number
    model_url?: StringFilter<"services"> | string
    image_url?: StringNullableFilter<"services"> | string | null
    description?: StringFilter<"services"> | string
    title?: StringFilter<"services"> | string
    is_available?: BoolFilter<"services"> | boolean
    icon_url?: StringNullableFilter<"services"> | string | null
  }

  export type servicesOrderByWithRelationInput = {
    id?: SortOrder
    service_name?: SortOrder
    uv_url?: SortOrder
    texture_aspect_width?: SortOrder
    texture_aspect_height?: SortOrder
    model_url?: SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrder
    title?: SortOrder
    is_available?: SortOrder
    icon_url?: SortOrderInput | SortOrder
  }

  export type servicesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: servicesWhereInput | servicesWhereInput[]
    OR?: servicesWhereInput[]
    NOT?: servicesWhereInput | servicesWhereInput[]
    service_name?: StringFilter<"services"> | string
    uv_url?: StringFilter<"services"> | string
    texture_aspect_width?: IntFilter<"services"> | number
    texture_aspect_height?: IntFilter<"services"> | number
    model_url?: StringFilter<"services"> | string
    image_url?: StringNullableFilter<"services"> | string | null
    description?: StringFilter<"services"> | string
    title?: StringFilter<"services"> | string
    is_available?: BoolFilter<"services"> | boolean
    icon_url?: StringNullableFilter<"services"> | string | null
  }, "id">

  export type servicesOrderByWithAggregationInput = {
    id?: SortOrder
    service_name?: SortOrder
    uv_url?: SortOrder
    texture_aspect_width?: SortOrder
    texture_aspect_height?: SortOrder
    model_url?: SortOrder
    image_url?: SortOrderInput | SortOrder
    description?: SortOrder
    title?: SortOrder
    is_available?: SortOrder
    icon_url?: SortOrderInput | SortOrder
    _count?: servicesCountOrderByAggregateInput
    _avg?: servicesAvgOrderByAggregateInput
    _max?: servicesMaxOrderByAggregateInput
    _min?: servicesMinOrderByAggregateInput
    _sum?: servicesSumOrderByAggregateInput
  }

  export type servicesScalarWhereWithAggregatesInput = {
    AND?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    OR?: servicesScalarWhereWithAggregatesInput[]
    NOT?: servicesScalarWhereWithAggregatesInput | servicesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"services"> | number
    service_name?: StringWithAggregatesFilter<"services"> | string
    uv_url?: StringWithAggregatesFilter<"services"> | string
    texture_aspect_width?: IntWithAggregatesFilter<"services"> | number
    texture_aspect_height?: IntWithAggregatesFilter<"services"> | number
    model_url?: StringWithAggregatesFilter<"services"> | string
    image_url?: StringNullableWithAggregatesFilter<"services"> | string | null
    description?: StringWithAggregatesFilter<"services"> | string
    title?: StringWithAggregatesFilter<"services"> | string
    is_available?: BoolWithAggregatesFilter<"services"> | boolean
    icon_url?: StringNullableWithAggregatesFilter<"services"> | string | null
  }

  export type stock_categoriesWhereInput = {
    AND?: stock_categoriesWhereInput | stock_categoriesWhereInput[]
    OR?: stock_categoriesWhereInput[]
    NOT?: stock_categoriesWhereInput | stock_categoriesWhereInput[]
    id?: IntFilter<"stock_categories"> | number
    categoryName?: StringFilter<"stock_categories"> | string
    description?: StringNullableFilter<"stock_categories"> | string | null
    stock_images?: Stock_imagesListRelationFilter
  }

  export type stock_categoriesOrderByWithRelationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    description?: SortOrderInput | SortOrder
    stock_images?: stock_imagesOrderByRelationAggregateInput
  }

  export type stock_categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stock_categoriesWhereInput | stock_categoriesWhereInput[]
    OR?: stock_categoriesWhereInput[]
    NOT?: stock_categoriesWhereInput | stock_categoriesWhereInput[]
    categoryName?: StringFilter<"stock_categories"> | string
    description?: StringNullableFilter<"stock_categories"> | string | null
    stock_images?: Stock_imagesListRelationFilter
  }, "id">

  export type stock_categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    categoryName?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: stock_categoriesCountOrderByAggregateInput
    _avg?: stock_categoriesAvgOrderByAggregateInput
    _max?: stock_categoriesMaxOrderByAggregateInput
    _min?: stock_categoriesMinOrderByAggregateInput
    _sum?: stock_categoriesSumOrderByAggregateInput
  }

  export type stock_categoriesScalarWhereWithAggregatesInput = {
    AND?: stock_categoriesScalarWhereWithAggregatesInput | stock_categoriesScalarWhereWithAggregatesInput[]
    OR?: stock_categoriesScalarWhereWithAggregatesInput[]
    NOT?: stock_categoriesScalarWhereWithAggregatesInput | stock_categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stock_categories"> | number
    categoryName?: StringWithAggregatesFilter<"stock_categories"> | string
    description?: StringNullableWithAggregatesFilter<"stock_categories"> | string | null
  }

  export type stock_imagesWhereInput = {
    AND?: stock_imagesWhereInput | stock_imagesWhereInput[]
    OR?: stock_imagesWhereInput[]
    NOT?: stock_imagesWhereInput | stock_imagesWhereInput[]
    id?: IntFilter<"stock_images"> | number
    imageUrl?: StringFilter<"stock_images"> | string
    compressedImageUrl?: StringFilter<"stock_images"> | string
    category?: IntFilter<"stock_images"> | number
    price?: DecimalFilter<"stock_images"> | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringFilter<"stock_images"> | string
    createdAt?: DateTimeFilter<"stock_images"> | Date | string
    stock_categories?: XOR<Stock_categoriesScalarRelationFilter, stock_categoriesWhereInput>
  }

  export type stock_imagesOrderByWithRelationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    compressedImageUrl?: SortOrder
    category?: SortOrder
    price?: SortOrder
    backgroundColor?: SortOrder
    createdAt?: SortOrder
    stock_categories?: stock_categoriesOrderByWithRelationInput
  }

  export type stock_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: stock_imagesWhereInput | stock_imagesWhereInput[]
    OR?: stock_imagesWhereInput[]
    NOT?: stock_imagesWhereInput | stock_imagesWhereInput[]
    imageUrl?: StringFilter<"stock_images"> | string
    compressedImageUrl?: StringFilter<"stock_images"> | string
    category?: IntFilter<"stock_images"> | number
    price?: DecimalFilter<"stock_images"> | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringFilter<"stock_images"> | string
    createdAt?: DateTimeFilter<"stock_images"> | Date | string
    stock_categories?: XOR<Stock_categoriesScalarRelationFilter, stock_categoriesWhereInput>
  }, "id">

  export type stock_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    compressedImageUrl?: SortOrder
    category?: SortOrder
    price?: SortOrder
    backgroundColor?: SortOrder
    createdAt?: SortOrder
    _count?: stock_imagesCountOrderByAggregateInput
    _avg?: stock_imagesAvgOrderByAggregateInput
    _max?: stock_imagesMaxOrderByAggregateInput
    _min?: stock_imagesMinOrderByAggregateInput
    _sum?: stock_imagesSumOrderByAggregateInput
  }

  export type stock_imagesScalarWhereWithAggregatesInput = {
    AND?: stock_imagesScalarWhereWithAggregatesInput | stock_imagesScalarWhereWithAggregatesInput[]
    OR?: stock_imagesScalarWhereWithAggregatesInput[]
    NOT?: stock_imagesScalarWhereWithAggregatesInput | stock_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"stock_images"> | number
    imageUrl?: StringWithAggregatesFilter<"stock_images"> | string
    compressedImageUrl?: StringWithAggregatesFilter<"stock_images"> | string
    category?: IntWithAggregatesFilter<"stock_images"> | number
    price?: DecimalWithAggregatesFilter<"stock_images"> | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringWithAggregatesFilter<"stock_images"> | string
    createdAt?: DateTimeWithAggregatesFilter<"stock_images"> | Date | string
  }

  export type servicesCreateInput = {
    service_name: string
    uv_url: string
    texture_aspect_width: number
    texture_aspect_height: number
    model_url: string
    image_url?: string | null
    description: string
    title: string
    is_available: boolean
    icon_url?: string | null
  }

  export type servicesUncheckedCreateInput = {
    id?: number
    service_name: string
    uv_url: string
    texture_aspect_width: number
    texture_aspect_height: number
    model_url: string
    image_url?: string | null
    description: string
    title: string
    is_available: boolean
    icon_url?: string | null
  }

  export type servicesUpdateInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    uv_url?: StringFieldUpdateOperationsInput | string
    texture_aspect_width?: IntFieldUpdateOperationsInput | number
    texture_aspect_height?: IntFieldUpdateOperationsInput | number
    model_url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    uv_url?: StringFieldUpdateOperationsInput | string
    texture_aspect_width?: IntFieldUpdateOperationsInput | number
    texture_aspect_height?: IntFieldUpdateOperationsInput | number
    model_url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicesCreateManyInput = {
    id?: number
    service_name: string
    uv_url: string
    texture_aspect_width: number
    texture_aspect_height: number
    model_url: string
    image_url?: string | null
    description: string
    title: string
    is_available: boolean
    icon_url?: string | null
  }

  export type servicesUpdateManyMutationInput = {
    service_name?: StringFieldUpdateOperationsInput | string
    uv_url?: StringFieldUpdateOperationsInput | string
    texture_aspect_width?: IntFieldUpdateOperationsInput | number
    texture_aspect_height?: IntFieldUpdateOperationsInput | number
    model_url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type servicesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    service_name?: StringFieldUpdateOperationsInput | string
    uv_url?: StringFieldUpdateOperationsInput | string
    texture_aspect_width?: IntFieldUpdateOperationsInput | number
    texture_aspect_height?: IntFieldUpdateOperationsInput | number
    model_url?: StringFieldUpdateOperationsInput | string
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    description?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    is_available?: BoolFieldUpdateOperationsInput | boolean
    icon_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stock_categoriesCreateInput = {
    categoryName: string
    description?: string | null
    stock_images?: stock_imagesCreateNestedManyWithoutStock_categoriesInput
  }

  export type stock_categoriesUncheckedCreateInput = {
    id?: number
    categoryName: string
    description?: string | null
    stock_images?: stock_imagesUncheckedCreateNestedManyWithoutStock_categoriesInput
  }

  export type stock_categoriesUpdateInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock_images?: stock_imagesUpdateManyWithoutStock_categoriesNestedInput
  }

  export type stock_categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    stock_images?: stock_imagesUncheckedUpdateManyWithoutStock_categoriesNestedInput
  }

  export type stock_categoriesCreateManyInput = {
    id?: number
    categoryName: string
    description?: string | null
  }

  export type stock_categoriesUpdateManyMutationInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stock_categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stock_imagesCreateInput = {
    imageUrl: string
    compressedImageUrl: string
    price: Decimal | DecimalJsLike | number | string
    backgroundColor: string
    createdAt?: Date | string
    stock_categories: stock_categoriesCreateNestedOneWithoutStock_imagesInput
  }

  export type stock_imagesUncheckedCreateInput = {
    id?: number
    imageUrl: string
    compressedImageUrl: string
    category: number
    price: Decimal | DecimalJsLike | number | string
    backgroundColor: string
    createdAt?: Date | string
  }

  export type stock_imagesUpdateInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    compressedImageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stock_categories?: stock_categoriesUpdateOneRequiredWithoutStock_imagesNestedInput
  }

  export type stock_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    compressedImageUrl?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stock_imagesCreateManyInput = {
    id?: number
    imageUrl: string
    compressedImageUrl: string
    category: number
    price: Decimal | DecimalJsLike | number | string
    backgroundColor: string
    createdAt?: Date | string
  }

  export type stock_imagesUpdateManyMutationInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    compressedImageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stock_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    compressedImageUrl?: StringFieldUpdateOperationsInput | string
    category?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type servicesCountOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    uv_url?: SortOrder
    texture_aspect_width?: SortOrder
    texture_aspect_height?: SortOrder
    model_url?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    title?: SortOrder
    is_available?: SortOrder
    icon_url?: SortOrder
  }

  export type servicesAvgOrderByAggregateInput = {
    id?: SortOrder
    texture_aspect_width?: SortOrder
    texture_aspect_height?: SortOrder
  }

  export type servicesMaxOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    uv_url?: SortOrder
    texture_aspect_width?: SortOrder
    texture_aspect_height?: SortOrder
    model_url?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    title?: SortOrder
    is_available?: SortOrder
    icon_url?: SortOrder
  }

  export type servicesMinOrderByAggregateInput = {
    id?: SortOrder
    service_name?: SortOrder
    uv_url?: SortOrder
    texture_aspect_width?: SortOrder
    texture_aspect_height?: SortOrder
    model_url?: SortOrder
    image_url?: SortOrder
    description?: SortOrder
    title?: SortOrder
    is_available?: SortOrder
    icon_url?: SortOrder
  }

  export type servicesSumOrderByAggregateInput = {
    id?: SortOrder
    texture_aspect_width?: SortOrder
    texture_aspect_height?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Stock_imagesListRelationFilter = {
    every?: stock_imagesWhereInput
    some?: stock_imagesWhereInput
    none?: stock_imagesWhereInput
  }

  export type stock_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type stock_categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
  }

  export type stock_categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type stock_categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
  }

  export type stock_categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    categoryName?: SortOrder
    description?: SortOrder
  }

  export type stock_categoriesSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type Stock_categoriesScalarRelationFilter = {
    is?: stock_categoriesWhereInput
    isNot?: stock_categoriesWhereInput
  }

  export type stock_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    compressedImageUrl?: SortOrder
    category?: SortOrder
    price?: SortOrder
    backgroundColor?: SortOrder
    createdAt?: SortOrder
  }

  export type stock_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    price?: SortOrder
  }

  export type stock_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    compressedImageUrl?: SortOrder
    category?: SortOrder
    price?: SortOrder
    backgroundColor?: SortOrder
    createdAt?: SortOrder
  }

  export type stock_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    imageUrl?: SortOrder
    compressedImageUrl?: SortOrder
    category?: SortOrder
    price?: SortOrder
    backgroundColor?: SortOrder
    createdAt?: SortOrder
  }

  export type stock_imagesSumOrderByAggregateInput = {
    id?: SortOrder
    category?: SortOrder
    price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type stock_imagesCreateNestedManyWithoutStock_categoriesInput = {
    create?: XOR<stock_imagesCreateWithoutStock_categoriesInput, stock_imagesUncheckedCreateWithoutStock_categoriesInput> | stock_imagesCreateWithoutStock_categoriesInput[] | stock_imagesUncheckedCreateWithoutStock_categoriesInput[]
    connectOrCreate?: stock_imagesCreateOrConnectWithoutStock_categoriesInput | stock_imagesCreateOrConnectWithoutStock_categoriesInput[]
    createMany?: stock_imagesCreateManyStock_categoriesInputEnvelope
    connect?: stock_imagesWhereUniqueInput | stock_imagesWhereUniqueInput[]
  }

  export type stock_imagesUncheckedCreateNestedManyWithoutStock_categoriesInput = {
    create?: XOR<stock_imagesCreateWithoutStock_categoriesInput, stock_imagesUncheckedCreateWithoutStock_categoriesInput> | stock_imagesCreateWithoutStock_categoriesInput[] | stock_imagesUncheckedCreateWithoutStock_categoriesInput[]
    connectOrCreate?: stock_imagesCreateOrConnectWithoutStock_categoriesInput | stock_imagesCreateOrConnectWithoutStock_categoriesInput[]
    createMany?: stock_imagesCreateManyStock_categoriesInputEnvelope
    connect?: stock_imagesWhereUniqueInput | stock_imagesWhereUniqueInput[]
  }

  export type stock_imagesUpdateManyWithoutStock_categoriesNestedInput = {
    create?: XOR<stock_imagesCreateWithoutStock_categoriesInput, stock_imagesUncheckedCreateWithoutStock_categoriesInput> | stock_imagesCreateWithoutStock_categoriesInput[] | stock_imagesUncheckedCreateWithoutStock_categoriesInput[]
    connectOrCreate?: stock_imagesCreateOrConnectWithoutStock_categoriesInput | stock_imagesCreateOrConnectWithoutStock_categoriesInput[]
    upsert?: stock_imagesUpsertWithWhereUniqueWithoutStock_categoriesInput | stock_imagesUpsertWithWhereUniqueWithoutStock_categoriesInput[]
    createMany?: stock_imagesCreateManyStock_categoriesInputEnvelope
    set?: stock_imagesWhereUniqueInput | stock_imagesWhereUniqueInput[]
    disconnect?: stock_imagesWhereUniqueInput | stock_imagesWhereUniqueInput[]
    delete?: stock_imagesWhereUniqueInput | stock_imagesWhereUniqueInput[]
    connect?: stock_imagesWhereUniqueInput | stock_imagesWhereUniqueInput[]
    update?: stock_imagesUpdateWithWhereUniqueWithoutStock_categoriesInput | stock_imagesUpdateWithWhereUniqueWithoutStock_categoriesInput[]
    updateMany?: stock_imagesUpdateManyWithWhereWithoutStock_categoriesInput | stock_imagesUpdateManyWithWhereWithoutStock_categoriesInput[]
    deleteMany?: stock_imagesScalarWhereInput | stock_imagesScalarWhereInput[]
  }

  export type stock_imagesUncheckedUpdateManyWithoutStock_categoriesNestedInput = {
    create?: XOR<stock_imagesCreateWithoutStock_categoriesInput, stock_imagesUncheckedCreateWithoutStock_categoriesInput> | stock_imagesCreateWithoutStock_categoriesInput[] | stock_imagesUncheckedCreateWithoutStock_categoriesInput[]
    connectOrCreate?: stock_imagesCreateOrConnectWithoutStock_categoriesInput | stock_imagesCreateOrConnectWithoutStock_categoriesInput[]
    upsert?: stock_imagesUpsertWithWhereUniqueWithoutStock_categoriesInput | stock_imagesUpsertWithWhereUniqueWithoutStock_categoriesInput[]
    createMany?: stock_imagesCreateManyStock_categoriesInputEnvelope
    set?: stock_imagesWhereUniqueInput | stock_imagesWhereUniqueInput[]
    disconnect?: stock_imagesWhereUniqueInput | stock_imagesWhereUniqueInput[]
    delete?: stock_imagesWhereUniqueInput | stock_imagesWhereUniqueInput[]
    connect?: stock_imagesWhereUniqueInput | stock_imagesWhereUniqueInput[]
    update?: stock_imagesUpdateWithWhereUniqueWithoutStock_categoriesInput | stock_imagesUpdateWithWhereUniqueWithoutStock_categoriesInput[]
    updateMany?: stock_imagesUpdateManyWithWhereWithoutStock_categoriesInput | stock_imagesUpdateManyWithWhereWithoutStock_categoriesInput[]
    deleteMany?: stock_imagesScalarWhereInput | stock_imagesScalarWhereInput[]
  }

  export type stock_categoriesCreateNestedOneWithoutStock_imagesInput = {
    create?: XOR<stock_categoriesCreateWithoutStock_imagesInput, stock_categoriesUncheckedCreateWithoutStock_imagesInput>
    connectOrCreate?: stock_categoriesCreateOrConnectWithoutStock_imagesInput
    connect?: stock_categoriesWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type stock_categoriesUpdateOneRequiredWithoutStock_imagesNestedInput = {
    create?: XOR<stock_categoriesCreateWithoutStock_imagesInput, stock_categoriesUncheckedCreateWithoutStock_imagesInput>
    connectOrCreate?: stock_categoriesCreateOrConnectWithoutStock_imagesInput
    upsert?: stock_categoriesUpsertWithoutStock_imagesInput
    connect?: stock_categoriesWhereUniqueInput
    update?: XOR<XOR<stock_categoriesUpdateToOneWithWhereWithoutStock_imagesInput, stock_categoriesUpdateWithoutStock_imagesInput>, stock_categoriesUncheckedUpdateWithoutStock_imagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type stock_imagesCreateWithoutStock_categoriesInput = {
    imageUrl: string
    compressedImageUrl: string
    price: Decimal | DecimalJsLike | number | string
    backgroundColor: string
    createdAt?: Date | string
  }

  export type stock_imagesUncheckedCreateWithoutStock_categoriesInput = {
    id?: number
    imageUrl: string
    compressedImageUrl: string
    price: Decimal | DecimalJsLike | number | string
    backgroundColor: string
    createdAt?: Date | string
  }

  export type stock_imagesCreateOrConnectWithoutStock_categoriesInput = {
    where: stock_imagesWhereUniqueInput
    create: XOR<stock_imagesCreateWithoutStock_categoriesInput, stock_imagesUncheckedCreateWithoutStock_categoriesInput>
  }

  export type stock_imagesCreateManyStock_categoriesInputEnvelope = {
    data: stock_imagesCreateManyStock_categoriesInput | stock_imagesCreateManyStock_categoriesInput[]
    skipDuplicates?: boolean
  }

  export type stock_imagesUpsertWithWhereUniqueWithoutStock_categoriesInput = {
    where: stock_imagesWhereUniqueInput
    update: XOR<stock_imagesUpdateWithoutStock_categoriesInput, stock_imagesUncheckedUpdateWithoutStock_categoriesInput>
    create: XOR<stock_imagesCreateWithoutStock_categoriesInput, stock_imagesUncheckedCreateWithoutStock_categoriesInput>
  }

  export type stock_imagesUpdateWithWhereUniqueWithoutStock_categoriesInput = {
    where: stock_imagesWhereUniqueInput
    data: XOR<stock_imagesUpdateWithoutStock_categoriesInput, stock_imagesUncheckedUpdateWithoutStock_categoriesInput>
  }

  export type stock_imagesUpdateManyWithWhereWithoutStock_categoriesInput = {
    where: stock_imagesScalarWhereInput
    data: XOR<stock_imagesUpdateManyMutationInput, stock_imagesUncheckedUpdateManyWithoutStock_categoriesInput>
  }

  export type stock_imagesScalarWhereInput = {
    AND?: stock_imagesScalarWhereInput | stock_imagesScalarWhereInput[]
    OR?: stock_imagesScalarWhereInput[]
    NOT?: stock_imagesScalarWhereInput | stock_imagesScalarWhereInput[]
    id?: IntFilter<"stock_images"> | number
    imageUrl?: StringFilter<"stock_images"> | string
    compressedImageUrl?: StringFilter<"stock_images"> | string
    category?: IntFilter<"stock_images"> | number
    price?: DecimalFilter<"stock_images"> | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringFilter<"stock_images"> | string
    createdAt?: DateTimeFilter<"stock_images"> | Date | string
  }

  export type stock_categoriesCreateWithoutStock_imagesInput = {
    categoryName: string
    description?: string | null
  }

  export type stock_categoriesUncheckedCreateWithoutStock_imagesInput = {
    id?: number
    categoryName: string
    description?: string | null
  }

  export type stock_categoriesCreateOrConnectWithoutStock_imagesInput = {
    where: stock_categoriesWhereUniqueInput
    create: XOR<stock_categoriesCreateWithoutStock_imagesInput, stock_categoriesUncheckedCreateWithoutStock_imagesInput>
  }

  export type stock_categoriesUpsertWithoutStock_imagesInput = {
    update: XOR<stock_categoriesUpdateWithoutStock_imagesInput, stock_categoriesUncheckedUpdateWithoutStock_imagesInput>
    create: XOR<stock_categoriesCreateWithoutStock_imagesInput, stock_categoriesUncheckedCreateWithoutStock_imagesInput>
    where?: stock_categoriesWhereInput
  }

  export type stock_categoriesUpdateToOneWithWhereWithoutStock_imagesInput = {
    where?: stock_categoriesWhereInput
    data: XOR<stock_categoriesUpdateWithoutStock_imagesInput, stock_categoriesUncheckedUpdateWithoutStock_imagesInput>
  }

  export type stock_categoriesUpdateWithoutStock_imagesInput = {
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stock_categoriesUncheckedUpdateWithoutStock_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    categoryName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type stock_imagesCreateManyStock_categoriesInput = {
    id?: number
    imageUrl: string
    compressedImageUrl: string
    price: Decimal | DecimalJsLike | number | string
    backgroundColor: string
    createdAt?: Date | string
  }

  export type stock_imagesUpdateWithoutStock_categoriesInput = {
    imageUrl?: StringFieldUpdateOperationsInput | string
    compressedImageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stock_imagesUncheckedUpdateWithoutStock_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    compressedImageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type stock_imagesUncheckedUpdateManyWithoutStock_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    imageUrl?: StringFieldUpdateOperationsInput | string
    compressedImageUrl?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}