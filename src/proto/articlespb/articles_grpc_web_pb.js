/**
 * @fileoverview gRPC-Web generated client stub for articles
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.articles = require('./articles_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.articles.ArticlesPageServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.articles.ArticlesPageServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.articles.ArticlesPageRequest,
 *   !proto.articles.ArticlesPageResponse>}
 */
const methodDescriptor_ArticlesPageService_GetArticles = new grpc.web.MethodDescriptor(
  '/articles.ArticlesPageService/GetArticles',
  grpc.web.MethodType.UNARY,
  proto.articles.ArticlesPageRequest,
  proto.articles.ArticlesPageResponse,
  /**
   * @param {!proto.articles.ArticlesPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.articles.ArticlesPageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.articles.ArticlesPageRequest,
 *   !proto.articles.ArticlesPageResponse>}
 */
const methodInfo_ArticlesPageService_GetArticles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.articles.ArticlesPageResponse,
  /**
   * @param {!proto.articles.ArticlesPageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.articles.ArticlesPageResponse.deserializeBinary
);


/**
 * @param {!proto.articles.ArticlesPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.articles.ArticlesPageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.articles.ArticlesPageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.articles.ArticlesPageServiceClient.prototype.getArticles =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/articles.ArticlesPageService/GetArticles',
      request,
      metadata || {},
      methodDescriptor_ArticlesPageService_GetArticles,
      callback);
};


/**
 * @param {!proto.articles.ArticlesPageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.articles.ArticlesPageResponse>}
 *     Promise that resolves to the response
 */
proto.articles.ArticlesPageServicePromiseClient.prototype.getArticles =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/articles.ArticlesPageService/GetArticles',
      request,
      metadata || {},
      methodDescriptor_ArticlesPageService_GetArticles);
};


module.exports = proto.articles;

