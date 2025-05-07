export async function generateMetadata({ params }) {
  const { type, title } = params;
  
  try {
    const baseUrl = process.env.API_BASE_URL || 'http://localhost:3000/';
    const response = await fetch(`${baseUrl}/api/Portfolio/${type}/${title}/Meta`);
    const data = await response.json();
    
    if (!data || !data.portfolio) {
      return {
        title: "Portfolio || Tecvity - Delivering Creative Technological Solutions",
        description: "Explore our portfolio of successful projects at Tecvity.",
      };
    }
    
    return {
      title: `${data.portfolio.title} || Tecvity`,
      description: data.portfolio.description,
      openGraph: {
        title: `${data.portfolio.title} - ${data.portfolio.category}`,
        description: data.portfolio.contentDescription || data.portfolio.description,
        images: [
          {
            url: data.portfolio.image,
            width: 1200,
            height: 630,
            alt: data.portfolio.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching portfolio metadata:", error);
  }
  
  return {
    title: "Portfolio || Tecvity - Delivering Creative Technological Solutions",
    description: "Explore our portfolio of successful projects at Tecvity.",
  };
}

  
export default function portfoliolayout({ children }) {
  return <>{children}</>;
}
  