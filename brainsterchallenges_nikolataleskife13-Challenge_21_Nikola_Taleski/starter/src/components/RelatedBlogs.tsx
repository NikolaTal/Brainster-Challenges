import Link from "next/link";
import React from "react";
import { IBlogs } from "../types";

interface Props {
  relatedBlogs: IBlogs[];
}

const RelatedBlogs: React.FC<Props> = ({ relatedBlogs }) => {
  return (
    <div>
      <h4 className="mtext-112 cl2 mb-3">Related Blogs</h4>

      <ul>
        {relatedBlogs &&
          relatedBlogs.length > 0 &&
          relatedBlogs.map((blog) => {
            return (
              <li className="mb-4" key={blog.id}>
                <Link href={`/blog/${blog.id}`}>
                  <a className="wrao-pic-w">
                    <img src={blog.img} alt="PRODUCT" className="img-fluid" />
                    <div className="p-t-8 mt-1">
                      <div className="stext-116 cl8 hov-cl1 trans-04 mb-3">
                        {blog.title}
                      </div>
                    </div>
                  </a>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default RelatedBlogs;
