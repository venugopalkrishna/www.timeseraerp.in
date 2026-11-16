// API layer for the contact form. Kept separate from the UI so it can be swapped for a real endpoint.
export async function submitInquiry(payload) {
  // Replace with: await fetch('/api/inquiry', { method: 'POST', body: JSON.stringify(payload) })
  await new Promise((r) => setTimeout(r, 900));
  console.info('Inquiry submitted', payload);
  return { ok: true };
}
