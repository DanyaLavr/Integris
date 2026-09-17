const interests = [
  "Face",
  "Body",
  "Skin",
  "Anti-Age",
  "Wellness",
  "Health",
  "I'm not sure",
];
const contactMethods = ["WhatsApp", "Phone", "Email"];

const ContactForm = () => {
  return (
    <form className="rounded-2xl border border-black/10 p-7 sm:p-8 lg:p-10">
      <h2 className="text-xl font-semibold sm:text-2xl">
        Request a Consultation
      </h2>
      <p className="mt-2 text-sm text-black/60 sm:text-base">
        Fill in the form below and our team will get back to you shortly.
      </p>

      <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your full name"
            className="rounded-lg border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-green"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+34 000 000 000"
            className="rounded-lg border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-green"
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="you@email.com"
            className="rounded-lg border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-green"
          />
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-sm font-medium">Preferred contact method</span>
          <div className="flex flex-wrap gap-4">
            {contactMethods.map((method, index) => (
              <label key={method} className="flex items-center gap-2 text-sm">
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  defaultChecked={index === 0}
                  className="h-4 w-4 accent-brand-green"
                />
                {method}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <span className="text-sm font-medium">
            What are you interested in?
          </span>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <label
                key={interest}
                className="cursor-pointer rounded-full border border-black/15 px-4 py-2 text-sm transition-colors has-[:checked]:border-brand-green has-[:checked]:bg-brand-green has-[:checked]:text-white"
              >
                <input
                  type="checkbox"
                  name="interest"
                  value={interest}
                  className="hidden"
                />
                {interest}
              </label>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 sm:col-span-2">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us more about what you are looking for"
            className="resize-none rounded-lg border border-black/15 bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-brand-green"
          />
        </div>

        <label className="flex items-start gap-3 text-sm text-black/70 sm:col-span-2">
          <input
            type="checkbox"
            name="privacy"
            className="mt-0.5 h-4 w-4 accent-brand-green"
          />
          I agree to the Privacy Policy.
        </label>
      </div>

      <button
        type="submit"
        className="btn-primary mt-8 w-full rounded-lg px-6 py-3.5 text-sm sm:w-auto sm:text-base"
      >
        Request a Consultation
      </button>
    </form>
  );
};

export default ContactForm;
