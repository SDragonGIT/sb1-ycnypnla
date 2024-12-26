import { Observable } from '@nativescript/core';
import { PrashnaCalculator, PrashnaResult } from '../../models/prashna/prashna-calculator';

export class PrashnaViewModel extends Observable {
    private _questionTopic: string = '';
    private _result: PrashnaResult | null = null;
    private _hasResult: boolean = false;
    private calculator: PrashnaCalculator;

    constructor() {
        super();
        this.calculator = new PrashnaCalculator();
    }

    navigateToMeditation() {
        if (!this._questionTopic) return;
        
        Frame.topmost().navigate({
            moduleName: "views/prashna/meditation-page",
            context: { questionTopic: this._questionTopic }
        });
    }

    // ... rest of the existing code ...
}