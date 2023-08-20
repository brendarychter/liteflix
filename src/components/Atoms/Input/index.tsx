export const Input = ({value, onChange}: any): JSX.Element => {
  return (
    <input
      type="text"
      placeholder="Título"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
