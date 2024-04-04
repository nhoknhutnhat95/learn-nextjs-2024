'use client';

export default function ButtonLogin() {
  const handleClick = async () => {
    const data = await fetch('/api/login')
    console.log(await data.json());
  };
  return <button onClick={handleClick} className="bg-red-700">Click</button>;
}
