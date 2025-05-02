"use client";
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

const components = {
  img: (props) => (
    <Image
      {...props}
      width={856}
      height={600}
      alt={props.alt || "image"}
    />
  ),
  h2: ({ children, ...props }) => (
    <h2 className="sec-title mb-4 mt-4" {...props}>
      {children}
    </h2>
  ),
  p: ({ children, ...props }) => (
    <p className="sec-text mt-30" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }) => (
    <ul className="list-wrap" {...props}>
      {children}
    </ul>
  ),
  li: ({ children, ...props }) => (
    <li {...props}>
      {children}
    </li>
  ),
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
