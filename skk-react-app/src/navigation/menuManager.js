import { useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import { adminMenuItems, userMenuItems } from './menuConfig';
import { canAccess } from './abilityUtils';

export const useMenu = (role) => {
  const { user, logoutUser } = useContext(AuthContext);

  let menuItems = [];
  if (role === 'admin') {
    menuItems = adminMenuItems;
  } else {
    menuItems = userMenuItems;
  }

  const filteredMenuItems = menuItems.filter((item) => canAccess(user, item.subject));

  return { user, logoutUser, filteredMenuItems };
};
