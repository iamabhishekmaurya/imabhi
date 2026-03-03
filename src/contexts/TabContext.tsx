"use client";

import { createContext, useContext, useState, ReactNode } from 'react';

type ProjectCategory = 'all' | 'featured' | 'open-source' | 'in-progress' | 'maintenance' | 'archived';

interface TabContextType {
  activeTab: ProjectCategory;
  setActiveTab: (tab: ProjectCategory) => void;
}

const TabContext = createContext<TabContextType | undefined>(undefined);

export function TabProvider({ children }: { children: ReactNode }) {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('in-progress');

  return (
    <TabContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabContext.Provider>
  );
}

export function useTab() {
  const context = useContext(TabContext);
  if (context === undefined) {
    throw new Error('useTab must be used within a TabProvider');
  }
  return context;
}
