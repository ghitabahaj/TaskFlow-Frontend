
export interface TaskDTO {
    id?: number;
    title: string;
    description: string;
    expDate: Date; 
    statusTask: string; 
    tags: TagDTO[];
    userAssignedBefore: number;
    assignedDate?: Date; 
    hasChanged: boolean;
    user: number;
    taskChangeRequest: number;
  }
  export interface TagDTO {
    id?:number;
    name: string;
  }