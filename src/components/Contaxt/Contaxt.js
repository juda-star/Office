import React, { useContext } from 'react';
const UsersContext = React.createContext([]);
export const UsersProvider = UsersContext.Provider;
export function useUsersContext() {
    return useContext(UsersContext)
}

export default UsersContext;