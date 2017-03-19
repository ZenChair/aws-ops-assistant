
SRC_DIR=./experiment-src

validate-syntax:
	go tool vet $(SRC_DIR)

lint: get-deps
	golint $(SRC_DIR)

test:
	go test $(SRC_DIR)

get-deps:
	go get -u github.com/golang/lint/golint
