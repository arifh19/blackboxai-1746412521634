export const canAccess = (user, subject) => {
  if (!user || !user.ability) return false;
  return user.ability.some(
    (a) => (a.action === 'manage' && a.subject === 'all') || (a.action === 'read' && a.subject === subject)
  );
};
