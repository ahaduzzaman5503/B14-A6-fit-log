import Link from "next/link";

const NotFound = () => {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
          404
        </h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-900">
          Page Not Found
        </h2>

        <p className="mt-3 text-gray-500">
          Sorry, the page you are looking for doesn&apos;t exist.
        </p>

        <Link
          href="/"
          className="inline-block mt-6 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
