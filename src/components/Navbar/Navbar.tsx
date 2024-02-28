
export const Navbar = () => {
  return (
    <header>
      <nav className="bg-black h-[110px] flex">
        <div className="container mx-auto flex justify-between items-center">
        <div>
            <ul className="flex space-x-4 items-center">
              <li>
                <a href="/" className="text-white font-bold text-xl">Logo</a>
              </li>
              <li>
                <a href="/genre" className="text-white hover:text-gray-300">Genre</a>
              </li>
              <li>
                <a href="/animes" className="text-white hover:text-gray-300">Animes</a>
              </li>
              <li>
                <a href="/movies" className="text-white hover:text-gray-300">Movies</a>
              </li>
              <li>
                <a href="/news" className="text-white hover:text-gray-300">News</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
