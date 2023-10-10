package main

import (
	"encoding/json"
	"github.com/gin-contrib/cors"
	"github.com/gin-contrib/static"
	"github.com/gin-gonic/gin"
	"net/http"
	_ "teleform/bot"
	"teleform/methods"
	"time"
)

func main() {
	router := gin.Default()

	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"*"},
		AllowMethods:     []string{"GET", "POST", "OPTIONS"},
		AllowHeaders:     []string{"Origin"},
		ExposeHeaders:    []string{"Content-Length", "Content-Disposition"},
		AllowCredentials: true,

		MaxAge: 2 * time.Hour,
	}))

	if err := router.SetTrustedProxies(getCloudflareIPRanges()); err != nil {
		panic(err)
	}

	api := router.Group("/api")

	api.Use(twaAuthMiddleware)

	api.GET("/getForm", methods.GetForm)
	api.GET("/getMyForms", methods.GetMyForms)
	api.POST("/createForm", methods.CreateForm)
	api.POST("/editForm", methods.EditForm)
	api.POST("/respondToForm", methods.RespondToForm)
	api.POST("/deleteForm", methods.DeleteForm)
	api.GET("/getFormResponses", methods.GetFormResponses)
	api.POST("/exportFormResponses", methods.ExportFormResponses)

	api.Use(func(c *gin.Context) {
		c.JSON(http.StatusNotFound, gin.H{"error": "no such API method"})
		c.Abort()
	})

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
