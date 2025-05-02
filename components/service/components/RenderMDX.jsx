"use client";
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

const components = {
  img: (props) => (
    <div className="col-xl-12">
      <div className="service-inner-thumb mb-80 wow img-custom-anim-top animated">
        <Image
          width={1296}
          height={700}
          className="w-100"
          {...props}
          alt={props.alt || "image"}
        />
      </div>
    </div>
  ),
  h2: ({ children, ...props }) => (
    <div className="col-xl-8">
      <div className="title-area mb-35">
        <h2 className="sec-title" {...props}>{children}</h2>
      </div>
    </div>
  ),
  h3: ({ children, ...props }) => (
    <div className="col-xl-8">
      <div className="title-area mb-35">
        <h3 className="sec-title" {...props}>{children}</h3>
      </div>
    </div>
  ),
  p: ({ children, ...props }) => {
    // Normalize children into an array
    const childArray = Array.isArray(children) ? children : [children];
  
    // Check if all children are images
    const onlyImages = childArray.every(child =>
      child?.type?.name === 'img' || child?.type === 'img'
    );
  
    // If it's only images, skip rendering <p> and return them as-is
    if (onlyImages) {
      return <>{childArray}</>;
    }
  
    // Default rendering for normal paragraphs
    return (
      <div className="col-xl-8">
        <div className="title-area mb-35">
          <p className="sec-text mt-10 mb-40" {...props}>{children}</p>
        </div>
      </div>
    );
  },
};

const RenderMDX = ({ content }) => {
  if (!content) {
    return <div>No content available</div>;
  }

  return (
    <MDXRemote {...content} components={components} />
  );
};

export default RenderMDX;
