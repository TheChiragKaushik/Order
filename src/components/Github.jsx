import React from "react";
import { useLoaderData } from "react-router-dom";

export const githubData = async () => {
  const userResponse = await fetch(
    "https://api.github.com/users/thechiragkaushik"
  );
  const reposResponse = await fetch(
    "https://api.github.com/users/TheChiragKaushik/repos"
  );

  if (!userResponse.ok || !reposResponse.ok) {
    throw new Error("Failed to fetch data");
  }

  const userData = await userResponse.json();
  const reposData = await reposResponse.json();

  return { userData, reposData };
};

function Github() {
  const { userData, reposData } = useLoaderData();

  if (!Array.isArray(reposData)) {
    return <div>Error: Repositories data is not an array.</div>;
  }

  return (
    <>
      <div className="flex bg-gray-800 p-4 mt-5">
        <div className="text-center m-4 text-white p-4 text-3xl">
          <img src={userData.avatar_url} alt="Github PFP" />
        </div>
        <div className="text-center m-4 text-white p-4 text-3xl">
          Github followers: {userData.followers}
        </div>
        <div className="text-center m-4 text-white p-4 text-3xl">
          {userData.bio}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {reposData.map((repo) => (
          <>
            <div
              key={repo.id}
              className="bg-gray-800 p-4 rounded-md text-white shadow-md"
            >
              <div>
                <h1 className="text-xl font-bold">{repo.name}</h1>
                <p>{repo.description}</p>
              </div>
              <div className="p-1 mt-1">
                <a
                  className="bg-black p-2 rounded-md"
                  href={repo.html_url}
                  target="_blank"
                >
                  View
                </a>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}

export default Github;
