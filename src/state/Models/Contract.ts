export interface Contract {
  id?: string;
  contractName: string;
  contractType: string;
  dueDate: Date;
  workInterval: Array<Date>;
}
