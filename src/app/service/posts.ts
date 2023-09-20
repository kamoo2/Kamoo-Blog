import { promises as fs } from 'fs';
import path from 'path';

import { Menu } from '@/app/lib/types';

export function getAllMenus(): Promise<Menu[]> {
  const filePath = path.join(process.cwd(), 'data', 'menus.json');
  return fs.readFile(filePath, 'utf-8').then<Menu[]>(JSON.parse);
}
