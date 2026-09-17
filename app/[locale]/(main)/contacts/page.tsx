import ContactHero from "@/src/widgets/contacts/ContactHero";
import ContactInfo from "@/src/widgets/contacts/ContactInfo";
import ContactForm from "@/src/widgets/contacts/ContactForm";
import ContactMap from "@/src/widgets/contacts/ContactMap";

export default function ContactsPage() {
  return (
    <>
      <ContactHero />

      <section className="bg-white py-16 md:py-20 lg:py-24">
        <div className="container--custom grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-12">
          <div className="flex flex-col gap-6">
            <ContactInfo />
            <ContactMap />
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
