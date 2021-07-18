#!/bin/bash

protoc --proto_path=pkg/proto/refme-protobuf/articles --js_out=import_style=commonjs,binary:./pkg/proto/articlespb --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./pkg/proto/articlespb pkg/proto/refme-protobuf/articles/articles.proto