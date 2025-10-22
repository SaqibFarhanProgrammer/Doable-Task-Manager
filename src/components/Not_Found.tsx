function Not_Found() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white bg-gradient-to-br from-black via-neutral-900 to-gray-800 px-6">
      <h1 className="text-9xl font-extrabold tracking-tight text-gray-100 mb-4">
        404
      </h1>
      <p className="text-2xl text-gray-300 mb-8 text-center">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-200"
      >
        Go Back Home
      </a>
    </div>
  );
}

export default Not_Found;
