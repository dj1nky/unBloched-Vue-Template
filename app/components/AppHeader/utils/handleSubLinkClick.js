export const handleSubLinkClick = (
  event,
  subLink,
  routeOrRouter,
  navigateTo,
  closeNav
) => {
  // Check if it's an anchor link (contains #)
  if (subLink.ROUTE.includes("#")) {
    event.preventDefault();
    const [path, anchor] = subLink.ROUTE.split("#");

    // Optionally close the mobile nav
    if (closeNav) closeNav();

    // Determine current path
    const currentPath =
      routeOrRouter?.path || routeOrRouter?.currentRoute?.value?.path;

    // If we're not on the target page, navigate first
    if (currentPath !== path) {
      // Navigate to the page first, then scroll to anchor after navigation
      navigateTo(subLink.ROUTE).then(() => {
        // Wait a bit for the page to fully render
        setTimeout(() => {
          const element = document.getElementById(anchor);
          if (element) {
            element.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }, 20);
      });
    } else {
      // We're already on the page, just scroll to the anchor
      const element = document.getElementById(anchor);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  } else {
    // For mobile, close nav on normal sublink
    if (closeNav) closeNav();
  }
};
