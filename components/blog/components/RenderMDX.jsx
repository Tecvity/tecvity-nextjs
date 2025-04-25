"use client"
import { MDXRemote } from 'next-mdx-remote';
import Image from 'next/image';

const components = {
    img: (props) => <Image {...props} width={856} height={600} alt={props.alt || "image"} />,
  };

const RenderMDX = ({content}) => {
  if (!content) {
    return <div>No content available</div>;
  }
  return (
    <MDXRemote {...content} components={components} />
  )
}

export default RenderMDX