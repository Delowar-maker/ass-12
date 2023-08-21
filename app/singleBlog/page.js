"use client";

import React, { useState, useEffect } from "react";

import { useRouter } from "next/navigation";
import Layout from "./../../components/Layout";

const SingleBlog = () => {
  const router = useRouter();
  // const { id } = router.query;
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    if (2) {
      fetch(`https://basic-blog.teamrabbil.com/api/post-list/2}`)
        .then((response) => response.json())
        .then((data) => setBlogData(data));
    }
  }, [2]);

  return (
    <Layout>
      {/* Section 1 - Blog Details */}
      <section className="mb-8">
        {blogData ? (
          <div>
            <h2 className="text-xl font-semibold mb-4">{blogData.name}</h2>
            <p>{blogData.created_at}</p>
            <p>{blogData.updated_at}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </section>
    </Layout>
  );
};

export default SingleBlog;
