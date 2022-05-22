import { trigger, animate, transition, style, group, query } from '@angular/animations';

export const slideInAnimation = trigger('slideInAnimation', [
   
    transition('* <=> *', [
   
        query(':enter, :leave', style({ position: 'absolute', top: '0%', width: '100%' }), { optional: true }),
   
        group([
   
            query(':enter', [
                style({ left: '100%', opacity: '0%' }),
                animate('0.6s ease-in-out', style({ left: '0%', opacity: '100%' }))
            ], { optional: true }),
   
            query(':leave', [
                style({ left: '0%', opacity: '100%' }),
                animate('0.6s ease-in-out', style({ left: '100%', opacity: '0%' }))
            ], { optional: true })
        ])
    ])
]);