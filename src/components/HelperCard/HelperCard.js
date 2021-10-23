import { Link } from "react-router-dom";

const HelperCard = ({ user }) => {
  const helpedAvatarLimit = 4;
  const helpedCount = user.helped.length - helpedAvatarLimit;
  const helpedAvatars =
    helpedCount > 0 ? user.helped.slice(0, helpedAvatarLimit) : user.helped;
  return (
    <li>
      <Link
        to={`/user/${user.username}`}
        className="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200"
      >
        <dl className="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
          <div>
            <dt className="sr-only">Title</dt>
            <dd className="group-hover:text-white leading-6 font-medium text-black">
              {user.name}
            </dd>
          </div>
          <div>
            <dt className="sr-only">Category</dt>
            <dd className="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
              GitHub Url
            </dd>
          </div>
          <div className="col-start-2 row-start-1 row-end-3">
            <dt className="sr-only">Users</dt>
            <dd className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
              {helpedAvatars.map((person, index) => {
                return (
                  <img
                    key={index}
                    src={person.avatar}
                    alt={person.name}
                    width="48"
                    height="48"
                    className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white"
                  />
                );
              })}
              {helpedCount > 0 && (
                <div
                  width="48"
                  height="48"
                  className="text-xs w-7 flex justify-between items-center h-7 rounded-full bg-gray-100 border-2 border-white"
                >
                  <div>{helpedCount <= 99 ? `+${helpedCount}` : `99+`}</div>
                </div>
              )}
            </dd>
          </div>
        </dl>
      </Link>
    </li>
  );
};

export default HelperCard;
