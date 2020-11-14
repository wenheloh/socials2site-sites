export interface BranchInfo {
  id: string;
  name: string;
  address: string;
  contactNumber?: string;
}

export interface Menu {
  name: string;
  route: string;
  action?: () => void;
};
