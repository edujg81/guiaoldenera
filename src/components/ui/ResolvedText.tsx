import React from 'react';

/**
 * Props para el componente ResolvedText.
 */
interface ResolvedTextProps {
  text: string;
  className?: string;
}

/**
 * Convierte las etiquetas de formato de los textos de la API en elementos React.
 *
 * Ejemplo:
 *   "Inflige +<resolved>15</resolved> % de daño..."
 *   → "Inflige +[15] % de daño..." con "15" resaltado.
 */
export const ResolvedText: React.FC<ResolvedTextProps> = ({ text, className = '' }) => {
  if (!text) return null;

  type FormatTag = 'resolved' | 'b' | 'strong' | 'i' | 'em';
  interface NodeFrame {
    tag: FormatTag | null;
    children: React.ReactNode[];
    key: number;
  }

  const root: NodeFrame = { tag: null, children: [], key: 0 };
  const stack = [root];
  const tokens = text.split(/(<\/?(?:resolved|b|strong|i|em)\s*>|<br\s*\/?>)/gi);
  let keyCounter = 1;

  const createNode = (frame: NodeFrame): React.ReactNode => {
    const children = frame.children;
    switch (frame.tag) {
      case 'resolved':
        return <span key={frame.key} className="text-yellow-300 font-bold rounded">{children}</span>;
      case 'b':
      case 'strong':
        return <strong key={frame.key} className="font-bold">{children}</strong>;
      case 'i':
      case 'em':
        return <em key={frame.key} className="italic">{children}</em>;
      default:
        return children;
    }
  };

  for (const token of tokens) {
    if (!token) continue;

    if (/^<br\s*\/?>$/i.test(token)) {
      stack[stack.length - 1].children.push(<br key={keyCounter++} />);
      continue;
    }

    const tagMatch = token.match(/^<(\/?)(resolved|b|strong|i|em)\s*>$/i);
    if (!tagMatch) {
      stack[stack.length - 1].children.push(token);
      continue;
    }

    const [, closing, rawTag] = tagMatch;
    const tag = rawTag.toLowerCase() as FormatTag;
    if (closing) {
      if (stack.length > 1 && stack[stack.length - 1].tag === tag) {
        const frame = stack.pop();
        if (frame) stack[stack.length - 1].children.push(createNode(frame));
      } else {
        stack[stack.length - 1].children.push(token);
      }
    } else {
      stack.push({ tag, children: [], key: keyCounter++ });
    }
  }

  while (stack.length > 1) {
    const frame = stack.pop();
    if (frame) stack[stack.length - 1].children.push(createNode(frame));
  }

  return (
    <span className={className}>
      {root.children}
    </span>
  );
};

export default ResolvedText;