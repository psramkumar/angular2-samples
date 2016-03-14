/*export class Task implements TaskIF{
	title: string;
	completed: boolean;
	description: string;
	created_at: Date;
	updated_at: Date;
}
*/

export interface Task {
	title: string,
	completed: boolean,
	description: string,
	created_at: Date,
	updated_at: Date	
}
