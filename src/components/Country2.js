export default function Country2({ country }) {
  return (
    <div className="country">
      <p>{country.name}</p>
      <p>{country.phone}</p>
      <p>{country.capital}</p>
      <p>{country.emoji}</p>
    </div>
  );
}
