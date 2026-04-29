'use client';

import { useEffect, useState } from 'react';
import { User, Mail, Book, GraduationCap, MapPin, Calendar, Camera, Edit, Save, X } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('edusphere_user');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
      setEditedUser(parsedUser);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('edusphere_user', JSON.stringify(editedUser));
    setUser(editedUser);
    setIsEditing(false);
    alert('Profile updated successfully!');
    window.location.reload(); // Refresh to update header name
  };

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 pb-12">
      {/* Profile Header */}
      <div className="glass-card overflow-hidden border-white/5 shadow-2xl">
        <div className="h-40 bg-gradient-to-r from-primary/50 to-secondary/50 relative">
          <button className="absolute bottom-4 right-4 bg-dark/50 backdrop-blur-md p-2 rounded-full border border-white/10 text-white hover:bg-dark transition-colors">
            <Camera size={18} />
          </button>
        </div>
        <div className="px-8 pb-8 flex flex-col items-center sm:items-start sm:flex-row gap-6 -mt-12 relative z-10">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center text-white text-5xl font-bold border-4 border-dark shadow-2xl">
            {user.name.substring(0, 2).toUpperCase()}
          </div>
          <div className="flex-1 text-center sm:text-left mt-12 sm:mt-16">
            {isEditing ? (
              <input 
                type="text"
                value={editedUser.name}
                onChange={(e) => setEditedUser({...editedUser, name: e.target.value})}
                className="text-3xl font-bold text-white bg-white/5 border border-primary/30 rounded-lg px-2 py-1 focus:outline-none focus:border-primary w-full max-w-md"
              />
            ) : (
              <h1 className="text-4xl font-bold text-white mb-1">{user.name}</h1>
            )}
            <p className="text-light-muted flex items-center justify-center sm:justify-start gap-2 mt-2">
              <span className="text-primary font-semibold uppercase text-xs tracking-widest bg-primary/10 px-3 py-1 rounded-full">{user.role}</span>
              • ID: EDU-{user.id.substring(0, 8).toUpperCase()}
            </p>
          </div>
          <div className="mt-12 sm:mt-16 flex gap-2">
            {isEditing ? (
              <>
                <Button onClick={handleSave} className="flex items-center gap-2 bg-green-600 hover:bg-green-700">
                  <Save size={16} /> Save
                </Button>
                <Button onClick={() => setIsEditing(false)} variant="outline" className="flex items-center gap-2">
                  <X size={16} /> Cancel
                </Button>
              </>
            ) : (
              <Button onClick={() => setIsEditing(true)} className="flex items-center gap-2">
                <Edit size={16} /> Edit Profile
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Academic Details */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="glass-card p-6 border-white/5">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Book className="text-primary" size={20} /> Academic Information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Course', key: 'course', value: 'B.Tech Computer Science', icon: <GraduationCap size={18} /> },
                { label: 'Semester', key: 'semester', value: '6th Semester', icon: <Calendar size={18} /> },
                { label: 'Branch', key: 'branch', value: 'Artificial Intelligence', icon: <MapPin size={18} /> },
                { label: 'University ID', key: 'uniId', value: '2021BCSE088', icon: <User size={18} /> },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start p-4 bg-white/5 rounded-2xl border border-white/5">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-light-muted font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                    {isEditing ? (
                      <input 
                        type="text"
                        defaultValue={item.value}
                        className="text-white font-medium bg-transparent border-b border-primary/20 focus:outline-none focus:border-primary w-full"
                      />
                    ) : (
                      <p className="text-white font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 border-white/5">
            <h2 className="text-xl font-bold text-white mb-6">About Me</h2>
            {isEditing ? (
              <textarea 
                className="w-full bg-white/5 border border-primary/30 rounded-xl p-4 text-light-muted focus:outline-none focus:border-primary min-h-[100px]"
                defaultValue="Passionate Computer Science student specializing in AI and Web Technologies."
              />
            ) : (
              <p className="text-light-muted leading-relaxed">
                Passionate Computer Science student specializing in AI and Web Technologies. Currently exploring the intersections of agentic coding and academic automation.
              </p>
            )}
          </div>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-6">
          <div className="glass-card p-6 border-white/5">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Mail className="text-secondary" size={20} /> Contact Details
            </h2>
            <div className="flex flex-col gap-4">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs text-light-muted font-semibold uppercase tracking-wider mb-1">Official Email</p>
                {isEditing ? (
                   <input 
                     type="email"
                     value={editedUser.email}
                     onChange={(e) => setEditedUser({...editedUser, email: e.target.value})}
                     className="text-white font-medium bg-transparent border-b border-primary/20 focus:outline-none focus:border-primary w-full"
                   />
                ) : (
                  <p className="text-white font-medium truncate">{user.email}</p>
                )}
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/5">
                <p className="text-xs text-light-muted font-semibold uppercase tracking-wider mb-1">Phone Number</p>
                <p className="text-white font-medium">+91 98765 43210</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6 bg-primary/10 border-primary/20 text-center">
             <div className="flex items-center justify-center gap-2 text-green-400 font-bold mb-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                ACTIVE SESSION
             </div>
             <p className="text-[10px] text-light-muted">Your session will remain active for 7 days.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
