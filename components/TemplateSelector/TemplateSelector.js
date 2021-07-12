import TemplatesList from "./TemplatesList/TemplatesList";

export default function TemplateSelector({templates, onTemplateSelect}) {
  return (
    <div className="container mx-auto flex flex-col items-center ">
      <h1 className="text-xl font-bold  mb-6">Select a template</h1>
      <TemplatesList
        templates={templates}
        onTemplateSelect={onTemplateSelect}
      />
    </div>
  );
}
