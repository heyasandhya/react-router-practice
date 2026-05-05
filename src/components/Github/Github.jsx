import React from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();

  return (
    <div className="bg-gray-500 text-white text-3xl m-4 text-center p-4 rounded-xl">
      
      <p className="mb-4">
        Github Followers: {data.followers}
      </p>

      {/* YOUR GITHUB PROFILE IMAGE */}
      <img
        src={data.avatar_url}
        alt="Sandhya GitHub"
        className="mx-auto w-40 h-40 rounded-full border-4 border-white shadow-lg"
      />

      {/* OPTIONAL: USERNAME */}
      <p className="mt-4 text-xl">@heyasandhya</p>

    </div>
  );
}

export default Github;

export const githubinfoloader = async () => {
  const response = await fetch(
    "https://api.github.com/users/heyasandhya"
  );
  return response.json();
};