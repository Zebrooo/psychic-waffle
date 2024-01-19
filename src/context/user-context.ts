import { createContext } from 'react';
export interface UserContextInterface {
	name: string;
	group: string;
	avatar: string;
	email: string;
	about: string;
}
export const UserContext = createContext<User | null>(null);

UserContext.displayName = 'UserContext';
