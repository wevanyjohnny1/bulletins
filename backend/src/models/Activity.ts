import { v4 as uuidV4 } from 'uuid';

class Activity {
  id?: string;
  code: number;
  description: string;
  color: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidV4();
    }
  }
}

export { Activity };
