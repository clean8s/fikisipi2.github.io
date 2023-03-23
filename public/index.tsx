import {
  LocationProvider,
  Router,
  Route,
  lazy,
  ErrorBoundary,
  prerender as ssr,
} from "preact-iso";
import Home from "./home";
import * as React from "preact";
import { tw } from "twind";
import withTwind from "@twind/wmr";
import { createContext } from "preact";
import { BlogContext } from "./home";
import { blogPosts } from "./post";

function Logo2() {
  return (
    <svg
      version="1.2"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 436 102"
      width="152"
      height="35"
    >
      <path
        fill="#fff"
        d="m30.8 47.7v-9.4h41.3v9.4zm24.4-27.7v9.7q-0.9 0-1.8 0-0.7 0-1.4 0-2.9 0-3.8 1.6-1 1.7-1 4v39.7h-11.3v-39.7q0-5.5 1.7-8.9 1.8-3.5 5-5.1 3.3-1.7 7.5-1.7 1.2 0 2.5 0.1 1.3 0.1 2.6 0.3zm16.9 55h-11.4v-36.7h11.4zm-5.6-42.5q-2.8 0-4.7-1.9-1.8-1.9-1.8-4.6 0-2.7 1.8-4.5 1.9-1.9 4.7-1.9 2.6 0 4.4 1.9 1.9 1.8 1.9 4.5 0 2.7-1.9 4.6-1.8 1.9-4.4 1.9zm25.5 33.3v9.2h-11.3v-55.5h11.3v31.9l11.9-13.2h14.2l-13.8 14.6 13.4 22.2h-13.1l-8.2-13.8zm42 9.2h-11.3v-36.7h11.3zm-5.7-42.5q-2.8 0-4.7-1.9-1.8-1.9-1.8-4.6 0-2.7 1.8-4.5 1.9-1.9 4.7-1.9 2.6 0 4.4 1.9 2 1.8 2 4.5 0 2.7-2 4.6-1.8 1.9-4.4 1.9zm11.6 30.8h10.7q0.2 2 1.5 3.1 1.4 1.1 4 1.1 2.7 0 3.9-0.9 1.3-0.9 1.3-2.3 0-0.8-0.7-1.6-0.6-0.8-2.6-1.3l-6.8-1.4q-5.1-1.1-7.6-3.6-2.5-2.5-2.5-7.3 0-3.8 2-6.5 2.1-2.7 5.5-4.1 3.5-1.5 7.9-1.5 4.2 0 7.5 1.6 3.3 1.5 5.1 4.3 1.9 2.8 1.9 6.6h-10.8q0-2-1.1-3.1-1.1-1.1-3.1-1.1-1.9 0-3.1 0.9-1.1 0.9-1.1 2.4 0 2.3 4 3.2l6.8 1.5q4.5 0.9 6.9 3.3 2.4 2.3 2.4 6.7 0 3.9-2 6.7-2.1 2.9-5.8 4.4-3.6 1.5-8.4 1.5-7.3 0-11.6-3.4-4.2-3.6-4.2-9.2zm49.2 11.7h-11.3v-36.8h11.3zm-5.7-42.5q-2.7 0-4.6-1.8-1.9-1.9-1.9-4.6 0-2.8 1.9-4.6 1.9-1.8 4.6-1.8 2.6 0 4.5 1.8 1.9 1.8 1.9 4.6 0 2.7-1.9 4.6-1.9 1.8-4.5 1.8zm25.6 60.1h-11.4v-54.3h10.7l0.6 4.4q1.5-2.5 4.8-4.1 3.2-1.5 7.1-1.5 5.1 0 9 2.3 3.9 2.2 6.1 6.5 2.2 4.2 2.2 10.1 0 5.9-2 10.4-2 4.5-5.9 7.1-3.8 2.5-9.3 2.5-3.9 0-7.1-1.3-3.2-1.3-4.8-3.4zm0-36q0 2.7 1.1 4.9 1.2 2 3.2 3.2 2.1 1.1 4.7 1.1 2.7 0 4.6-1.2 2-1.1 3-3.2 1.1-2.1 1.1-4.8 0-2.7-1.1-4.8-1-2-3-3.2-1.9-1.2-4.6-1.2-2.6 0-4.7 1.2-2 1.1-3.2 3.2-1.1 2-1.1 4.8zm47 18.4h-11.3v-36.7h11.3zm-5.7-42.5q-2.8 0-4.7-1.9-1.8-1.9-1.8-4.6 0-2.7 1.8-4.5 1.9-1.9 4.7-1.9 2.6 0 4.4 1.9 2 1.8 2 4.5 0 2.7-2 4.6-1.8 1.9-4.4 1.9z"
      />
    </svg>
  );
}

