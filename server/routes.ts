import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactFormSchema } from "@shared/schema";
import { sendContactEmail } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the request body
      const validatedData = contactFormSchema.parse(req.body);
      
      // Send email
      const emailSent = await sendContactEmail(validatedData);
      
      if (emailSent) {
        res.status(200).json({ 
          success: true, 
          message: "Message sent successfully!" 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Failed to send message. Please try again." 
        });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      
      if (error instanceof Error && 'issues' in error) {
        // Zod validation error
        res.status(400).json({ 
          success: false, 
          message: "Invalid form data",
          errors: error.issues
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Server error. Please try again later." 
        });
      }
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
