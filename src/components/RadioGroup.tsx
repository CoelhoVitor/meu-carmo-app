interface RadioGroupProps {
  name: string;
  options: string[];
}

export default function RadioGroup({ name, options }: RadioGroupProps) {
  return (
    <div>
      {options.map((option, index) => (
        <div key={index} className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name={name}
              value={option}
              className="form-radio text-blue-500"
            />
            <span className="ml-2">{option}</span>
          </label>
        </div>
      ))}
    </div>
  );
}