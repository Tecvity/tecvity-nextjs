export async function generateMetadata({ params }) {
  const { type, sub } = params;
  
  try {
    const baseUrl = process.env.API_BASE_URL || 'http://localhost:3000/';
    const response = await fetch(`${baseUrl}/api/Services/${type}/${sub}/Meta`);
    const data = await response.json();
    
    if (!data || !data.service) {
      return {
        title: "Services || Tecvity - Delivering Creative Technological Solutions",
        description: "Explore professional services from Tecvity.",
      };
    }
    
    return {
      title: `${data.service.title} || Tecvity`,
      description: data.service.description,
      openGraph: {
        title: data.service.title,
        description: data.service.description,
        images: [
          {
            url: data.service.image,
            width: 1200,
            height: 630,
            alt: data.service.title,
          },
        ],
      },
    };
  } catch (error) {
    console.error("Error fetching service metadata:", error);
  }
  
  return {
    title: "Services || Tecvity - Delivering Creative Technological Solutions",
    description: "Explore professional services from Tecvity.",
  };
}

  
export default function portfoliolayout({ children }) {
  return <>{children}</>;
}
  