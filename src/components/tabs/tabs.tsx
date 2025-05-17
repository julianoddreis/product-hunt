import { createContext, useContext, useState, type ReactNode } from "react";

import { TabsContainer, TabListComponent, TabComponent, TabPanelComponent } from "./tabs.styles";

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
      <TabsContainer>{children}</TabsContainer>
    </TabsContext.Provider>
  );
}

interface TabListProps {
  readonly children: ReactNode;
}

export function TabList({ children }: TabListProps) {
  return <TabListComponent>{children}</TabListComponent>;
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
    <TabComponent
      isSelected={isSelected}
      onClick={() => setCurrent(index)}
      aria-label={`tab-${index}`}
      role="tab"
      aria-selected={isSelected}
      aria-controls={`panel-${index}`}
    >
      {children}
    </TabComponent>
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
    <TabPanelComponent role="tabpanel" id={`panel-${index}`} aria-labelledby={`tab-${index}`}>
      {children}
    </TabPanelComponent>
  );
}
