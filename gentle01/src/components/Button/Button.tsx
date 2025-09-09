import "./button.css";

interface Props {
  label: string;
  parentMethod: () => void;
}

export function Button({ label, parentMethod }: Props) {
  return (
    <button onClick={parentMethod} className="custom-button">
      {label}
    </button>
  );
}
