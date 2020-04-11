import {Publication} from './publication';

export class Project {
  title: string;
  codename: string; // used for project url and matches icon resource name
  summary: string;
  publications: Publication[] = [];
}
