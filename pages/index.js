import Head from "next/head";
import Image from "next/image";
import SEO from "../components/SEO";
import Article from "../components/Article";
import Project from "../components/Project";

const projects = [
  {
    name: "helloPython",
    description:
      "All the Python Resources in one space for Developers and AI Researchers.",
    url: "hellopython.vercel.app/",
  },
  {
    name: "pyhunt.com",
    description: "Python Data, Backend and Machine Learning Jobs Website.",
    url: "pyhunt.com",
  },
];

const Home = ({ blogs }) => {
  // console.log("Hashnode Data: ", blogs.data.user.publication.posts);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 py-2">
      <SEO
        title="Welcome"
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
            <h1 className="text-xl md:text-4xl font-bold">CodeWithKenn</h1>
            <p className="text-xs md:text-lg mt-4 font-semibold">
              {" "}
              Software Developer • Indie Hacker • Technical Writer • Content
              Creator{" "}
            </p>
          </div>
        </div>

        <div className="md:flex py-4 md:py-8 flex-row font-semibold text-center mx-auto grid grid-cols-3 my-8 md:my-10 space-x-4 md:space-x-8 text-xs md:text-sm">
          <a
            href="https://blog.codewithkenn.com"
            target="_blank"
            className="hover:bg-turbo-light-blue-600 p-1 rounded-sm hover:text-white"
          >
            Hashnode
          </a>
          <a
            href="https://dev.to/codewithkenn"
            target="_blank"
            className="hover:bg-turbo-back-blue-600 p-1 rounded-sm hover:text-white"
          >
            DEV
          </a>
          <a
            href="https://github.com/KennKibadi"
            target="_blank"
            className="hover:bg-turbo-light-blue-600 p-1 rounded-sm hover:text-white"
          >
            Twitter
          </a>
          <a
            href="https://www.linkedin.com/in/kennkibadi/"
            target="_blank"
            className="hover:bg-turbo-light-blue-600 p-1 rounded-sm hover:text-white"
          >
            LinkedIn
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

        <div className="my-3 md:my-6 py-8">
          <h1 className="text-md font-bold">Latest Articles</h1>
          <div className="flex flex-col">
            {blogs.data.user.publication.posts.map((article, index) => {
              return <Article data={article} key={index} />;
            })}
          </div>
          <a
            href="https://blog.codewithkenn.com"
            target="__blank"
            className="hover:underline font-medium text-left text-sm md:text-md my-4 md:my-8"
          >
            Read more
          </a>
        </div>
        <div className="my-2 md:my-4 py-8">
          <h1 className="text-md font-bold">Selected Projects</h1>
          <div className="flex flex-col">
            {projects.map((project, index) => {
              return <Project data={project} key={index} />;
            })}
          </div>
          <a
            href="https://github.com/KennStack01"
            target="__blank"
            className="hover:underline font-medium text-left text-sm md:text-md my-4 md:my-8"
          >
            More Projects
          </a>
        </div>
      </main>

      <footer className="flex h-6 text-xs flex-row w-full items-center justify-center border-t">
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
      </footer>
    </div>
  );
};

export const getServerSideProps = async () => {
  const articles = await fetch("https://api.hashnode.com/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      query: `
    query {
      user(username: "codewithkenn") {
        publication {
          posts(page: 0) {
            title
            coverImage
            brief
            dateAdded
            slug
          }
        }
      }
    }`,
    }),
  });
  // .then((res) => res.json())
  // .then((res) => res.data.user.publication.posts);

  return {
    props: {
      blogs: (await articles.json()) || null,
    },
  };
};

export default Home;
