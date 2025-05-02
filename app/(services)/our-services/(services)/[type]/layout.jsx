export async function generateMetadata({ params }) {
    const { type } = params;
    
    return {
      title: `${type.charAt(0).toUpperCase() + type.slice(1)} Services`,
    };
  }
  
  export default function PortfolioLayout({ children }) {
    return <>{children}</>;
  }
  