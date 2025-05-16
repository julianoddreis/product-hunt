import { createContext, useContext, useState, type ReactNode } from "react";

import "./tabs.css";

interface TabsContextType {
  readonly current: number;
  readonly setCurrent: (index: number) => void;
}

const TabsContext = createContext<TabsContextType | null>(null);

interface TabsProps {
  readonly children: ReactNode;
}

export function Tabs({ children }: TabsProps) {
  const [current, setCurrent] = useState(0);

  return (
    <TabsContext.Provider value={{ current, setCurrent }}>
      <div className="tabs">{children}</div>
    </TabsContext.Provider>
  );
}

interface TabListProps {
  readonly children: ReactNode;
}

export function TabList({ children }: TabListProps) {
  return <div className="tab-list">{children}</div>;
}

interface TabProps {
  readonly children: ReactNode;
  readonly index: number;
}

export function Tab({ children, index }: TabProps) {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("Tab must be used within Tabs");
  }

  const { current, setCurrent } = context;

  const isSelected = current === index;

  return (
    <button
      className={`tab ${isSelected ? "selected" : ""}`}
      onClick={() => setCurrent(index)}
      role="tab"
      aria-selected={isSelected}
      aria-controls={`panel-${index}`}
    >
      {children}
    </button>
  );
}

interface TabPanelProps {
  readonly children: ReactNode;
  readonly index: number;
}

export function TabPanel({ children, index }: TabPanelProps) {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error("TabPanel must be used within Tabs");
  }

  const { current } = context;

  const isSelected = current === index;

  if (!isSelected) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      id={`panel-${index}`}
      aria-labelledby={`tab-${index}`}
      className="tab-panel"
    >
      {children}
    </div>
  );
}
