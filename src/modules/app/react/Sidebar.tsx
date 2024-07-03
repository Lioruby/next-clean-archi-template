import { useTranslation } from "@root/modules/shared/react/hooks/use-translation";
import { UsersIcon } from "@heroicons/react/24/outline";
import {
  Headset,
  Layers,
  LayoutDashboard,
  NotepadText,
  Settings,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = () => {
  const { t, locale } = useTranslation("common");
  const [currentPath, setCurrentPath] = useState("");

  const getLink = useCallback(
    (path: string) => {
      return `/${locale}${path}`;
    },
    [locale]
  );

  const isUrlActive = useCallback(
    (url: string) => {
      return currentPath === getLink(url);
    },
    [currentPath, getLink]
  );

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [currentPath]);

  const navigation = useMemo(
    () => [
      {
        name: t("sidebar.dashboard"),
        href: getLink("/"),
        icon: LayoutDashboard,
        active: isUrlActive("/"),
      },
      {
        name: t("sidebar.clients"),
        icon: UsersIcon,
        href: getLink("/clients"),
        active: isUrlActive("/clients"),
      },
      {
        name: t("sidebar.estimatees"),
        icon: NotepadText,
        href: getLink("/estimatees"),
        active: isUrlActive("/estimatees"),
      },
      {
        name: t("sidebar.invoices"),
        href: getLink("/invoices"),
        icon: Layers,
        active: isUrlActive("/invoices"),
      },
      {
        name: t("sidebar.settings"),
        href: getLink("/settings"),
        icon: Settings,
        active: isUrlActive("/settings"),
      },
      {
        name: t("sidebar.contact"),
        href: getLink("/contact"),
        icon: Headset,
        active: isUrlActive("/contact"),
      },
    ],
    [t, isUrlActive, getLink]
  );

  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 h-screen sticky top-0">
      <div className="flex h-16 shrink-0 items-center">
        {/* Logo or Title */}
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.active ? "bg-gray-100" : "hover:bg-gray-100",
                      "group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700"
                    )}
                  >
                    <item.icon
                      className="h-6 w-6 shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto">
            {/* <a
              href="#"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50"
            >
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">Tom Cook</span>
            </a> */}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
