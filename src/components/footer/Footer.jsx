function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-800">
      <footer className="mx-auto w-full max-w-4xl p-4">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Branding */}
          <div>
            <a href="/" className="mb-3 flex items-center">
              <img
                src="/LogoKoxland.png"
                className="mr-2 h-6"
                alt="Koxland Logo"
              />
              <span className="text-lg font-semibold whitespace-nowrap dark:text-white">
                Koxland
              </span>
            </a>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              React + Tailwind component library with live previews and
              ready-to-use snippets to build beautiful, responsive interfaces
              faster.
            </p>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-500">
              © 2020-{currentYear} Koxland™. All rights reserved.
            </p>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="mb-2 text-xs font-semibold text-gray-400 uppercase dark:text-white">
              Help & Support
            </h3>
            <ul className="space-y-1 text-sm">
              <li>
                <a
                  href="mailto:admin@koxland.net"
                  className="text-gray-600 hover:underline dark:text-gray-400 dark:hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h3 className="mb-2 text-xs font-semibold text-gray-400 uppercase dark:text-white">
              Follow Us
            </h3>
            <ul className="space-y-1 text-sm">
              {[
                { name: "GitHub", href: "https://github.com/Koxone" },
                {
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/carlos-de-le%C3%B3n-21580635b/",
                },
                {
                  name: "YouTube",
                  href: "https://www.youtube.com/@KoxDeveloper",
                },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:underline dark:text-gray-400 dark:hover:text-white"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
