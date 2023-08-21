"use client";
// pages/index.js
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Layout from "../../components/Layout";

const Home = () => {
  const router = useRouter();
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    // Fetch data 
    fetch("https://basic-blog.teamrabbil.com/api/post-categories")
      .then((response) => response.json())
      .then((data) => setBlogItems(data));
  }, []);

  return (
    <Layout>
      {/* Section 1 */}
      {/* Section 2 */}
      {/* Section 3 - Blog Items */}
      <section className="mb-8">
        <h1 className="text-xl font-bold text-purple-700 mb-4">Home Page</h1>
        {blogItems.map((item) => (
          <div
            key={item.id}
            onClick={() => router.push(`/single-blog/${item.id}`)}
          >
            <div className="md-8">
              <ul>
                <li className="text-blue-500 hover:underline">
                  <h2>{item.name}</h2>
                  <p>{item.created_at}</p>
                  <p>{item.updated_at}</p>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default Home;
