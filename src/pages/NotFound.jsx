import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Halaman tidak ditemukan...</h1>
      <p>
        Maaf, halaman yang anda tuju tidak ada.{" "}
        <Link to="/" className="transition hover:text-amber-500">
          Kembali
        </Link>
      </p>
    </div>
  );
}
