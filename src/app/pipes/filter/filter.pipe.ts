import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'filter'
})

export class FilterPipe implements PipeTransform {

	transform(value: any, input: any): any {

		return input
			? value.filter((val: any) => val.name.toLowerCase().includes(input.toLowerCase()))
			: value;
	}
}