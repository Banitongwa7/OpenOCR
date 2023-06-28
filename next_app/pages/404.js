import Image from "next/image";
import { useRouter } from "next/router";

export default function ErrorPage() {
    const router = useRouter();

    const handleRedirect = () => {
        router.push("/");
    }
  return (
    <>
      <section className="bg-white dark:bg-gray-900 ">
        <div className="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12 lg:px-20">
          <div className="w-full lg:w-1/2">
            <p className="text-2xl font-medium text-blue-500 dark:text-blue-400">
              404 Error
            </p>
            <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
              Page not found
            </h1>
            <p className="mt-4 text-gray-500 dark:text-gray-400">
            </p>

            <div className="flex items-center mt-6 gap-x-3">
              <button type="button" onClick={handleRedirect} className="w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                Allez vers la page d'accueil
              </button>
            </div>
          </div>

          <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <Image src="illustration404.svg" priority={true} alt="error illustration" width={700} height={400} />
          </div>
        </div>
      </section>
    </>
  );
}
