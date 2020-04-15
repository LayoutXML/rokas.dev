import {Publication} from './publication';
import {Link} from './link';

export class Project {
  title: string;
  codename: string; // used for project url and matches icon resource name
  summary: string;
  description: string; // description of the project, supports HTML tags
  googlePlayBannerUrl: string;
  publications: Publication[] = [];
  links: Link[] = [];
}
