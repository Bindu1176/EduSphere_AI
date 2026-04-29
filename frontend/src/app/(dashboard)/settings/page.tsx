'use client';

import { Settings, Shield, Bell, Moon, Globe, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from '@/components/ui/ThemeToggle';

export default function SettingsPage() {
  const sections = [
    { title: 'Appearance', icon: <Moon size={20} />, description: 'Customize how EduSphere looks on your device.', hasToggle: true },
    { title: 'Security', icon: <Shield size={20} />, description: 'Update your password and manage two-factor authentication.' },
    { title: 'Notifications', icon: <Bell size={20} />, description: 'Choose which alerts you want to receive.' },
    { title: 'Language', icon: <Globe size={20} />, description: 'Change the default language of the application.' },
    { title: 'Help & Support', icon: <HelpCircle size={20} />, description: 'Get assistance or report an issue.' },
  ];

  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-8 pb-12">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2 flex items-center gap-3">
          <Settings className="text-primary" size={28} /> Settings
        </h1>
        <p className="text-light-muted">Manage your account preferences and application settings.</p>
      </div>

      <div className="flex flex-col gap-4">
        {sections.map((section, i) => (
          <div key={i} className="glass-card p-6 border-white/5 flex items-center justify-between hover:bg-white/5 transition-colors">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-white/5 rounded-xl text-primary">
                {section.icon}
              </div>
              <div>
                <h3 className="font-bold text-white">{section.title}</h3>
                <p className="text-sm text-light-muted">{section.description}</p>
              </div>
            </div>
            {section.hasToggle ? (
              <div className="flex items-center gap-4">
                 <span className="text-xs font-semibold text-light-muted uppercase tracking-wider">System Theme</span>
                 <ThemeToggle />
              </div>
            ) : (
              <Button variant="outline" size="sm">Configure</Button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 p-6 glass-card bg-red-500/10 border-red-500/20">
        <h3 className="text-red-400 font-bold mb-2">Danger Zone</h3>
        <p className="text-sm text-light-muted mb-4">Permanently delete your account and all associated data. This action cannot be undone.</p>
        <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500 hover:text-white">Delete Account</Button>
      </div>
    </div>
  );
}
