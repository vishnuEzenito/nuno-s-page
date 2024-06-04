import Footer from "@/components/Footer";
import NavBar from "@/components/Navbar";
import Image from "next/image";
import { Box } from '@mui/material';
import { BlogPost } from "@/components/Teach";
import useProductList from '@/lib/hooks';

interface Params {
    postid: string;
  }
  
  export async function generateStaticParams() {
    const { fetchBlogData } = useProductList();

    // Fetch the list of blog post IDs or generate them dynamically
    const postIds = await fetchBlogData();
                {/* @ts-ignore */}
    return postIds.map((postId) => ({
      postid: postId.id,
    }));
  }
  
  export default function BlogPostPage({ params }: { params: Params }) {
    const { postid } = params;
  
    return (
      <main>
        <div className="" />
        <NavBar activeComponent="/teach" />
        <BlogPost postId={postid} />
        <Box component="section" id="footer">
          <Footer />
        </Box>
      </main>
    );
  }