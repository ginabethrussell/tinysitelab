export const postContactForm = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  if (!res.ok) {
    throw new Error(result?.message || "An unknown error occurred");
  }

  return result;
};
