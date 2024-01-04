import React from "react";
import "bootstrap/dist/css/bootstrap.css";

interface DetailsBlockProps {
  title: string;
  image: string;
}

const DetailsBlock = ({ title, image }: DetailsBlockProps) => {
  return (
    <div className="detailsBlock container">
      <div className="row justify-content-center my-5">
        <div className="col-12 col-md-8 col-lg-7 detailsBlockText">
          <p className="titleAbout">ABOUT</p>
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore
            consequuntur amet dignissimos placeat mollitia molestiae accusamus
            aut voluptatibus. Iusto vero aut quis deserunt consequatur eius
            obcaecati officiis beatae voluptates. Corporis iusto commodi nostrum
            impedit quo quas perferendis sequi aut deleniti doloribus earum
            ducimus excepturi officiis illum dignissimos ab aperiam velit.
          </p>
        </div>
        <div className="col-12 col-md-4 col-lg-4">
          <img className="detailsBlockImages" src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DetailsBlock;
