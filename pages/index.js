import Head from "next/head";
import Image from "next/image";
import SEO from "../components/SEO";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <SEO
        title="Welcome"
        description="Software Developer • Indie Hacker • Technical Writer • Content Creator"
      />

      <main className="flex w-full flex-1 flex-col items-center space-y-2 md:space-y-0 justify-center px-2 md:px-10 text-center">
        <div className="flex flex-col space-x-2 md:space-x-4 space-y-4 md:space-y-6 md:flex-row">
          <img
            src="/profile.jpg"
            loading="lazy"
            alt="avatar"
            className="object-cover mx-auto my-auto rounded-full border-turbo-light-blue-500 border-4 h-32 w-32"
          />
          <div className="my-auto mx-auto md:text-left space-y-2 md:space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold">CodeWithKenn</h1>
            <p className="text-md font-medium">
              {" "}
              Software Developer • Indie Hacker • Technical Writer • Content
              Creator{" "}
            </p>
          </div>
        </div>

        <div className="flex flex-row space-x-4 md:space-x-8 text-sm md:text-md">
          <a
            href=""
            target="_blank"
            className="hover:bg-turbo-light-blue-600 p-1 rounded-sm hover:text-white"
          >
            Blog
          </a>
          <a
            href="https://github.com/KennKibadi"
            target="_blank"
            className="hover:bg-turbo-light-blue-600 p-1 rounded-sm hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://github.com/KennStack01"
            target="_blank"
            className="hover:bg-gray-600 p-1 rounded-sm hover:text-white"
          >
            Github
          </a>
          <a
            href=""
            target="_blank"
            className="hover:bg-red-600 p-1 rounded-sm hover:text-white"
          >
            Youtube
          </a>
        </div>
      </main>

      {/* <footer className="flex h-6 text-xs w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://twitter.com/KennKibadi"
          target="_blank"
          rel="noopener noreferrer"
        >
          Built by{" "}
          <span className="hover:border-b-2 hover:border-b-cyan-500">
            Kenn Kibadi
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
