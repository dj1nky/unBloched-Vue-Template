export const useNavItemClasses = () => {
  const getNavItemClasses = (item, index, isActive, hoveredIndex) => {
    const active = isActive(item.ROUTE);
    const hovered = hoveredIndex === index;
    const hasSubLinks = item.SUB_LINKS;

    if (active && !hovered) {
      return "bg-dark rounded-lg hover:bg-white";
    }
    if (active && hasSubLinks) {
      return "bg-dark hover:rounded-t-lg";
    }
    if (active && !hasSubLinks) {
      return "bg-dark hover:rounded-lg";
    }
    if (!active && hasSubLinks) {
      return "hover:rounded-t-lg hover:bg-white hover:text-black";
    }
    if (!active && !hasSubLinks) {
      return "hover:rounded-lg hover:bg-white hover:text-black";
    }
    return "";
  };

  return { getNavItemClasses };
};
