'use client'

// pages/blog.js
import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout';

import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Blog = () => {
  const router = useRouter();
  const [blogItems, setBlogItems] = useState([]);

  useEffect(() => {
    // Fetch data 
    fetch('https://basic-blog.teamrabbil.com/api/post-categories')
      .then(response => response.json())
      .then(data => setBlogItems(data));
  }, []);

  return (
    <Layout>
      {/* Section 1 - Blog Items */}
      <section className="mb-8">
      <h2 className="text-xl font-semibold mb-4">Latest Blog Posts</h2>
        <ul>
         {blogItems.map(item => (
          <li key={item.id} className="mb-4">
          <Link legacyBehavior  href={`/single-blog/${item.id}`}>
            <a className="text-blue-500 hover:underline">
              <h3>{item.name}</h3>
              <p>{item.created_at}</p>
              <p>{item.updated_at}</p>
            </a>
          </Link>
          </li>
        ))}
        </ul>
      </section>
    </Layout>
  );
};

export default Blog;
