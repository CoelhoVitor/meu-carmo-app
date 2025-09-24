import RadioGroup from './RadioGroup';

interface RadioSectionProps {
  title: string;
  name: string;
  options: string[];
}

export default function RadioSection({ title, name, options }: RadioSectionProps) {
  return (
    <div className="mb-6">
      <span className="block text-sm font-medium text-gray-700">{title}</span>
      <RadioGroup name={name} options={options} />
    </div>
  );
}