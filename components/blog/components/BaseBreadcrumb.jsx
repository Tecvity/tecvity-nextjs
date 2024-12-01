export default function Breadcumb({ breadcumbTitle = "Blogs" }) {
  return (
    <div
      className="breadcumb-wrapper"
      style={{ backgroundImage: "url(/assets/img/bg/blog-bg.png)" }}
    >
      <div className="container">
        <div className="breadcumb-content">
          <h1 className="breadcumb-title">{breadcumbTitle}</h1>
        </div>
      </div>
    </div>
  );
}
