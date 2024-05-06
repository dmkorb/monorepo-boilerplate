package main

import (
	"log"
	"os"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)

func main() {
	app := fiber.New()

	// Add CORS middleware
	app.Use(cors.New())

	app.Get("/api/data", func(c *fiber.Ctx) error {
		return c.JSON(fiber.Map{
			"message": "Hello from Go service!",
		})
	})

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	log.Fatal(app.Listen(":" + port))
}
