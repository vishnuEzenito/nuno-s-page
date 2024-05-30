import React, { useEffect, useState, useRef } from 'react';
import { Button } from "@nextui-org/react";
import { HomeData } from "@/lib/constants";
import { Typography, useMediaQuery, useTheme, Box } from '@mui/material';
import { remark } from 'remark';
import html from 'remark-html';
import '../../../fonts/fonts.css';
import Markdown from 'react-markdown'
//import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
// Function to convert markdown to HTML
     {/* @ts-ignore */}

const markdownToHtml = async (markdown) => {
  const result = await remark().use(html).process(markdown);
  return result.toString();
};

interface PostDetails {
  postId: string;
}

interface PostData {
  id: string;
  fields: {
    Date: string;
    Content: string;
    Title: string;
    AuthorName: string;
    Category: string;

  };
}

export default function BlogPost({ postId }: PostDetails) {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg'));
  const isLargeScreen = useMediaQuery(theme.breakpoints.between('lg', 'xl'));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.up('xl'));
  const [htmlContent, setHtmlContent] = useState('');
  const [blogPostData, setBlogPostData] = useState<PostData | null>(null);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching data from the CMS (replace this with your actual data fetching logic)
    {/* @ts-ignore */}

      const data = HomeData.blogapi.records.find((item) => item.id === postId);
      console.log(data)

      if (data) {
             {/* @ts-ignore */}

        setBlogPostData(data);
               {/* @ts-ignore */}

        const markdownContent = data.fields.Content;
        const convertedHtml = await markdownToHtml(markdownContent);
        setHtmlContent(convertedHtml);
      }
    };

    fetchData();
  }, [postId]);
 {/* @ts-ignore */}

  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
     {/* @ts-ignore */}

    return dateObj.toLocaleDateString('en-GB', options);
  };

  if (!blogPostData) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <link href="https://cdn.jsdelivr.net/npm/@vetixy/circular-std@1.0.0/dist/index.min.css" rel="stylesheet" />
      <Box sx={{ background: '#F4F4F4', justifyContent: 'left', alignItems: 'left', alignContent: 'left', width: '100%', height: '100%', px: isSmallScreen ? '1.25rem' : isMediumScreen ? '4.5rem' : isLargeScreen ? '4.5rem' : isExtraLargeScreen ? '5.5rem' : '4.5rem', pb: isSmallScreen ? '2.5rem' : isMediumScreen ? '3rem' : isLargeScreen ? '4rem' : isExtraLargeScreen ? '4rem' : '4rem' }}>
        <Box sx={{ pt: isSmallScreen ? '2rem' : isMediumScreen ? '3rem' : isLargeScreen ? '3rem' : isExtraLargeScreen ? '3rem' : '3rem' }}>
          <Typography variant="subtitle2" sx={{ textAlign: 'left', whiteSpace: isMediumScreen ? 'balance' : 'break-spaces', fontFamily: 'classicsans', fontWeight: 'medium', color: '#B34038', fontSize: isSmallScreen ? '14px' : '20px' }}>
            {blogPostData.fields.Category}
          </Typography>
        </Box>
        <Typography variant="h1" sx={{ whiteSpace: 'break-spaces', textAlign: 'left', fontFamily: 'classicsans', fontWeight: 'bold', color: '#333333', fontSize: isSmallScreen ? '28px' : '45px', mt: '1rem', mb: isSmallScreen ? '1rem' : '2rem' }}>
          {blogPostData.fields.Title}
        </Typography>
        <Typography variant="subtitle2" sx={{ textAlign: 'left', whiteSpace: isMediumScreen ? 'balance' : 'break-spaces', fontFamily: 'classicsans', fontWeight: 'light', color: '#333333', fontSize: isSmallScreen ? '14px' : '18px' }}>
          {blogPostData.fields.AuthorName}, {formatDate(blogPostData.fields.Date)}
        </Typography>
      </Box>


      <Box sx={{ background: '#fff', justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: '100%', height: '100%', px: isSmallScreen ? '1.25rem' : isMediumScreen ? '4.5rem' : isLargeScreen ? '4.5rem' : isExtraLargeScreen ? '5.5rem' : '4.5rem', pt: isSmallScreen ? '2rem' : isMediumScreen ? '3rem' : isLargeScreen ? '3rem' : isExtraLargeScreen ? '3rem' : '3rem',pb: isSmallScreen ? '1rem' : '2rem' }}>
       {/* @ts-ignore */}
      <img src={blogPostData.fields.Cover[0].url} alt={blogPostData.fields.Title}
      style={{
        marginLeft:'1rem',
        marginRight:'1rem',
        width: '100%',
        height: '400px',
        objectFit: 'contain',
        borderRadius : '12px',
        borderBlockColor:'#f4f4f4'
  }}

/>      </Box>
     
      <Box sx={{ background: '#fff', justifyContent: 'center', alignItems: 'center', alignContent: 'center', width: '100%', height: '100%', px: isSmallScreen ? '1.25rem' : isMediumScreen ? '4.5rem' : isLargeScreen ? '4.5rem' : isExtraLargeScreen ? '5.5rem' : '4.5rem', pt: isSmallScreen ? '1rem' : '2rem',pb: isSmallScreen ? '2.5rem' : isMediumScreen ? '3rem' : isLargeScreen ? '4rem' : isExtraLargeScreen ? '4rem' : '4rem' }}>
         {/* @ts-ignore */}
   

<Markdown
      children={blogPostData.fields.Content}
      remarkPlugins={[remarkGfm]}
      components={{
        span: ({ node, ...props }) => <span style={{ fontWeight: 'bold' }} {...props} />,
      }}
    />
        <Markdown
      children={blogPostData.fields.Content}
      remarkPlugins={[remarkGfm]}
      components={{
        span: ({ node, ...props }) => <span style={{ fontWeight: 'bold' }} {...props} />,
        li: ({ node, ...props }) => {
          const { children } = props;
                   {/* @ts-ignore */}

          const boldText = children.find((child) => child.props && child.props.style && child.props.style.fontWeight === 'bold');
                   {/* @ts-ignore */}

          const restOfText = children.filter((child) => child !== boldText);

          return (
            <li>
              {boldText}
              {restOfText}
            </li>
          );
        },
        blockquote: ({ node, ...props }) => <blockquote style={{ borderLeft: '5px solid #ccc', paddingLeft: '1rem' }} {...props} />,
        a: ({ node, ...props }) => <a style={{ color: 'blue', textDecoration: 'underline' }} {...props} />,
        code: ({ node, ...props }) => <code style={{ backgroundColor: '#f4f4f4', padding: '0.2rem 0.4rem', borderRadius: '0.25rem' }} {...props} />,
      }}
    />

      </Box>
    </>
  );
}
