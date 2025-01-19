"use client"
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

const components = {
    img: (props) => <Image {...props} width={856} height={600} alt={props.alt || "image"} />,
  };

const RenderMDX = ({content}) => {
  return (
    <MDXRemote source={content} components={components} />
  )
}

export default RenderMDX