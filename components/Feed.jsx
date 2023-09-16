"use client";

import { useEffect, useState } from "react";
import PromptCard from "@components/PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  // console.log("data in PromptCardList", data);
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      // console.log("response", response.json);
      const data = await response.json();
      // console.log("data", data);
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>
      {console.log("posts", posts)}
      {/* <PromptCard /> */}
      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};
export default Feed;
