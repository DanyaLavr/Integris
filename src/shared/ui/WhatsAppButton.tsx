const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/000000000"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-white shadow-lg transition-transform hover:scale-105 hover:bg-brand-green-hover sm:bottom-6 sm:right-6"
    >
      <svg
        width="26"
        height="26"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 12a8 8 0 1 1-14.6-4.6L4 20l4.8-1.3A8 8 0 0 1 20 12Z"
          stroke="currentColor"
          strokeWidth="1.6"
        />
        <path
          d="M9 9.5c0 3 2.5 5.5 5.5 5.5.4 0 .8-.3.8-.7v-1c0-.3-.2-.5-.4-.6l-1.6-.6c-.2-.1-.5 0-.6.2l-.3.5c-.9-.5-1.7-1.3-2.2-2.2l.5-.3c.2-.1.3-.4.2-.6l-.6-1.6c-.1-.2-.3-.4-.6-.4h-1c-.4 0-.7.3-.7.8Z"
          fill="currentColor"
        />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
