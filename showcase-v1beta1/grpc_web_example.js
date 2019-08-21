'use strict';

const grpcJs = require('@grpc/grpc-js');
const grpcWeb = require('grpc-web');
const showcaseModule = require('./src');
const protoModule = require('./src/google/showcase/v1beta1/echo_pb');

async function main() {
  const client = new showcaseModule.EchoClient({
    sslCreds: grpcJs.credentials.createInsecure(),
    servicePath: 'localhost',
    port: 7469,
    grpc: Object.assign({
      Metadata: grpcJs.Metadata,
      status: grpcWeb.StatusCode,
    }, grpcWeb),
  });

  const request = new protoModule.EchoRequest();
  request.setContent("test");

  const response = await client.echo(request);
  console.log(response);
}

main().catch(console.error);
