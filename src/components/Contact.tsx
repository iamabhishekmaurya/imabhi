"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import type React from "react";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend, FiTwitter } from "react-icons/fi";
import { MdOutlineContactPhone } from "react-icons/md";
import { Badge } from "./ui/badge";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: typeof errors = {};

    if (!formData.name.trim()) {
      nextErrors.name = "Please enter your name.";
    }
    if (!formData.email.trim()) {
      nextErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address.";
    }
    if (!formData.message.trim()) {
      nextErrors.message = "Please enter a short message.";
    }

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    try {
      // Replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({});

      // Reset submission status after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/iamabhishekmaurya",
      icon: <FiGithub className="h-4 w-4" />,
      colorClass: "bg-slate-900/10 text-slate-900 dark:bg-slate-100/10 dark:text-slate-100",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/iamabhishekmaurya/",
      icon: <FiLinkedin className="h-4 w-4" />,
      colorClass: "bg-sky-500/10 text-sky-600 dark:bg-sky-400/10 dark:text-sky-300",
    },
    {
      name: "Twitter",
      href: "https://x.com/imabhishekmaury",
      icon: <FiTwitter className="h-4 w-4" />,
      colorClass: "bg-sky-400/10 text-sky-500 dark:bg-sky-300/10 dark:text-sky-200",
    },
  ];

  return (
    <motion.section
      id="contact"
      className="bg-background py-20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container max-w-5xl">
        <div className="text-center">
          <Badge variant="outline"
            className="mb-4 border-primary/20 bg-primary/5 text-primary px-3 py-1 rounded-full text-xs font-medium">
            <MdOutlineContactPhone className="mr-1 h-3 w-3" />
            Contact
          </Badge>
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Let&apos;s build something great together.
          </h2>
          <p className="mt-4 text-balance text-sm text-muted-foreground md:text-base">
            Whether you need help modernizing a legacy platform, designing new services,
            or improving reliability, feel free to reach out. I usually respond within a
            day.
          </p>
        </div>

        <div className="mt-12 grid gap-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] items-start">
          <Card className="border-muted/70 bg-card/90 shadow-sm backdrop-blur">
            <CardHeader>
              <CardTitle className="text-base">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="space-y-2 rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-4 text-center text-sm text-emerald-700 dark:text-emerald-300">
                  <div className="text-lg">🎉</div>
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-xs text-emerald-700/80 dark:text-emerald-200/80">
                    Thank you for reaching out. I&apos;ll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-sm">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-medium text-muted-foreground"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-medium text-muted-foreground"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="block text-xs font-medium text-muted-foreground"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Share a bit about what you&apos;d like to work on..."
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send message
                        <FiSend className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <div className="space-y-6 text-sm text-muted-foreground">
            <Card className="border-muted/70 bg-card/90 backdrop-blur">
              <CardContent className="space-y-4 pt-6">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiMail className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Email</p>
                    <a
                      href="mailto:iamabhishekmaurya@gmail.com"
                      className="text-xs text-primary hover:underline"
                    >
                      iamabhishekmaurya@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiMapPin className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Location</p>
                    <p className="text-xs">Noida, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <FiPhone className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Phone</p>
                    <a
                      href="tel:+919807701192"
                      className="text-xs text-primary hover:underline"
                    >
                      +91-9807701192
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-muted/70 bg-card/90 backdrop-blur">
              <CardContent className="space-y-3 pt-6">
                <p className="text-xs font-semibold text-foreground">
                  Connect elsewhere
                </p>
                <p className="text-xs">
                  I share work, ideas, and occasional deep dives on these platforms.
                </p>
                <div className="flex flex-wrap gap-3 text-xs">
                  {socialLinks.map((social) => (
                    <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-muted-foreground/20 bg-background/60 px-3 py-1.5 text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">
                      <span className={`inline-flex h-6 w-6 items-center justify-center rounded-full ${social.colorClass}`}>
                        {social.icon}
                      </span>
                      <span>{social.name}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
