
import { useEffect, useRef, useState } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { contactFormSchema, type ContactFormData } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return apiRequest("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "oyelekefrancis1505@gmail.com",
      href: "mailto:oyelekefrancis1505@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "09134508965",
      href: "tel:09134508965"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/oyelekefrancis",
      href: "https://linkedin.com/in/oyelekefrancis"
    }
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-20 text-white" style={{ background: 'linear-gradient(135deg, var(--deep-violet) 0%, var(--violet) 50%, var(--lavender-indigo) 100%)' }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 luxury-font">
            Let's Work Together
          </h2>
          <p className="text-xl text-center mb-16 max-w-3xl mx-auto modern-font" style={{ color: 'var(--magnolia)' }}>
            Ready to transform your product vision into reality? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`}>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center space-x-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm">{info.label}</p>
                      <p className="font-semibold">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">Why Choose Me?</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  1+ years of product management experience
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Proven track record of successful product launches
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Strong technical and business acumen
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Collaborative leadership style
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">Full Name</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="John Doe"
                              {...field}
                              className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-blue-400 focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-sm font-medium text-white">Email Address</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john@example.com"
                              {...field}
                              className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-blue-400 focus:border-transparent"
                            />
                          </FormControl>
                          <FormMessage className="text-red-300" />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Let's discuss your project"
                            {...field}
                            className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-blue-400 focus:border-transparent"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-white">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Tell me about your project and how I can help..."
                            rows={5}
                            {...field}
                            className="bg-white/20 border-white/30 text-white placeholder-gray-300 focus:ring-blue-400 focus:border-transparent resize-none"
                          />
                        </FormControl>
                        <FormMessage className="text-red-300" />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center"
                  >
                    {contactMutation.isPending ? (
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    ) : (
                      <>
                        <Send size={20} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <p className="text-gray-300">
            © 2024 Oyeleke Francis - Product Manager. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