import L from "./logo2.svg";

function Header() {
  return (
    <div
      tw={
        "sticky py-4 w-full top-0 border-b-[1px] border-[#ffffff28] z-40 bg-[#00000080]"
      }
      style={{
        backgroundf:
          "radial-gradient(at center top, #4e4363a0, #1D1726A0, #000000a0)",
        backdropFilter: "blur(3px)",
        "-webkit-backdrop-filter": "blur(3px)",
      }}
    >
      <div
        tw={
          "container mx-auto px-4 font-semibold text-slate-300 text-xl flex justify-center"
        }
      >
        <a href="/">
          <img src={L} tw="h-[35px]" />
        </a>
      </div>
    </div>
  );
}

function NotFound() {
  return (
    <div tw="container mx-auto px-8 py-6 rounded-lg bg-white text-black mt-10">
      Not found.
    </div>
  );
}
import PostComponent from "./post";
import { PrerenderResult } from "preact-iso/prerender";

export function App() {
  let routes = (
    <>
      {blogPosts.map((v) => {
        return (
          <Route
            key={v.slug}
            path={v.url}
            component={() => <PostComponent post={v} />}
          />
        );
      })}
    </>
  );

  return (
    <LocationProvider>
      <div className={tw`min-h-[100vh] app text-white`}>
        <BlogContext.Provider value={blogPosts}>
          <Header />
          <ErrorBoundary>
            <Router>
              <Route path="/" component={Home} />
              {routes}
              <Route default component={NotFound} />
            </Router>
          </ErrorBoundary>
          <Footer />
        </BlogContext.Provider>
      </div>
    </LocationProvider>
  );
}

const navigation = {
  main: [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Jobs", href: "#" },
    { name: "Press", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Partners", href: "#" },
  ],
  social: [
    {
      name: "Twitter",
      href: "https://twitter.com/fikisipi",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
        </svg>
      ),
    },
    {
      name: "GitHub",
      href: "https://github.com/fikisipi",
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

function Footer() {
  return (
    <footer tw="">
      <div tw="mx-auto max-w-7xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
        <div tw="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              tw="text-gray-400 hover:text-gray-500"
            >
              <span tw="sr-only">{item.name}</span>
              <item.icon tw="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p tw="mt-8 text-center text-base text-gray-400">
          &copy; 2022 @fikisipi
        </p>
      </div>
    </footer>
  );
}
import { toStatic } from "hoofd/preact";

// import tailwind from "@twind/preset-tailwind"
const { hydrate, prerender: P } = withTwind(
  {
    theme: {
      extend: {
        gridTemplateColumns: {
          aa: "500px 1fr",
        },
      },
    },
  },
  (data) => <App {...data} />
);

async function prerender(data: any): Promise<PrerenderResult> {
  let a: any = await P(data);
  const head = toStatic();
  const elements = new Set([
    ...head.links.map((props) => ({ type: "link", props })),
    ...head.metas.map((props) => ({ type: "meta", props })),
    ...head.scripts.map((props) => ({ type: "script", props })),
  ]);
  a = {
    ...a,
    head: {
      lang: head.lang,
      title: head.title,
      elements,
    },
  };
  console.log(a);
  return a;
}
export { prerender };

export function setupApp() {
  hydrate(<App />);
}
