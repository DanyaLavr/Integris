import { getServerSession } from "next-auth";
import { authConfig } from "../shared/config/authConfig";
import { Link } from "@/i18n/navigation";

import { ROUTES } from "../shared/config/routes";
import { LogoutButton } from "../shared/ui/LogoutButton";
import { getTranslations } from "next-intl/server";
import LocaleSwitcher from "../shared/ui/LocaleSwitcher";
import MobileMenu from "../shared/ui/MobileMenu";

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
  const tnav = await getTranslations("header.nav");
  return (
    <header className="sticky top-0 z-50">
      <div className="container--custom flex gap-8 items-center justify-between py-4">
        <Link
          id="logo"
          href="/"
          className="flex items-center gap-2 font-semibold "
        >
          Integris
        </Link>

        <nav className="hidden items-center text-sm font-medium  md:flex">
          <ul className="flex gap-4">
            {navItems.map((elem) => (
              <li key={elem} className="capitalize ">
                <Link
                  className="transition relative after:rounded-4xl after:absolute after:block after:h-0.5 after:bg-brand-green after:transition-[width] after:w-0  hover:text-brand-green hover:after:w-full focus-visible:text-brand-green focus-visible:after:w-full"
                  href={`/#${elem}`}
                >
                  {tnav(elem)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                className="transition relative after:rounded-4xl after:absolute after:block after:h-0.5 after:bg-brand-green after:transition-[width] after:w-0  hover:text-brand-green hover:after:w-full focus-visible:text-brand-green focus-visible:after:w-full"
                href="/contacts"
              >
                {t("contacts")}
              </Link>
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
          <MobileMenu>
            <nav className="font-bold">
              <ul className="grid gap-6 text-2xl text-center">
                {navItems.map((elem) => (
                  <li data-mobile-menu key={elem} className="capitalize ">
                    <Link href={`/#${elem}`}>{tnav(elem)}</Link>
                  </li>
                ))}
                <li>
                  <Link data-mobile-menu href="/contacts">
                    {t("contacts")}
                  </Link>
                </li>
              </ul>
            </nav>
          </MobileMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;
