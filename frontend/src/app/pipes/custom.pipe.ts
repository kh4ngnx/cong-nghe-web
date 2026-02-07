import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "customPipe",
  pure: true,
})
export class CustomPipe implements PipeTransform {
  transform(value: any) {
     return `ID: ${value.id} - Title: ${value.title}`;
  }
}
