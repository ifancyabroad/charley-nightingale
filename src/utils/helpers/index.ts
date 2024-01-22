import { images } from '@/utils/constants';
import { ImageType } from '@/utils/enums';
import { IImage } from '@/utils/types';

export function getImageData(type: ImageType): IImage[] {
    return images[type];
  }