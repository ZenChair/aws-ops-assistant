package main

import "testing"

func TestGreet(t *testing.T) {
	expected := "Hello, USER!"

	if actual := _Greet("USER"); actual != expected {
		t.Fatalf("Expected \"%s\", but got \"%s\"", expected, actual)
	}
}
