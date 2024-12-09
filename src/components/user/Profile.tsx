"use client";

import { useAuth } from '@/context/AuthContext';

export default function Profile() {
  const { username } = useAuth();

  return (
    <div className="bg-muted/50 rounded-2xl p-8">
      <h2 className="text-2xl font-light mb-6">Profile Information</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm text-muted-foreground mb-1">Username</label>
          <p className="text-foreground">{username}</p>
        </div>
        {/* Add more profile fields here */}
      </div>
    </div>
  );
} 