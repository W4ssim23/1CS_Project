import { Link } from "@/i18n/routing";

export default function Footer() {
  return (
    <footer class="bg-gray-100 py-8 mt-8">
      <div class="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-0">
        <div class="sm:w-1/3 w-2/3 flex flex-col items-center text-center">
          <h3 class="text-lg font-semibold text-blue-900">DZ ARTISAN</h3>
          <p class="text-sm text-gray-600 mt-4 sm:max-w-60">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        <div class=" w-1/3 flex flex-col items-center text-center">
          <h3 class="text-lg font-semibold text-blue-900">QUELQUES LIENS</h3>
          <ul class="mt-4 space-y-2 text-sm text-gray-700 font-bold">
            <li>
              <Link href="/" class="hover:underline">
                HOME
              </Link>
            </li>
            <li>
              <Link href="#" class="hover:underline">
                TROUVER UN PRO
              </Link>
            </li>
            <li>
              <Link href="/about" class="hover:underline">
                À PROPOS
              </Link>
            </li>
            <li>
              <Link href="/register" class="hover:underline">
                S'INSCRIRE
              </Link>
            </li>
          </ul>
        </div>
        <div class=" w-1/3 flex flex-col items-center text-center gap-3">
          <h3 class="text-lg font-semibold text-blue-900">CONTACTER-NOUS</h3>
          <p class="text-sm text-gray-700 mt-4">031773311</p>
          <p class="text-sm text-gray-700">
            <a href="mailto:INFO@DZARTISAN.com" class="hover:underline">
              INFO@DZARTISAN.com
            </a>
          </p>
          <p class="text-sm text-gray-700">
            <a
              href="https://Dzartisan.com"
              target="_blank"
              class="hover:underline"
            >
              https://Dzartisan.com
            </a>
          </p>
        </div>
      </div>
      <div class="border-t border-gray-300 mt-8 pt-4 text-center">
        <p class="text-sm text-gray-600">
          &copy; Tous les droits sont réservés
        </p>
      </div>
    </footer>
  );
}
