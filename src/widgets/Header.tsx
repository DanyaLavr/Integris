import { getServerSession } from "next-auth";
import { authConfig } from "../shared/config/authConfig";
import { Link } from "@/i18n/navigation";

import { ROUTES } from "../shared/config/routes";
import { LogoutButton } from "../shared/ui/LogoutButton";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "../shared/ui/LocaleSwitcher";

const navItems = [
  "about",
  "areas",
  "programs",
  "technology",
  "team",
  "space",
  "journal",
];

const Header = async () => {
  const session = await getServerSession(authConfig);
  const t = await getTranslations("header");
  return (
    <header className="sticky top-0 z-50">
      <div className="mx-auto flex gap-8 max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-stone-900"
        >
          Integris
        </Link>

        <nav className="hidden items-center text-sm font-medium text-stone-600 md:flex">
          <ul className="flex gap-4">
            {navItems.map((elem) => (
              <li key={elem} className="capitalize">
                <a href={`#${elem}`}>{elem}</a>
              </li>
            ))}
            <li>
              <Link href="/contacts">Contacts</Link>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-6">
          <LocaleSwitcher />
          <div className="hidden items-center gap-5 sm:flex">
            {session?.user ? (
              <div className="flex items-center gap-4">
                <Link
                  //ROUTES.profile
                  href={"/"}
                  className="flex items-center gap-2 text-sm text-stone-600 transition-colors hover:text-stone-900"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-amber-100 text-xs font-semibold text-amber-800">
                    {session.user.name?.[0]?.toUpperCase() ?? "?"}
                  </span>
                  {session.user.name}
                </Link>
                <LogoutButton />
              </div>
            ) : (
              <Link
                href={ROUTES.login}
                className="hidden text-sm font-medium text-stone-600 transition-colors hover:text-stone-900 sm:inline"
              >
                {t("login")}
              </Link>
            )}

            <Link
              href={ROUTES.booking}
              className="btn-primary inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
            >
              {t("bookAppointment")}
            </Link>
          </div>

          <div className="grid gap-0.5 border border-stone-900 rounded-full py-3 px-2 sm:px-1.5 sm:gap-1 md:hidden">
            <span className="block w-6 h-1 bg-stone-900 rounded-2xl sm:w-10 sm:h-1.5"></span>
            <span className="block w-6 h-1 bg-stone-900 rounded-2xl sm:w-10 sm:h-1.5"></span>
            <span className="block w-6 h-1 bg-stone-900 rounded-2xl sm:w-10 sm:h-1.5"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
