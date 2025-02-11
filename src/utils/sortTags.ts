// src/utils/sortTags.ts
export const sortTags = (tags: string[]) => {
    const priorityList = ["web", "mobile", "design", "react", "node", "mongodb"];
    return tags.sort((a, b) => {
      const aPriority = priorityList.indexOf(a);
      const bPriority = priorityList.indexOf(b);
  
      if (aPriority !== -1 && bPriority === -1) return -1;
      if (bPriority !== -1 && aPriority === -1) return 1;
      if (aPriority !== -1 && bPriority !== -1) return aPriority - bPriority;
      return 0;
    });
  };