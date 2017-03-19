
SRC_DIR=./experiment-src

lint:
	go tool vet $(SRC_DIR)

test:
	go test $(SRC_DIR)
