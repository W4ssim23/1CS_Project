import { Link } from "@/i18n/routing";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 mt-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-0">
        <div className="sm:w-1/3 w-2/3 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-blue-900">DZ ARTISAN</h3>
          <p className="text-sm text-gray-600 mt-4 sm:max-w-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div className=" w-1/3 flex flex-col items-center text-center">
          <h3 className="text-lg font-semibold text-blue-900">
            QUELQUES LIENS
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-700 font-bold">
            <li>
              <Link href="/" className="hover:underline">
                HOME
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                TROUVER UN PRO
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                À PROPOS
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:underline">
                S'INSCRIRE
              </Link>
            </li>
          </ul>
        </div>
        <div className=" w-1/3 flex flex-col items-center text-center gap-3">
          <h3 className="text-lg font-semibold text-blue-900">
            CONTACTER-NOUS
          </h3>
          <p className="text-sm text-gray-700 mt-4">031773311</p>
          <p className="text-sm text-gray-700">
            <a href="mailto:INFO@DZARTISAN.com" className="hover:underline">
              INFO@DZARTISAN.com
            </a>
          </p>
          <p className="text-sm text-gray-700">
            <a
              href="https://Dzartisan.com"
              target="_blank"
              className="hover:underline"
            >
              https://Dzartisan.com
            </a>
          </p>
        </div>
      </div>
      <div className="border-t border-gray-300 mt-8 pt-4 text-center">
        <p className="text-sm text-gray-600">
          &copy; Tous les droits sont réservés
        </p>
      </div>
    </footer>
  );
}
