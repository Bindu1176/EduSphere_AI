'use client';

import { useState, useEffect } from 'react';
import { Search, Filter, MessageSquare, Heart, Share2, Plus, X, Image as ImageIcon, Send, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function KnowledgeHubPage() {
  const [user, setUser] = useState<any>(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState<string | null>(null);
  const [newPostContent, setNewPostContent] = useState('');
  
  const [posts, setPosts] = useState([
    { id: 1, author: 'Alex Johnson', role: 'Senior', avatar: 'AJ', content: 'Just uploaded the revised notes for Advanced Algorithms. Focusing on NP-Completeness for the upcoming mid-sems!', likes: 24, comments: 12, time: '2h ago', category: 'Academic' },
    { id: 2, author: 'Sarah Williams', role: 'Senior', avatar: 'SW', content: 'Anyone interested in a study group for Cloud Computing? Meeting at the library at 4 PM today.', likes: 15, comments: 8, time: '4h ago', category: 'Social' },
    { id: 3, author: 'Rahul Gupta', role: 'Senior', avatar: 'RG', content: 'Important: The scholarship deadline for the Merit Grant has been extended to May 30th. Don\'t miss out!', likes: 42, comments: 5, time: '6h ago', category: 'Scholarship' },
  ]);

  useEffect(() => {
    const storedUser = localStorage.getItem('edusphere_user');
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const handleCreatePost = () => {
    if (!newPostContent.trim()) return;
    
    const newPost = {
      id: posts.length + 1,
      author: user?.name || 'Senior',
      role: 'Senior',
      avatar: user?.name?.substring(0, 2).toUpperCase() || 'SR',
      content: newPostContent,
      likes: 0,
      comments: 0,
      time: 'Just now',
      category: 'General'
    };
    
    setPosts([newPost, ...posts]);
    setNewPostContent('');
    setShowCreateModal(false);
    alert('Post created successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 pb-12">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Knowledge Hub 💡</h1>
          <p className="text-light-muted">Connect with seniors, share resources, and stay informed.</p>
        </div>
        {user?.role === 'senior' && (
          <Button onClick={() => setShowCreateModal(true)} className="flex items-center gap-2 bg-primary shadow-lg shadow-primary/20">
            <Plus size={18} /> Create Post
          </Button>
        )}
      </div>

      {/* Feed */}
      <div className="flex flex-col gap-6">
        {posts.map((post) => (
          <div key={post.id} className="glass-card p-6 border-white/5 hover:border-primary/20 transition-all group">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-lg">
                  {post.avatar}
                </div>
                <div>
                  <div className="font-bold text-white group-hover:text-primary transition-colors">{post.author}</div>
                  <div className="text-[10px] text-light-muted uppercase tracking-widest font-bold">{post.role} • {post.time}</div>
                </div>
              </div>
              <span className="text-[10px] font-bold px-3 py-1 bg-white/5 text-primary rounded-full uppercase tracking-widest border border-primary/20">
                {post.category}
              </span>
            </div>
            
            <p className="text-light-muted leading-relaxed mb-6">
              {post.content}
            </p>

            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex gap-6">
                <button className="flex items-center gap-2 text-xs text-light-muted hover:text-primary transition-colors">
                  <Heart size={16} /> {post.likes}
                </button>
                <button className="flex items-center gap-2 text-xs text-light-muted hover:text-secondary transition-colors" onClick={() => setShowContactModal(post.author)}>
                  <MessageSquare size={16} /> {post.comments}
                </button>
                <button className="flex items-center gap-2 text-xs text-light-muted hover:text-white transition-colors">
                  <Share2 size={16} /> Share
                </button>
              </div>
              <Button variant="outline" size="sm" className="text-[10px] font-bold uppercase tracking-widest border-primary/30 text-primary hover:bg-primary hover:text-white flex items-center gap-2" onClick={() => setShowContactModal(post.author)}>
                <User size={12} /> Contact Senior
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Create Post Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-xl glass-card p-8 border-primary/30 shadow-2xl relative animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setShowCreateModal(false)}
              className="absolute top-4 right-4 text-light-muted hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
              <Plus className="text-primary" /> Create New Post
            </h2>
            <textarea 
              value={newPostContent}
              onChange={(e) => setNewPostContent(e.target.value)}
              placeholder="What's on your mind? Share tips, resources, or updates..."
              className="w-full h-40 bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-primary transition-all resize-none mb-6 shadow-inner"
            />
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <button className="text-light-muted hover:text-primary transition-colors"><ImageIcon size={20} /></button>
                <button className="text-light-muted hover:text-primary transition-colors"><MessageSquare size={20} /></button>
              </div>
              <Button onClick={handleCreatePost} className="flex items-center gap-2 bg-primary px-8">
                <Send size={18} /> Post
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Contact Senior Modal */}
      {showContactModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="w-full max-w-md glass-card p-8 border-secondary/30 shadow-2xl relative animate-in zoom-in-95 duration-300 text-center">
            <button 
              onClick={() => setShowContactModal(null)}
              className="absolute top-4 right-4 text-light-muted hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mx-auto mb-6">
              <MessageSquare size={40} />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Contact {showContactModal}</h2>
            <p className="text-light-muted text-sm mb-8">Send a direct message to this senior to ask questions or request help.</p>
            
            <textarea 
              placeholder={`Hi ${showContactModal}, I have a question about your post...`}
              className="w-full h-32 bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-secondary transition-all resize-none mb-6"
            />
            
            <Button onClick={() => { alert(`Message sent to ${showContactModal}!`); setShowContactModal(null); }} className="w-full bg-secondary hover:bg-secondary-dark text-white flex items-center justify-center gap-2">
              <Send size={18} /> Send Message
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
