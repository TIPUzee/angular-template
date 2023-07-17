import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpaces'
})
export class RemoveSpacesPipe implements PipeTransform
{
  transform(value: string): string
  {
    if (value)
    {
      return value.replace(/\s/g, ''); // Replace all spaces globally
    }
    return value;
  }
}
