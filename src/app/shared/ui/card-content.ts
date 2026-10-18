import { CardContent } from './content-card/content-card';

export interface ServiceCardData extends CardContent {
  readonly type: 'service';
}

export interface ProductCardData extends CardContent {
  readonly type: 'product';
}

export interface PackageCardData extends CardContent {
  readonly type: 'package';
}

export interface PostCardData extends CardContent {
  readonly type: 'post';
}

export interface PartnerCardData extends CardContent {
  readonly type: 'partner';
}

export interface ProjectCardData extends CardContent {
  readonly type: 'project';
}
