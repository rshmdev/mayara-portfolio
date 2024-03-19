import Link from "next/link";
import { FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full py-3 bg-background border-t">
      <div className="flex flex-col items-center justify-center w-full gap-4 sm:flex-row">
        <p className="text-sm tracking-wide text-gray-500 dark:text-gray-400">
          © 2024 Hailey Wollf. Todos os direitos reservados
        </p>
        <div className="flex items-center space-x-4">
          <Link
            className="rounded-full border  w-9 h-9 flex items-center justify-center shadow-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            href="https://api.whatsapp.com/send?phone=5521983337429&text=Ol%C3%A1%20Hailey%2C%20vim%20pelo%20seu%20portfolio%20%F0%9F%98%8A"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">WhatsApp</span>
            <FaWhatsapp className="w-4 h-4" />
          </Link>
          <Link
            className="rounded-full border w-9 h-9 flex items-center justify-center shadow-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            href="https://www.tiktok.com/@haileywollf?_t=8kosGhiich3&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">TikTok</span>
            <FaTiktok className="w-4 h-4" />
          </Link>
          <Link
            className="rounded-full border w-9 h-9 flex items-center justify-center shadow-sm text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:border-gray-800  dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50"
            href="https://www.instagram.com/haileywollf?igsh=MXEwMnZtN3hrbjQwZw=="
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">Instagram</span>
            <FaInstagram className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
