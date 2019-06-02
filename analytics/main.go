package main

import (
	"context"
	"encoding/json"
	"fmt"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Response events.APIGatewayProxyResponse
type Request events.APIGatewayProxyRequest

type Payload struct {
	Url       string `json:"u"`
	UserAgent string `json:"ua"`
	Referrer  string `json:"r"`
	Timezone  string `json:"tz"`
	Bot       bool   `json:"b"`
}

func Handler(ctx context.Context, req Request) (Response, error) {
	var p Payload
	err := json.Unmarshal([]byte(req.Body), &p)

	if err != nil {
		panic(err)
	}

	fmt.Printf("url=%s ref=%s tz=%s bot=%t userAgent=\"%s\"\n", p.Url, p.Referrer, p.Timezone, p.Bot, p.UserAgent)

	return Response{StatusCode: 200}, nil
}

func main() {
	lambda.Start(Handler)
}
