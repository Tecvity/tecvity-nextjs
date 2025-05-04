export async function generateMetadata({ params }) {
  const { title } = params;
  
  try {
    const baseUrl = process.env.API_BASE_URL || 'http://localhost:3000/';
    const response = await fetch(`${baseUrl}/api/Blog/${title}/Meta`);
    const data = await response.json();
    
    if (!data || !data.blog) {
      return {
        title: "Blog Details || Tecvity - Delivering Creative Technological Solutions",
        description: "Explore in-depth blog posts from Tecvity.",
      };
    }
    
    return {
      title: `${data.blog.title} || Tecvity`,
      description: data.blog.description,
      openGraph: {
        title: data.blog.title,
        description: data.blog.description,
        images: [
          {
            url: data.blog.image,
            width: 1200,
            height: 630,
            alt: data.blog.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching blog metadata:", error);
  }
  
  return {
    title: "Blog Details || Tecvity - Delivering Creative Technological Solutions",
    description: "Explore in-depth blog posts from Tecvity.",
  };
}


export default function BlogLayout({ children }) {
  return <>{children}</>;
}
