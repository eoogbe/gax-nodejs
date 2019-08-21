'use strict';

const grpcJs = require('@grpc/grpc-js');
const grpcWeb = require('grpc-web');
const languageModule = require('./src');
const protoModule = require('./src/google/cloud/language/v1/language_service_pb');

async function main() {
  const client = new languageModule.v1.LanguageServiceClient({
    sslCreds: grpcJs.credentials.createInsecure(),
    grpc: Object.assign({
      Metadata: grpcJs.Metadata,
      status: grpcWeb.StatusCode,
    }, grpcWeb),
  });

  const document = new protoModule.Document();
  document.setContent('Hello, world!');
  document.setType('PLAIN_TEXT');

  const request = new protoModule.AnalyzeSentimentRequest();
  request.setDocument(document);

  const response = await client.analyzeSentiment(request);
  console.log(response.sentences[0]);
}

main().catch(console.error);
