#!/bin/bash

protoc --proto_path=./src/proto/refme-protobuf/articles \
--js_out=import_style=commonjs,binary:./src/proto/articlespb \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/proto/articlespb \
./src/proto/refme-protobuf/articles/articles.proto