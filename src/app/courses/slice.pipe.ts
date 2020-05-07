import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:"slice"
})

export class SliceText implements PipeTransform{
    transform(value: string, ...args: any[]): any{
        return value.substr(0,20) + "..."
    }
}