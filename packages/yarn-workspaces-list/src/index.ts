import { PackageInfo } from './package-info';
import { list } from './yarn-berry';
import { info, isClassic } from './yarn-classic';

export { phasedSort, topologicallySort } from './sort';
export { PackageInfo };

export interface ListOptions {
  cwd?: string;
}

export async function listWorkspaces(options: ListOptions = {}): Promise<PackageInfo[]> {
  return (await isClassic(options)) ? await info(options) : await list(options);
}
