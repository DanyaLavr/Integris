interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
}
const BurgerMenu = ({ isOpen, setIsOpen }: IProps) => {
  return (
    <div
      className="grid gap-0.5 py-3 px-2 sm:px-1.5 sm:gap-1 md:hidden"
      onClick={setIsOpen}
    >
      <span
        className={`block w-6 h-1 bg-stone-900 rounded-2xl sm:w-10 sm:h-1.5 transition ${isOpen ? "-rotate-45 translate-y-1" : ""}`}
      ></span>
      <span
        className={`block w-6 h-1 bg-stone-900 rounded-2xl sm:w-10 sm:h-1.5 transition ${isOpen ? "rotate-45 -translate-y-0.5" : ""}`}
      ></span>
      <span
        className={`block w-6 h-1 bg-stone-900 rounded-2xl sm:w-10 sm:h-1.5 transition ${isOpen ? "rotate-45 -translate-y-2 opacity-0" : ""}`}
      ></span>
    </div>
  );
};

export default BurgerMenu;
