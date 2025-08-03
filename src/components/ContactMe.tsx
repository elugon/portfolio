import React from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Props = {
  "client:visible"?: boolean;
};

export default function ContactMe(_props: Props) {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting }
  } = useForm<Inputs>();
  
  const onSubmit = (formData: Inputs) => {
    // Enhanced mailto with better encoding
    const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
    const body = encodeURIComponent(
      `Hi Elu,\n\nMy name is ${formData.name}.\n\n${formData.message}\n\nBest regards,\n${formData.name}\nEmail: ${formData.email}`
    );
    window.location.href = `mailto:elugon10@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="my-screen relative mx-auto flex max-w-7xl flex-col items-center justify-evenly px-6 text-center sm:px-10">
      {/* Skip to main content for screen readers */}
      <a 
        href="#contact-form" 
        className="skip-to-main"
        aria-label="Skip to contact form"
      >
        Skip to contact form
      </a>
      
      <header>
        <h2 className="section-title absolute top-8 sm:top-16">
          Contact
        </h2>
      </header>

      <div className="flex flex-col space-y-6 pt-20 sm:pt-28">
        <h3 className="section-subtitle text-center">
          Ready to collaborate? I&apos;d love to hear about your next project.{" "}
          <span className="text-gradient font-semibold">Let&apos;s create something amazing together!</span>
        </h3>
      </div>

      {/* Contact Information */}
      <section 
        className="mb-6 mt-6 space-y-4 md:mt-12"
        aria-labelledby="contact-info-heading"
      >
        <h4 id="contact-info-heading" className="sr-only">
          Contact Information
        </h4>
        
        <div className="flex items-center justify-center space-x-4">
          <PhoneIcon 
            className="h-6 w-6 text-primary-400 sm:h-8 sm:w-8" 
            aria-hidden="true"
          />
          <a 
            href="tel:+34634918659"
            className="text-sm text-neutral-300 transition-colors hover:text-primary-400 sm:text-lg"
            aria-label="Call phone number +34 634 91 86 59"
          >
            +34 634 91 86 59
          </a>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <EnvelopeIcon 
            className="h-6 w-6 text-primary-400 sm:h-8 sm:w-8" 
            aria-hidden="true"
          />
          <a 
            href="mailto:elugon10@gmail.com"
            className="text-sm text-neutral-300 transition-colors hover:text-primary-400 sm:text-lg"
            aria-label="Send email to elugon10@gmail.com"
          >
            elugon10@gmail.com
          </a>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <MapPinIcon 
            className="h-6 w-6 text-primary-400 sm:h-8 sm:w-8" 
            aria-hidden="true"
          />
          <span 
            className="text-sm text-neutral-300 sm:text-lg"
            aria-label="Located in Barcelona, Spain"
          >
            Barcelona, Spain
          </span>
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full max-w-2xl">
        <h4 id="contact-form" className="sr-only">
          Contact Form
        </h4>
        
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6"
          noValidate
          aria-label="Contact form"
        >
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="form-label">
                Full Name *
              </label>
              <input
                id="name"
                {...register("name", { 
                  required: "Name is required",
                  minLength: { value: 2, message: "Name must be at least 2 characters" }
                })}
                placeholder="Your full name"
                className="form-input"
                type="text"
                aria-required="true"
                aria-invalid={errors.name ? 'true' : 'false'}
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="form-error" role="alert">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="form-label">
                Email Address *
              </label>
              <input
                id="email"
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address"
                  }
                })}
                placeholder="your.email@example.com"
                className="form-input"
                type="email"
                autoComplete="email"
                aria-required="true"
                aria-invalid={errors.email ? 'true' : 'false'}
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="form-error" role="alert">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Subject */}
          <div>
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              id="subject"
              {...register("subject", {
                maxLength: { value: 100, message: "Subject must be less than 100 characters" }
              })}
              placeholder="Project collaboration, job opportunity, etc."
              className="form-input"
              type="text"
              aria-invalid={errors.subject ? 'true' : 'false'}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
            />
            {errors.subject && (
              <p id="subject-error" className="form-error" role="alert">
                {errors.subject.message}
              </p>
            )}
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="form-label">
              Message *
            </label>
            <textarea
              id="message"
              {...register("message", { 
                required: "Message is required",
                minLength: { value: 10, message: "Message must be at least 10 characters" },
                maxLength: { value: 1000, message: "Message must be less than 1000 characters" }
              })}
              placeholder="Tell me about your project, ideas, or how we can work together..."
              className="form-input min-h-[120px] resize-y"
              rows={5}
              aria-required="true"
              aria-invalid={errors.message ? 'true' : 'false'}
              aria-describedby={errors.message ? 'message-error' : 'message-hint'}
            />
            <p id="message-hint" className="mt-1 text-xs text-neutral-400">
              Share details about your project, timeline, and any specific requirements.
            </p>
            {errors.message && (
              <p id="message-error" className="form-error" role="alert">
                {errors.message.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            aria-describedby="submit-description"
          >
            {isSubmitting ? 'Preparing Email...' : 'Send Message'}
          </button>
          <p id="submit-description" className="text-xs text-neutral-400 text-center">
            This will open your default email client with the message pre-filled.
          </p>
        </form>
      </section>
    </div>
  );
}