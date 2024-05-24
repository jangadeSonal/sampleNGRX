import { Article } from './models/article.model';
import { Users } from './models/users.model';

export interface AppState {
	articleState: ArticleState;
	userState: UserState;
}

export interface ArticleState {
	articles: Article[];
	message: any;
} 


export interface UserState {
	loading: boolean;
	users : Users[];
	selectedUser: Users | null;
	message: any;
} 