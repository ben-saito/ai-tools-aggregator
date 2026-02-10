import { persistentMap } from '@nanostores/persistent';

export interface ComparisonState {
  selectedTools: string[];
  isOpen: boolean;
}

// Persist selected tools in local storage
// We store as a JSON string because persistentMap is for simple key-value pairs
// or we can use a computed store if we want more complex logic, but let's keep it simple.
// Actually, persistentMap stores strings. Let's use persistentAtom for an array? 
// @nanostores/persistent supports maps where values are strings.
// Let's use a simple atom and manual persistence or just encode the array as a string.
// A simpler approach for array persistence is often just to use a map where keys are IDs and values are 'true'.

export const selectedToolsMap = persistentMap<Record<string, string>>('comparison_tools:', {});

export const MAX_SELECTION = 3;

export function toggleTool(toolId: string) {
  const current = selectedToolsMap.get();
  const isSelected = !!current[toolId];

  if (isSelected) {
    selectedToolsMap.setKey(toolId, undefined!); // Remove
  } else {
    const count = Object.keys(current).length;
    if (count >= MAX_SELECTION) {
      alert(`You can only compare up to ${MAX_SELECTION} tools at a time.`);
      return;
    }
    selectedToolsMap.setKey(toolId, 'true');
  }
}

export function clearComparison() {
  selectedToolsMap.set({});
}
