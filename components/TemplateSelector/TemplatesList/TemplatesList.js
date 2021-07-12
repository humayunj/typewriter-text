import TemplateCard from "../TemplateCard/TemplateCard";

export default function TemplatesList({ templates, onTemplateSelect }) {
  return (
    <div className="flex flex-col w-screen items-center sm:flex-row max-w-screen-lg flex-wrap gap-5">
      {templates.map((t, i) => {
        return (
          <TemplateCard
            key={i}
            title={t.title}
            imgURL={t.img}
            onClick={() => onTemplateSelect(i)}
          />
        );
      })}
    </div>
  );
}
