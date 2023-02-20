import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { AiOutlineGoogle } from "react-icons/ai";

const Login: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign In | Taskify</title>
        <meta
          name="description"
          content="Sign in to Taskify to be able to save your todo's"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="grid min-h-[100dvh] place-items-center bg-slate-50">
        <div className="flex w-full max-w-[500px] flex-col gap-3 rounded-lg bg-white p-8 shadow-2xl">
          <div className="text-center text-2xl font-semibold">Sign In</div>

          <div className="flex flex-col gap-3">
            <form className="flex flex-col gap-1">
              <div className="mt-4 flex flex-col gap-1">
                <label htmlFor="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="mt-1 rounded-md bg-slate-50 px-4 py-2 transition-all duration-300 hover:shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                />
              </div>
              <div className="mt-4 flex flex-col">
                <label htmlFor="password" className="text-sm font-semibold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="mt-1 rounded-md bg-slate-50 px-4 py-2 transition-all duration-300 hover:shadow focus:border-transparent focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2"
                />
              </div>

              <button
                type="submit"
                className="mt-4 flex w-full items-center justify-center rounded-md bg-slate-500 px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-slate-600"
              >
                Sign in
              </button>
            </form>

            <div className="flex items-center justify-center">
              Don&apos;t have an account?{" "}
              <Link
                href="/signin"
                className="ml-1 font-semibold text-slate-500 transition-all duration-300 hover:text-slate-600"
              >
                Sign up
              </Link>
            </div>
          </div>

          <div className="seperator-default font-semibold text-slate-400 ">
            or
          </div>

          {/** sign in using google */}
          <button
            className="flex w-full items-center justify-center gap-2 rounded border border-slate-500 bg-white px-4 py-2 text-sm font-medium text-slate-500 transition-all duration-300 hover:bg-slate-200"
            onClick={() => void signIn("google")}
          >
            <AiOutlineGoogle size={25} />
            Sign in with Google
          </button>
        </div>
      </main>
    </>
  );
};

export default Login;
