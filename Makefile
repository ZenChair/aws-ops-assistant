
SRC_DIR=./experiment-src

.PHONY: scenario-test

validate-syntax:
	go tool vet $(SRC_DIR)

lint: get-deps
	golint $(SRC_DIR)

test: unit-test scenario-test

unit-test:
	go test $(SRC_DIR)

scenario-test:
	(cd scenario-test && npm test)

get-deps:
	go get -u github.com/golang/lint/golint
