'use client'

import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Image from "next/image";
import { Box } from '@mui/material';
import { BlogPost } from "@/components/Teach";

interface Params {
    postid: string;

  }

export default function BlogPostPage({ params }: { params: Params }) {
    const { postid } = params;
  return (
    <main>
      <div className="" />
      <NavBar activeComponent="/teach" />
       <BlogPost postId={postid}/>
      <Box component="section" id="footer">
        <Footer />
      </Box>
    </main>
  );
}
