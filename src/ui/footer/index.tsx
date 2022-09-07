import { LogoComponent } from "../logo";

export const FooterComponent = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
        <LogoComponent />

        <div className="grid grid-cols-1 gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-medium">Company</p>

            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                About
              </a>
              <a className="hover:opacity-75" href="">
                Meet the Team
              </a>
              <a className="hover:opacity-75" href="">
                History
              </a>
              <a className="hover:opacity-75" href="">
                Careers
              </a>
            </nav>
          </div>

          <div>
            <p className="font-medium">Services</p>

            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                1on1 Coaching
              </a>
              <a className="hover:opacity-75" href="">
                Company Review
              </a>
              <a className="hover:opacity-75" href="">
                Accounts Review
              </a>
              <a className="hover:opacity-75" href="">
                HR Consulting
              </a>
              <a className="hover:opacity-75" href="">
                SEO Optimisation
              </a>
            </nav>
          </div>

          <div>
            <p className="font-medium">Helpful Links</p>

            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                Contact
              </a>
              <a className="hover:opacity-75" href="">
                FAQs
              </a>
              <a className="hover:opacity-75" href="">
                Live Chat
              </a>
            </nav>
          </div>

          <div>
            <p className="font-medium">Legal</p>

            <nav className="flex flex-col mt-4 space-y-2 text-sm text-gray-500">
              <a className="hover:opacity-75" href="">
                Privacy Policy
              </a>
              <a className="hover:opacity-75" href="">
                Terms & Conditions
              </a>
              <a className="hover:opacity-75" href="">
                Returns Policy
              </a>
              <a className="hover:opacity-75" href="">
                Accessibility
              </a>
            </nav>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-gray-100 sm:items-center sm:justify-between sm:flex">
          <p className="text-xs text-gray-500">
            &copy; 2022 Mateusz Myrcik / Paulina Nowak / Jacek Chmiel
          </p>
        </div>
      </div>
    </div>
  );
};
