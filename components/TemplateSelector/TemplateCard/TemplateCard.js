import Image from "next/image";

export default function TemplateCard({ title, imgURL, onClick }) {
  return (
    <div
      className="rounded  p-1 cursor-pointer"
      style={{ boxShadow: "0px 0px 4px 4px #0002" }}
      onClick={onClick}
    >
      <div style={{ width: "220px", height: "300px", overflow: "hidden" }}>
        <Image
          src={imgURL}
          alt={`${title} template preview image`}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </div>
      {/* <h2>{title}</h2> */}
    </div>
  );
}
