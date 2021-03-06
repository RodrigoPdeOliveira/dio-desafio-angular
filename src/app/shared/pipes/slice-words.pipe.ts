import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sliceWords" })
export class SliceWordsPipe implements PipeTransform {
  transform(value: string, start: number, end: number, suffix: string = ' ...'): string {
    if (value == null) return suffix;

    return value
      .split(" ")
      .splice(start, end)
      .join(" ") + suffix;
  }
}
