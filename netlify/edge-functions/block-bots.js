const BLOCKED = [
  'gptbot', 'chatgpt-user', 'ccbot', 'anthropic-ai', 'claude-web',
  'bytespider', 'amazonbot', 'cohere-ai', 'perplexitybot', 'youbot',
  'ahrefsbot', 'semrushbot', 'dotbot', 'mj12bot', 'dataforseobot',
  'petalbot', 'blexbot', 'seznambot'
];

export default async (request, context) => {
  const ua = (request.headers.get('user-agent') || '').toLowerCase();
  if (BLOCKED.some(bot => ua.includes(bot))) {
    return new Response('Forbidden', { status: 403 });
  }
  return context.next();
};

export const config = { path: '/*' };
