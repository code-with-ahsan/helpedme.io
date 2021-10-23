const User = () => {
  const user = {
    username: "ahsanayaz",
    avatar: "https://avatars.githubusercontent.com/u/9844254?v=4",
    name: "Ahsan Ayaz",
    helped: [
      {
        name: "Obaid Nadeem",
        avatar: "https://avatars.githubusercontent.com/u/57326940?v=4",
        feedback: `Tailwind CSS is the only framework that I've seen scale on
        large teams. It’s easy to customize, adapts to any design, and
        the build size is tiny.`,
        designation: "Software Engineer",
        location: "Karachi",
      },
      {
        name: "Muhammad Salman Hassan",
        avatar: "https://avatars.githubusercontent.com/u/85054404?v=4",
        feedback: `Tailwind CSS is the only framework that I've seen scale on
        large teams. It’s easy to customize, adapts to any design, and
        the build size is tiny.`,
        designation: "Software Engineer",
        location: "Karachi",
      },
    ],
  };
  return (
    <div className="user-container px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-6 sm:pb-8 lg:pb-4 xl:pb-8 space-y-4">
      <div className="user flex flex-col items-center justify-center">
        <img className="w-1/3	rounded-full" src={user.avatar} alt={user.name} />
        <div className="font-medium text-cyan-600">{user.name}</div>
      </div>
      <form className="relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          className="focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
          type="text"
          aria-label="Find reviews"
          placeholder="Find reviews"
        />
      </form>
      {user.helped.map((helpedPerson) => {
        return (
          <div>
            <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
              <img
                className="object-cover w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                src={helpedPerson.avatar}
                alt=""
                width="384"
                height="512"
              />
              <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <blockquote>
                  <p className="text-lg font-semibold">
                    {helpedPerson.feedback}
                  </p>
                </blockquote>
                <figcaption className="font-medium">
                  <div className="text-cyan-600">{helpedPerson.name}</div>
                  <div className="text-gray-500">
                    {helpedPerson.designation}{" "}
                    {helpedPerson.location ? `, ${helpedPerson.location}` : ""}
                  </div>
                </figcaption>
              </div>
            </figure>
          </div>
        );
      })}
    </div>
  );
};

export default User;
