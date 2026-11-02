import React, { useState } from 'react';
import { X, Plus, Code, Terminal, Sparkles } from 'lucide-react';

export default function CustomSnippetModal({
  theme,
  isOpen,
  onClose,
  onAddCustomSnippet,
}) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('cli');
  const [prompt, setPrompt] = useState('user@terminal:~$');
  const [type, setType] = useState('command');
  const [content, setContent] = useState('');
  const [description, setDescription] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content.trim() || !title.trim()) return;

    const newSnippet = {
      id: `custom-${Date.now()}`,
      title: title.trim(),
      category,
      subCategory: 'custom',
      difficulty: content.length > 120 ? 'hard' : content.length > 50 ? 'medium' : 'easy',
      type,
      prompt: prompt.trim() || 'user@terminal:~$',
      content: content.replace(/\r\n/g, '\n').trim(),
      description: description.trim() || 'Custom user-provided IT command or code sample.',
      tags: ['custom', category],
    };

    onAddCustomSnippet(newSnippet);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className={`w-full max-w-lg rounded-2xl border ${theme.surfaceBorder} ${theme.surface} shadow-2xl p-6 font-mono text-xs relative`}>
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Title */}
        <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/5">
          <Terminal className={`w-5 h-5 ${theme.primary}`} />
          <h3 className="text-sm font-bold text-white uppercase tracking-wider">
            Add Custom IT Snippet
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-gray-400 mb-1 font-semibold">Snippet Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Docker Swarm Deploy or Ansible Playbook"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Category & Type */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-gray-400 mb-1 font-semibold">Category</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="networking" className="bg-gray-900">Networking & SSH</option>
                <option value="cli" className="bg-gray-900">CLI & Terminal</option>
                <option value="devops" className="bg-gray-900">DevOps & Cloud</option>
                <option value="programming" className="bg-gray-900">Code & Syntax</option>
                <option value="database" className="bg-gray-900">SQL & Database</option>
                <option value="configs" className="bg-gray-900">Configs & Infra</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-400 mb-1 font-semibold">Format</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                <option value="command" className="bg-gray-900">Single Line Command</option>
                <option value="snippet" className="bg-gray-900">Multi-Line Code Block</option>
              </select>
            </div>
          </div>

          {/* Content */}
          <div>
            <label className="block text-gray-400 mb-1 font-semibold">Code / Command Content *</label>
            <textarea
              required
              rows={4}
              placeholder={type === 'command' ? 'ssh -p 2244 user@vpn.internal' : 'def handler(event, context):\n    return {"statusCode": 200}'}
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-gray-200 font-mono text-xs focus:outline-none focus:border-emerald-500 leading-relaxed"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-400 mb-1 font-semibold">Description / Notes</label>
            <input
              type="text"
              placeholder="What does this command or code do?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-lg px-3 py-2 text-gray-200 focus:outline-none focus:border-emerald-500"
            />
          </div>

          {/* Action buttons */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-white/5">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg ${theme.primaryBg} text-black font-bold transition-all shadow-md`}
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Load Snippet</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
