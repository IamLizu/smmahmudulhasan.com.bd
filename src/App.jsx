import lib from "./lib.json";

export default function App() {
  return (
    <div className="fixed top-0 bottom-0 right-0 left-0 flex justify-center items-center z-10 dark:bg-slate-900">
      <div className="lg:flex gap-20 items-center">
        <div className="space-y-5 flex justify-center items-center flex-col lg:block">
          <img
            className="object-center h-36 w-36 md:h-44 md:w-44 lg:h-52 lg:w-52 rounded-full lg:rounded-md"
            src={lib.image}
            alt={lib.name}
          />
          <div className="space-y-4">
            <div className="space-y-1 flex justify-center items-center flex-col lg:block">
              <h1 className="text-xl md:text-2xl lg:text-4xl dark:text-gray-100">
                {lib.name}
              </h1>
              <p className="text-base lg:text-xl opacity-70 dark:text-slate-400">
                {lib.position}
              </p>
            </div>
          </div>
        </div>

        <div className="text-base lg:text-xl space-y-10 bg-gray-100 px-5 lg:px-10 py-10 m-5 rounded-lg flex flex-col justify-between">
          <div>
            {lib.aboutList.map((item, index) => (
              <p
                key={index}
                className="text-gray-800 opacity-95 font-sans py-1"
              >
                {item}
              </p>
            ))}
          </div>

          <div className="flex">
            {lib.links.map((link, index) => (
              <li key={index} className="list-none">
                <a href={link.url} className="text-indigo-600 text-base">
                  {link.name}
                </a>
                <span>
                  &nbsp;
                  {lib.links.length - 1 !== index && (
                    <span className="text-gray-700">/</span>
                  )}
                  &nbsp;
                </span>
              </li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
