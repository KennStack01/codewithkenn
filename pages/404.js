import Head from "next/head";
import Image from "next/image";
import SEO from "../components/SEO";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-2">
      <SEO
        title="404"
        description="Software Developer • Indie Hacker • Technical Writer • Content Creator"
      />

      {/* <main className="flex w-full flex-1 flex-col items-center space-y-2 justify-center px-2 md:px-10 text-center"> */}
      <main className="space-y-2 px-2 md:px-10 flex flex-col">
        <div className="flex flex-col text-center space-x-2 md:space-x-4 space-y-4 md:space-y-6">
          <img
            src="/profile.jpg"
            loading="lazy"
            alt="avatar"
            className="object-cover mx-auto my-auto rounded-full border-turbo-light-blue-500 border-4 h-24 w-24 md:h-32 md:w-32"
          />
          <div className="my-auto mx-auto space-y-2 md:space-y-4">
            <h1 className="text-xl md:text-4xl font-bold">
              What are you looking for?
            </h1>
          </div>
        </div>
        <div className="flex py-4 md:py-8 flex-row font-semibold text-center mx-auto my-8 md:my-10 space-x-4 md:space-x-8 text-xs md:text-sm">
          <a
            href="https://wwww.codewithkenn.com"
            className="hover:bg-turbo-light-blue-600 p-1 mx-auto rounded-sm hover:text-white"
          >
            Homepage
          </a>
        </div>
      </main>

      {/* <footer className="flex h-6 text-xs flex-row w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://twitter.com/KennKibadi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="hover:border-b-2 hover:border-b-cyan-500">
            Kenn Kibadi
          </span>
        </a>
        <span className="mx-2"> {` © ` + new Date().getFullYear()}</span>
      </footer> */}
    </div>
  );
};

export default NotFound;
