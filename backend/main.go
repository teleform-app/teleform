package main

import (
	"encoding/json"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"net/http"
	"teleform/methods"
)

func main() {
	router := gin.Default()

	if err := router.SetTrustedProxies(getCloudflareIPRanges()); err != nil {
		panic(err)
	}

	api := router.Group("/api")

	api.Use(twaAuthMiddleware)

	api.GET("/getForm", methods.GetForm)
	api.GET("/getMyForms", methods.GetMyForms)

	router.Use(static.Serve("/", static.LocalFile("/app/frontend-build", false)))

	router.Use(func(c *gin.Context) {
		c.File("/app/frontend-build/index.html")
	})

	panic(router.Run())
}

func getCloudflareIPRanges() (ipnets []string) {
	resp, err := http.Get("https://api.cloudflare.com/client/v4/ips")
	if err != nil {
		panic(err)
	}

	defer func() {
		err := resp.Body.Close()
		if err != nil {
			panic(err)
		}
	}()

	var ipranges struct {
		Result struct {
			IPv4CIDRs []string `json:"ipv4_cidrs"`
			IPv6CIDRs []string `json:"ipv6_cidrs"`
		} `json:"result"`
	}

	err = json.NewDecoder(resp.Body).Decode(&ipranges)
	if err != nil {
		panic(err)
	}

	return append(ipranges.Result.IPv4CIDRs, ipranges.Result.IPv6CIDRs...)
}
